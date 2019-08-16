//做这道题的时候起初的想法是遍历元素把元素本身压入栈中，然后查找规律，发现类似情况“()(()”无法通过一次遍历得到结果。
//换个思路，把元素下标入栈来查找规律，因为通过下标，更能计算长度。 
//只需在遍历到")"时计算长度
//遍历字符串，若为"("，将索引压栈。若为")"，将栈顶元素出栈，此时若栈不为空，则当前索引减去当前栈顶元素值则为当前元素结尾的最大有效长度；若栈为空，则将当前索引压栈。

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  let iStack = [-1];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      iStack.push(i);
    } else {
      iStack.pop();
      if (iStack.length == 0) {
        iStack.push(i);
      } else {
        maxLen = Math.max(maxLen, i-iStack[iStack.length-1]);
      }
    }
  }
  return maxLen;
};

let result = longestValidParentheses("()(()");
console.log(result);  //2

