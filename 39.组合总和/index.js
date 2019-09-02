//这道题很容易想到树的结构，使用递归的思想，找出所有符合条件的组合。但是有个问题是重复问题，这个问题期初没什么想法，不过通过画树发现了规律：如果数组是有序的，在递归的时候，只要把比当前大的数组成的数组传入函数即可，因为比当前小的数，肯定在前面遍历的时候，已经搜索过了。，所以先对数组排个序，能解决重复问题。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function combinetionSortedSum(candidates, target) {
      let result = [];
      for (let i = 0; i < candidates.length; i++) {
        const v = candidates[i];
        if (v === target) {
          result.push([v]);
          break;
        } else if (v < target) {
          let sub = combinetionSortedSum(candidates.slice(i, candidates.length), target-v);
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

let result = combinationSum([2,3,6,7], 7);
console.log(result);  //[ [ 3, 2, 2 ], [ 7 ] ]