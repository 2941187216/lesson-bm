const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求 top250
// 输入一个 url， get
let allFilms = [];
https.get('https://movie.douban.com/top250', function (res) {
    console.log(res);
    // 分段返回   自己做一个拼接
    let html = '';
    // 有数据产生的时候  
    res.on('data', function (chunk) {
        html += chunk;
    })
    res.on('end', function () {
        console.log(html);
        const $ = cheerio.load(html);
        $('li .item').each(function () {
            // this 循环到当前这个电影
            // 当前这个电影的title
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');

            // 存入 数据库
            // 存入 本地 json 文件
            // console.log(title,star,pic);
            allFilms.push({
                title, star, pic
            })
        })
        fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
            if (!err) {
                console.log('文件写入完毕')
            }
        })
        // 图片下载
        downloadImage(allFilms);
    })
})

function downloadImage(allFilms) {
    for(let i = 0; i < allFilms.length; i++) {
        const pucUrl = allFilms[i].pic;
        // 下载
        // 页面 URL === html  浏览器渲染了
        // 图片 URL === 图片内容  浏览器也帮你渲染好了
        // xx.png 
        https.get(pucUrl, function(res){
            res.setEncoding('binary');
            let str = '';
            res.on('data', function(chunk){
                str += chunk;
            })
            res.on('end', function(){
                fs.writeFile(`./images/${i}.png`,str, 'binary', function(err) {
                    if(!err) {
                        console.log(`第${i}张图片下载成功`);
                    }
                })
            })
        })
    }
}