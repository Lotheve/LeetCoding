
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        continue;
      } else {
        nums[index] = nums[i];
        index++;
      }
    }
    return index;
};

let result = removeElement([0,1,2,2,3,0,4,2], 2);
console.log(result);  //5
