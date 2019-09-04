// 借助哈希表

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    if (v > 0) {
      const v = nums[i];
      map[v] = "1";
    }
  }
  let i = 1;
  while (i in map) {
    i++;
  }
  return i;
};

let result = firstMissingPositive([7,8,9,11,12]);
console.log(result);