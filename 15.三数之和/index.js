// 这道题可以借助hash表进行两次循环来实现，但是时间复杂度n^2会被检测超时

// 这里的思路是依次遍历每一个人数
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
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
            if (target + nums[l] + nums[r] == 0) {
                result.push([target, nums[l], nums[r]]);
                do {
                    l++;
                } while (l < r && nums[l] == nums[l-1]);
            } else if (target + nums[l] + nums[r] < 0) {
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

let result = threeSum([-2,0,1,-2,4,-3,0,-1,3]);
console.log(result); // [ [ -3, -1, 4 ],[ -3, 0, 3 ],[ -2, -2, 4 ],[ -2, -1, 3 ],[ -1, 0, 1 ] ]