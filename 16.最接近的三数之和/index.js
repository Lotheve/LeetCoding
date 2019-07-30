// 和第15题相似

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let minDif = Number.MAX_VALUE;
    let result = Number.MAX_VALUE;
    for (let i = 0; i < nums.length-2; i++) {
      let l = i+1,r = nums.length-1;
      while (l != r) {
        if (nums[i] + nums[l] + nums[r] == target) {
          return target;
        } else if (nums[i] + nums[l] + nums[r] < target) {
          let dif = Math.abs(nums[i] + nums[l] + nums[r] - target)
          if (dif < minDif) {
            minDif = dif;
            result = nums[i] + nums[l] + nums[r];
          }
          do {
            l++
          } while (l < r && nums[l] == nums[l-1]);
        } else {
          let dif = Math.abs(nums[i] + nums[l] + nums[r] - target)
          if (dif < minDif) {
            minDif = dif;
            result = nums[i] + nums[l] + nums[r];
          }
          do {
            r--;
          } while (l < r && nums[r] == nums[r+1]);
        }
      }
    }
    return result;
};

let result = threeSumClosest([-1,2,1,-4], 1);
console.log(result);  //2