// 长方形的面积的函数
function area(w, h) {
    // 两个参数
    if (arguments.length < 2){
    
    console.error('参数不够');
    throw new Error('请输入两个参数');
    return;
    }

    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
    
}

var area = function(w, h) {
    // 匿名函数
}

let getArea = (w, h) => w*h; // es6

// 有什么问题吗？