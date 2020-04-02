let enc_qq = [6,3,1,7,5,8,9,2,4];

//console.log(typeof enc_qq);//object 对象的一种，可以枚举
//移除第一个元素， 第二个元素放置到最后
//不满足条件就退出

qq = [];//真正的qq
head = 0;//头指针 变量中间值
tail = 9;//尾指针

while(head < tail) {//退出条件是什么？
    qq.push(enc_qq[head]) //抽象能力
    head ++;
    enc_qq[tail] = enc_qq[head];//相邻的元素变成了新的尾部
    tail++;
    head++;
}

console.log(qq.join(''));