// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// https://leetcode.com/problems/two-sum/description/

/*
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/*
解题关键在于匹配以数组中的m为例，是否存在另一个数m使得targert-n=m
思路一：暴力遍历 T(n) = O(n^2)
思路二：两次哈希表，第一次遍历创建数组中值与索引的哈希映射表，第二次遍历匹配哈希表中是否存在key为targert-n的项。（这种方式有个局限，JS中不允许key相同的两个项，一旦存在这种情况则会出现错误）T(n) = O(n^2)
思路三：一次哈希表，对思路二进行改进。第一次遍历数组的时候边创建哈希表边匹配哈希表中是否存在targert-n的项。 T(n) - O(n^2)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var numObj = {}; 
    for (let i = 0; i < nums.length; i++) {
        let expectNum = target - nums[i];
        if (numObj[expectNum] != undefined) {
            return [numObj[expectNum], i];
        }
        numObj[nums[i]] = i;
    }
    return undefined;
};

// 测试用例
var result = twoSum([2,5,11,14],16);
console.log(result); // [ 1, 2 ]


