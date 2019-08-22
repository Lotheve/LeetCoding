// 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let p = -1;
    while (l <= r) {
      let m = Math.ceil((l+r)/2);
      if (target === nums[m]) {
        p = m;
        break;
      } else if (target < nums[m]) {
        r = m-1;
      } else {
        l = m+1;
      }
    }
    if (p>-1) {
      return p;
    } else {
      return l;
    }
};

let result = searchInsert([1,3,5,6], 5);
console.log(result);