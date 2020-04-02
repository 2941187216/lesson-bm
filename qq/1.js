
let arr = [];
let nums = '631758924';
// console.log(typeof nums);
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2);
nums += c;

console.log(nums,arr);