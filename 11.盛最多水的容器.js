/**
 * @param {number[]} height
 * @return {number}
 */

//暴力解法 双重循环 时间复杂度0(n^2);
// var maxArea = function(height) {
//     let max = 0;
//     for (const [i, v] of height.entries()) {
//         for (let j = i; j < height.length; j++) {
//             const e = height[j];
//             let value = (j-i)*(Math.min(e,v));
//             if (value > max) {
//                 max = value;
//             }
//         }
//     }
//     return max;
// };

//双指针法，分别指向开头和结尾
//核心思路：先令指针分别指向开头和结尾，这样使得矩形长度最大。要先扩大矩形面积，就是把高度边大，因此将长度短的一边的指针往里靠，这样虽然宽度减小了，但是可能因为高度变大而使得面积增大。如果将长度高的一边的指针往里靠，因为高度是区两条边的较小者，因此这是高度肯定不会变大，再加小宽度变小，面积也就不会变大。所以选择把长度短的一遍的指针往里靠，这样面积有可能变大。值得指针相遇
var maxArea = function(height) {
    let l = 0, r = height.length-1;
    let max = 0;
    while (l != r) {
        max = Math.max((r-l)*Math.min(height[l],height[r]), max); 
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};

let result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(result);