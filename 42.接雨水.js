/**
 * @param {number[]} height
 * @return {number}
 */

// 方法一 以行为目标，逐行遍历累加结果。例如遍历第1行，当高度小于1，就认为是一个有效位置。
// 结果超时 O(n^2)
// var trap = function(height) {
//     if (height.length == 0) {
//         return 0;
//     }
//     let result = 0;
//     for (let line = 1; line <= Math.max(...height); line++) {
//         let l = -1;
//         let temp = 0;
//         for (let i = 0; i < height.length; i++) {
//             const v = height[i];
//             if (v >= line) {
//                 if (l == -1) {
//                     l = i;
//                 } else {
//                     temp += i-l-1;
//                     l = i;
//                 }
//             }
//         }
//         result += temp;
//     }
//     return result;
// }


// 方法二 直接的思路，只要求出每列能盛多少水，累加起来即可。每列能盛的水的数量=Min(该列左边最大高度，该列右边最大高度) - 该列高度。
// 通过先记录每列左右两边的最大高度，时间复杂度均达到O(n)
// var trap = function(height) {
//     if (height.length == 0) {
//         return 0;
//     }
//     let lMaxMap = {};
//     let rMaxMap = {};
//     lMaxMap[0] = height[0];
//     rMaxMap[height.length-1] = height[height.length-1];
//     for (let i = 1; i < height.length; i++) {
//         const v = height[i];
//         lMaxMap[i] = Math.max(v, lMaxMap[i-1]);
//     }
//     for (let i = height.length-2; i >= 0; i--) {
//         const v = height[i];
//         rMaxMap[i] = Math.max(v, rMaxMap[i+1]);
//     }

//     let result = 0;
//     for (let i = 0; i < height.length; i++) {
//         const v = height[i];
//         result += Math.min(lMaxMap[i], rMaxMap[i]) - v;
//     }
//     return result;
// };

// 方法三 双指针法 方法二是保存了每个位置左右的最大值，是的S(n)达到了O(n)，其实可以借助双指针来实现O(1)的空间复杂度
// 方法二基于的核心思想是：一个位置的水的容量=Min(该位置左边最大柱子高度， 该位置右边最大柱子高度) - 该位置柱子高度。 这个思想没问题，但是要保存每个位子左右两边的最大柱子高度。改进一下思路：借助左右双指针，当左指针所在柱子高度小于右指针所在柱子高度时，则左指针出的水容量=左指针左边最大柱子高度-左指针坐在位置高度，如果左指针左边没有比左指针处柱子更大的高度，则更新左边最大高度为左指针处柱子高度即可。相反当右指针处柱子高度小于等于左指针处柱子高度时，这时候右指针处的水容量=右指针右边最大的柱子高度-右指针处柱子高度，这个思路完全是一样的。这种思想，只要借助两个变量来分别保存左边柱子最大高度和右边柱子最大高度，S(n)=O(1)
var trap = function(height) {
    let left = 0, right = height.length-1;
    let left_max = 0, right_max = 0;
    let result = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > left_max) {
                left_max = height[left];
            } else {
                result += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] > right_max) {
                right_max = height[right];
            } else {
                result += right_max - height[right];
            }
            right--;
        }
    }
    return result;
}


// 栈 遍历数组，当栈为空或者当前元素小于等于栈顶索引对应的值时，元素索引入栈；当前元素大于栈顶元素对应的值时，计算由当前元素及栈顶元素的前一个元素围成的水槽高度，并pop栈顶元素，直到当前元素小于等于栈顶元素对应的值。
// 注意入栈的是索引，目的是通过索引可以获取宽度
// T(n)、S(n)均为O(n)
// var trap = function(height) {
//     let result = 0;
//     let stack = [];
//     for (let i = 0; i < height.length; i++) {
//         const v = height[i];

//         while (stack.length > 0 && v > height[stack[stack.length - 1]]) {
//             let top = stack.pop();
//             if (stack.length == 0) {
//                 break;
//             }
//             //宽*高
//             result += (i-stack[stack.length-1]-1)*(Math.min(height[stack[stack.length-1]], v) - height[top]);
//         }
//         stack.push(i);
//     }
//     return result;
// }


let result = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(result);