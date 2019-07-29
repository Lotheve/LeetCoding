/**
 * @param {string} s
 * @return {number}
 */

// 思想：递归

const map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    'IV':4,
    'IX':9,
    'XL':40,
    'XC':90,
    'CD':400,
    'CM':900
}

var romanToInt = function(s) {
    if (s in map) {
        return map[s];
    }
    let temp = s[0];
    if ((s[0] + s[1]) in map ) {
        temp = s[0] + s[1]
    }
    if (temp === s) {
        return map[temp];
    } else {
        return romanToInt(temp) + romanToInt(s.replace(temp,''));
    }
};

let result = romanToInt('MCMXCIV');
console.log(result);