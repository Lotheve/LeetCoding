/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let min = -1, max = -1;
  let l = 0, r = nums.length-1;
  let p = -1;
  while (l <= r) {
    let m = Math.ceil((l+r)/2);
    if (nums[m] == target) {
      p = m;
      break;
    } else if (nums[m] < target) {
      l = m+1;
    } else {
      r = m-1;
    }
  }
  if (p != -1) {
    min = p;
    max = p;
    while (min > 0 && nums[min-1] == target) {
      min--;
    }
    while (max < nums.length-1 && nums[max+1] == target) {
      max++;
    }
  }
  return [min, max];
};

let result = searchRange([1,2,2], 2);
console.log(result);