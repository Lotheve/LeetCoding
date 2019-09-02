/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s.length == 0) {
        if (p.length == 0) {
            return true;
        } else {
            if (p.length > 1 && p[1] === '*') {
                return isMatch('', p.slice(2));
            } else {
                return false;
            }
        }
    }
    if (p.length == 0) {
        return false;
    }
    let reg = p[0];
    if (reg == '.') {   //'.'的情况
        if (p.length > 1 && p[1] === '*') {
            if (p.length == 2) {
                return true;
            } else {
                let next = p[2];
                for (let i = 0; i < s.length; i++) {
                    const c = s[i];
                    if (isMatch(s.slice(i), p.slice(2))) {
                        return true;
                    }
                }
                return isMatch('', p.slice(2));
            }
        } else {
            return isMatch(s.slice(1), p.slice(1));
        }
    } else {    //非'.'的情况
        if (p.length > 1 && p[1] === '*') {   
            if (p.length == 2) {  //p只剩两位，第二位为*
                for (let i = 0; i < s.length; i++) {
                    const c = s[i];
                    if (c !== reg) {
                        return false;
                    }
                }
                return true;
            } else {    //p不止两位，第二位为*
                for (let i = 0; i < s.length; i++) {
                    const c = s[i];
                    if (c !== reg) { 
                        return isMatch(s.slice(i), p.slice(2));
                    } else {
                        if (isMatch(s.slice(i), p.slice(2))) {
                            return true;
                        }
                    }
                }
                return isMatch('', p.slice(2));
            }
        } else {
            if (s[0] === reg) {
                return isMatch(s.slice(1), p.slice(1));
            } else {
                return false;
            }
        }
    }
};

let result = isMatch('abbaaaabaabbcba','a*.*ba.*c*..a*.a*.');
console.log(result);    //true