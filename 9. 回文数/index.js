/* 
因为不允许转换成字符串，所以可以采用将数值反转后比对的方式。但是反正整个数值可能会造成反转后数值溢出，因此可以采用反转一半的方式。
怎么判断反转了一般？当未反转部分值小于反转后部分的值时，说明已经反转了一半了 

另外，负数和整十数都可以过滤掉
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } 
    if (x > 0 && x%10 == 0) {
        return false;
    }
    let temp = x;
    let reverseTemp = 0;
    while (temp > reverseTemp) {
        reverseTemp = reverseTemp * 10 + temp%10;
        temp = Math.floor(temp/10);
    }

    if (temp == reverseTemp || temp == Math.floor(reverseTemp/10)) {
        return true;
    } 
    return false;
};

isPalindrome(123321);   //true