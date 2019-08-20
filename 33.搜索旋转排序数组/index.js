// 二分法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let point = -1;
  let l = 0; r = nums.length - 1;
  while (l <= r) {
    let m = Math.ceil((l+r)/2);
    if (nums[m] == target) {
      return m;
    }
    if ((nums[m] >= nums[l] && target < nums[l]) || (nums[m] >= nums[l] && target > nums[m]) || (nums[m] < nums[l] && target > nums[m] && target < nums[l])) {
      l = m+1;
    } else {
      r = m-1;
    }
  }
  return -1;
};

let result = search([2,3,5,6,0,1], 5);
console.log(result);  // 2