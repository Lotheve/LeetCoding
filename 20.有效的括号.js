// 栈的简单应用

/**
 * @param {string} s
 * @return {boolean}
 */

let map = {
  ')':'(',
  '}':'{',
  ']':'['
}
var isValid = function(s) {
  let stack = [];
  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] == map[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length == 0;
};

let result = isValid('{[]}');
console.log(result);