// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5

/*思路：要求时间复杂度为log级别，因此不能用简单的归并后再获取中位数的的方式。根据有序+log考虑到二分法，此处用递归实现*/

/**
 * @param {number[]} num1
 * @param {number[]} num2
 * @return {number}
 */
var findMedianSortedArrays = function (num1, num2) {
    var len = num1.length + num2.length;
    if (len & 1) {
        return findK(num1, num1.length, num2, num2.length, (len>>1)+1);
    } else {
        return (findK(num1, num1.length, num2, num2.length, len>>1) + findK(num1, num1.length, num2, num2.length, (len>>1)+1))/2;
    }
};

/**
 *查找第k大的数
 *
 * @param {*} A 数组A
 * @param {*} m 数组A长度
 * @param {*} B 数组B
 * @param {*} n 数组B长度
 * @param {*} k 目标第k大
 */
function findK(A, m, B, n, k) {

    if (k > m+n) {
        return;
    }
    //保证A长度总是比B小
    if (m > n) {
        return findK(B, n, A, m, k);
    }
    if (m === 0) {
        return B[k-1];
    }
    if (k === 1) {
        return Math.min(A[0],B[0]);
    }

    var pm = Math.min(k >> 1, m);
    var pn = k - pm;

    if (A[pm-1] < B[pn-1]) {
        return findK(A.slice(pm),m-pm,B,n,k-pm);
    } else if (A[pm-1] > B[pn-1]) {
        return findK(A,m,B.slice(pn),n-pn,k-pn);
    } else {
        return A[pm-1];
    }
}

// 测试用例
var num1 = [1,2];
var num2 = [3,4];

var result = findMedianSortedArrays(num1, num2);
console.log(result);