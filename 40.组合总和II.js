// 与上一题的区别在于目标数组中数字可以是重复的，同时结果数组中每个组合中每个数字只能出现一次。关键的问题是1.解决结果集重复的问题 2.解决结果集中每个组合中的数字不重复出现的问题
// 解决重复的问题，可以通过在上一题的基础上，执行for循环时，如果当前数与前一个数一致，就直接跳过
// 解决结果集中同一个数字不重复出现的问题，只要在递归的时候，把当前数字之后的数传入函数即可

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  function combinetionSortedSum(candidates, target) {
    let result = [];
    for (let i = 0; i < candidates.length; i++) {
      const v = candidates[i];
      if (i > 0 && v === candidates[i-1]) {
        continue;
      }
      if (v === target) {
        result.push([v]);
        break;
      } else if (v < target) {
        let sub = combinetionSortedSum(candidates.slice(i+1, candidates.length), target-v);
        if (sub.length > 0) {
          for (let i = 0; i < sub.length; i++) {
            const item = sub[i];
            item.push(v);
            result.push(item);
          }
        }
      } else {
        break;
      }
    }
    return result;
  }
  return combinetionSortedSum(candidates.sort((a,b)=>{
    return a-b;
  }), target);
};

let result = combinationSum2([10,1,2,7,6,1,5], 8);
console.log(result);  // [ [ 6, 1, 1 ], [ 5, 2, 1 ], [ 7, 1 ], [ 6, 2 ] ]