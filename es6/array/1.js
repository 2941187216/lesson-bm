const ages = [32,15,19,12];
//  找到所有大于18 的数组
//  for (let age of ages) {
//      if (age >= 18) {
//          nums.push(age);
//      }
//  }

//  console.log(nums);

// for(i = 0; i < ages.length -1; i++) {
//     if (ages[i] >  18)
//     return ages[i];
// }
// console.log(ages);

// 命名
// ages 数组，filter 语义化的 过滤
// 1.计数 for 机器化
// 2.表达性好一些 forEach 函数式编程 提升可读性
// const adultPresent = ages.filter(function(age,index) {
//     // console.log(age, index,o);
//     return age >= 18;
    
// });
const adultArr = ages.filter(age => age >= 18);
// 出席？有？
const adultPresent = ages.some(age => age >= 50) 
console.log(adultPresent);
// 所有人满足需求？
// ? 取名
// Present 出席 ALL
const allOldEnough = ages.every(age => age >= 18);