//1. leetcode 考试，程序员能通过他的考试，算法
//没问题。函数就是对一个功能进行封装 函数
//暴力解法耗时
// var twoSum = function(nums, target) {
//     //let a = 1;
//     let arr = [];
//     for (let i = 0; i < nums.length; i++){
//         //循环一遍 暴力解法
//         for (let j = i + 1; j < nums.length; j++){
//             //内层循环 不能自己加自己
//             if (nums[i] + nums[j] === target) {
//                 arr = [i, j];
//                 return arr;
//             }
//         }
//     }

// }

//省时间

const twoSum = function(nums, target) {
    //两重循环
    target , 一重循环, nums[i], target - nums[i]
    //一次就能找到？ {}
    let map = {};
    nums.forEach(function (e,i) {
        //console.log(e, i);
        map[e] = i;
    })
    //console.log(map);
    for (let i = 0; i < nums.length; i++) {
        let j = map[target - nums[i]];
        if (j && j !== i) {
            return [i, j];
        }
    }
};

console.log(twoSum([2,7,15,9], 9));