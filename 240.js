/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
      return false
    }
    let row = matrix.length - 1 // 要遍历的行指针，从尾部遍历
    let col = matrix[0].length - 1 // 要遍历的列指针，从尾部遍历
    // 遍历行
    while (row >= 0) {
      if (matrix[row][col] === target) {
        return true
      }
      // 一行遍历完，换上一行
      if (col < 0) {
        row--
        col = matrix[0].length - 1 // 列指针重新指向尾部
        continue
      }
      col--
    }
    // 没找到
    return false
  };
  
  