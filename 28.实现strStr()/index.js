/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle[j]) {
        if (j == needle.length-1) {
          return i-j;
        } else {
          j++;
        }
      } else {
        i = i-j;
        j = 0;
      }
    }
    return -1;
};

let result = strStr("mississippi", "issip");
console.log(result);  //4