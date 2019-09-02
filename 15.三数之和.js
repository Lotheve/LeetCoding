// 这道题可以借助hash表进行两次循环来实现，但是时间复杂度n^2会被检测超时

// 这里的思路是先排序（排序时间复杂度nlogn），再对排好序后的数进行从左到右遍历。若当前遍历第1个数，则设置左指针2和右指针length-1分别指向第二个数及最后一个，比较这3个数的和是否与0的关系。若相等，则是有效的一组数；若大于0，说明整体过大，向左移动右指针；若小于0，说明整体过小，向右移动作指针。不管对比结果如果，都要等左右指针重合，当前数才算遍历完毕。
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