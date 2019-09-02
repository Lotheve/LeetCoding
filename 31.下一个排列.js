//关键是找数学规律
//1.从后往前遍历，找到第一个非递增的数，例如用例中是4，记下其位置k，并停止遍历。若始终递增，则反转数组即可
//2.从后往前找到k后面的递增的数列中首个比4大的数，并与4交换位置
//3.此时k后面的数依旧是递增的，只需要这部分数列进行反转即可

//反转数列函数
function reverseNums(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */ 
var nextPermutation = function(nums) {
  if (nums.length === 0) return nums;
  let k = -1;
  for (let i = nums.length-1; i > 0; i--){
    if (nums[i] > nums[i-1]) {
      k = i-1;
      break;
    }
  }
  if (k == -1) {
    reverseNums(nums, 0, nums.length - 1);
  } else {
    for (let i = nums.length-1; i > k; i--) {
      if (nums[i] > nums[k]) {
        let temp = nums[k];
        nums[k] = nums[i];
        nums[i] = temp;
        break;
      }
    }
    reverseNums(nums, k+1, nums.length - 1);
  }
};

let nums = [1,5,8,4,7,6,5,3,1];
nextPermutation(nums);
console.log(nums);  //[ 1, 5, 8, 5, 1, 3, 4, 6, 7 ]