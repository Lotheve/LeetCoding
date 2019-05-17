/* 通过在字符串中插入占位符，遍历字符串，逐一比较当前索引处字符两边相同间隔的字符，直到两边字符不相等 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let arr = s.split("");
    let str = arr.join("*");
    str += "*";
    str = "*" + str;

    var result = "";
    for (let i = 1; i < str.length - 1; i++) {
        let step = 1, l = 1;
        while (i - step >=0 && i + step < str.length && str[i - step] == str[i + step]) {
            step += 1;
            l += 2;
        }
        if (l > result.length) {
            result = str.slice(i - (step-1), i + (step-1) + 1);
        }
    }
    return result.replace(/\*/g, "");
};

console.log(longestPalindrome('asaadaa'));      //aadaa