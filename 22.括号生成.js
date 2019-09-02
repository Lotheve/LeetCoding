// 动态规划 重点是找出n相对于n-1多出了哪几种情况。
// 此处n相比n-1，多了一组括号，问题在于多出的这组括号的位置放在哪。换个角度，对于多出的一组'()'，怎么把i-1组括号插入进去。进过分析，因为最左边的括号肯定是'('，所以要么在这组括号中间插入，要么在括号右边插入。即对于n=i的情况，可能的排列为：'('+[p组括号的可能排列]+')'+[q组括号的可能排列]，其中p+q=n-1。这样就可以用递归的思想来实现。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return [];
  }
  let result = [];
  for (let p = 0; p <= n-1; p++) {
    let q = n-1-p;
    let ps = generateParenthesis(p);
    let qs = generateParenthesis(q);

    for (let i = 0; i < (ps.length === 0 ? 1 : ps.length); i++) {
      for (let j = 0; j < (qs.length === 0 ? 1 : qs.length); j++) {
        result.push('('+ (ps.length > 0 ? ps[i] : '') +')'+ (qs.length > 0 ? qs[j] : ''));
      }
    }
  }
  return result;
};

let result = generateParenthesis(3);
console.log(result);  //[ '()()()', '()(())', '(())()', '(()())', '((()))' ]