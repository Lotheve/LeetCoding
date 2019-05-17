// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/*
思路：遍历字符串 借用哈希表存储字符和游标 遍历过程中不断更新哈希表，遇到已经存在的字符并且该字符在游标右侧则计算长度。T(n) = O(n)
*/ 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var p1 = 0,p2 = 0;
    var num = 0,len = 0;
    var h = {};

    while (p2 < s.length) {
        var c = s.charAt(p2);
        if (c in h && h[c] >= p1) {
            if (len < num) {
                len = num;
            }
            num = p2 - h[c];
            p1 = h[c] + 1;
        } else {
            num++;
        }
        h[c] = p2;
        p2++;
    }
    if (len < num) {
        len = num;
    }
    return len;
};

// 测试用例
var num = lengthOfLongestSubstring("abcabcbb");
console.log(num); // 3