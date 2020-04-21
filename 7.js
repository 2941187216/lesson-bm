/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x)
    let res = (Math.abs(x) + '').split('').reverse().join('') * sign
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(2, 31) * -1) res = 0
    return res


};