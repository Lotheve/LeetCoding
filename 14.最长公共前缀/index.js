/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let lens = strs.map((item)=>item.length);
    let minLen = Math.min(...lens);

    let result = '';
    for (let i = 0; i < minLen; i++) {     
        let temp = strs[0][i];
        for (let n = 1; n < strs.length; n++) {
            const str = strs[n];
            if (str[i] !== temp) {
                return result;
            }
        }
        result += temp;
    } 
    return result;
};

let result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result);    //fl