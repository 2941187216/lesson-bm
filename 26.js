/*  
 * @author lc
 *  @date 2020-4-14
 *  @func 原地删除重复数组中的重复数字  使用双指针算法
 *  @param {@type array} nums
 */
var removeDuplicates = function (nums) {
    //i指向初始位置
    let i = 0;
    // 遍历数组
    for(let j = 1; j < nums.length; j++) {
        // 前后数组元素不相等时
        // i指针后移
        // 把nums[j]赋值给nums[i]
        if(nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    // 数组长度为 下标+1
    return i + 1;
   
};
