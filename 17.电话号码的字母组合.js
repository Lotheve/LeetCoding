//两两处理

/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z'],
}
var letterCombinations = function(digits) {
  function compine(letter1, letter2) {
    let result = [];
    letter1.forEach(l1 => {
      letter2.forEach(l2 => {
        result.push(l1+l2);
      });
    });
    return result;
  }
  let letters = [];
  for (const d of digits) {
    letters.push(map[d]);
  }
  if (letters.length == 0) {
    return [];
  }
  let result = letters.reduce((pre, cur)=>{
    return compine(pre, cur);
  })
  return result;
};

let result = letterCombinations('23');
console.log(result);  //[ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]