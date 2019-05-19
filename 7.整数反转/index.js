/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let cur = x;
    let tag = x > 0;
    let maxValue = Math.pow(2,31)-1;
    let minValue = -Math.pow(2,31);
    while (cur != 0) {
        result = result*10+cur%10;
        if (result < minValue || result > maxValue) {
            return 0;
        }
        cur = parseInt(cur/10);
    }
    return result;
};

console.log(reverse(1534236469));