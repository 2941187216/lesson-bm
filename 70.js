/*  
 * @author lc
 *  @date 2020-4-14
 *  @func 爬楼梯算法
 *  @param {@type number} n
 */
function climbStairs(n) {
    // let f = [0, 1, 2];
    // for (let i = 3; i <= n; i++) {
    //     //从后往前计算
    //     f[i] = f[i-1] + f[i-2]
    // }
    // return f[n]
    // if (n >= 40) throw new Error('内存会溢出哦，亲！')
    // if (n == 1) return 1;
    // if (n == 2) return 2;
    // return climbStairs(n-1) + climbStairs(n-2);
}
// console.log(climbStairs(40))

// function f(n) {
//     const w = new Map();// es6 新的数据类型 map
//     // 高层一样
//     if (n >= 40) throw new Error('内存会溢出哦，亲！')
//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     if (w.has(n)) {
//         return w.get(n);
//     }
//     const ret =  f(n-1) + f(n-2);
//     // 存一下结果
//     w.set(n,ret);
//     console.log(n,'----------------')
//     return ret;
// }

// console.log(f(6))

// var m = new Map(); //JSON {a,b}
// m.set(1,"black");

// m.set({x:1},3);
// let obj = {};
// let i = 1;

// m.forEach( (item,key,mapObj) => {
//     i++;
//     console.log(item,key,mapObj);
// })
// console.log(i);

function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    // 重复计算的时间和内存就好更好
    // 变量就可以实现
    let ret = 0;
    let pre = 2; // 前一个是2
    let prepre = 1;
    for (let i = 3; i <= n; i++) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }
    return ret ;
}