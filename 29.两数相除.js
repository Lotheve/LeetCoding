//转换为二进制后通过减法和位移来实现 但是js中所有位运算的结果都会转换成32位的有符号整型，所以1<<31位是负的 这里用python3来实现了

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = (dividend>0)^(divisor>0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let count = 0;
    while (divisor <= dividend) {
      count++;
      divisor<<=1;
    }
    let result = 0;
    while (count > 0) {
      count--;
      divisor>>=1;
      if (divisor <= dividend) {
        result += 1<<count;
        dividend -= divisor;
      }
    }
    result = sign ? -result : result;
    if (result < -Math.pow(2,31) || result > Math.pow(2,31)-1) {
      return Math.pow(2,31) - 1;
    }
    return result;
};

let result = divide(10,3);
console.log(result);