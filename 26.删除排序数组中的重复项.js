/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        const e = nums[i];
        if (nums[index] === e) {
            continue;
        } else {
            index++;
            nums[index] = e;
        }
    }
    return index+1;
};

let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);   
console.log(result);    //5