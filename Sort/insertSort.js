/**
 * 插入排序, 移动插入法
 *   是对交换法的一种优化. 在交换法中, 每一次的交换都不一定是最终的位置. 所以我们可以先一直比较, 直到找到新数字的正确位置后, 只交换一次即可
 * 时间复杂度: o(n的平方)
 * 空间复杂度: o(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 从第二个数开始，往前插入数字
  for (let i = 1; i < nums.length; i++) {
    let currentNumber = nums[i];
    let j = i - 1;
    // 寻找插入位置的过程中，不断地将比 currentNumber 大的数字向后挪, 所以需要从后向前查找, 在查找过程中挪动数组元素.
    while (j >= 0 && nums[j] > currentNumber) {
      nums[j + 1] = nums[j];
      j--;
    }
    // 跳出循环后, 说明nums[j] <= currentNumber,
    // 下标j+1就是currentNumber需要插入的位置.
    // 或者 j 为 -1, 说明 currentNumber 是目前的最小值, 要放在数组首位.

    nums[j + 1] = currentNumber;
  }
  return nums;
};
