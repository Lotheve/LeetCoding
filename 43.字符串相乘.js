// 这种题目光想肯定想不出什么思路，拿笔算算，常规的算法列式，从中找到思路

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) {
      return '0';
    }
    let n1 = num1.length;
    let n2 = num2.length;
    let T = Array(n1+n2).fill(0);
    for (let i = n1-1; i >= 0; i--) {
      for (let j = n2-1; j >= 0; j--) {
        let temp = num1[i]*num2[j];
        T[i+j+1] += temp%10;
        T[i+j] += Math.floor(temp/10);
        if (T[i+j+1] >= 10) {
          T[i+j+1] -= 10;
          T[i+j] += 1;
        }
        if (T[i+j] >= 10) {
          T[i+j] -= 10;
          T[i+j-1] += 1;
        }
      }
    }
    let result = '';
    let start = T[0] == 0 ? 1 : 0;
    for (let i = start; i < T.length; i++) {
      result += T[i];
    }
    return result;
};

let result = multiply('123','456');
console.log(result);  //56088

