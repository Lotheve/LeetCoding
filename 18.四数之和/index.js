//要求4个数的和与目标是否匹配，只要有了3个数与目标是否匹配的方法，遍历一遍排好序的数组就能得到所有结果

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSumsMatched = function(nums, sum) {
  if (nums.length < 3) {
      return [];
  }
  nums = nums.sort((a,b)=>a-b);
  let result = [];
  for (let i = 0; i < nums.length-2; i++) {
      if (nums[i] == nums[i-1]) {
          continue;
      }
      const target = nums[i];
      let l = i+1, r = nums.length-1;
      while (l != r) {
          if (target + nums[l] + nums[r] == sum) {
              result.push([target, nums[l], nums[r]]);
              do {
                  l++;
              } while (l < r && nums[l] == nums[l-1]);
          } else if (target + nums[l] + nums[r] < sum) {
              do {
                  l++;
              } while (l < r && nums[l] == nums[l-1]);
          } else {
              do {
                  r--;
              } while (l < r && nums[r] == nums[r+1]);
          }
      }
  }
  return result;
}


var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  let result = [];
  nums = nums.sort((a,b)=>a-b);
  for (let i = 0; i < nums.length-3; i++) {
    if (i > 0 && nums[i] == nums[i-1]) {
      continue;
    }
    let threeNums = threeSumsMatched(nums.slice(i+1), target-nums[i]);
    threeNums.forEach(item => {
      result.push(item.concat(nums[i]));
    });
  }
  return result;
};

let result = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(result);  //[ [ -1, 1, 2, -2 ], [ 0, 0, 2, -2 ], [ 0, 0, 1, -1 ] ]