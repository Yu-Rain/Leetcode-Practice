/**
 * 时间复杂度: O(nlogn), 一共有logn层递归, 每层递归的时间复杂度是O(n);
 * 空间复杂度: O(n), 需要额外的O(n)空间的tmp数组保存, 递归空间是O(logn)
 * 稳定排序
 */

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  const tmp = new Array(nums.length);

  function mergeSort(nums, start, end) {
    if (start >= end) return;
    const mid = ((end - start) >> 1) + start;
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);

    let p1 = start;
    let p2 = mid + 1;
    let index = 0;

    while (p1 <= mid && p2 <= end) {
      if (nums[p1] <= nums[p2]) {
        tmp[index] = nums[p1];
        p1++;
      } else {
        tmp[index] = nums[p2];
        p2++;
      }
      index++;
    }
    while (p1 <= mid) {
      tmp[index++] = nums[p1++];
    }
    while (p2 <= end) {
      tmp[index++] = nums[p2++];
    }
    for (let i = 0; i < end - start + 1; i++) {
      nums[i + start] = tmp[i];
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return nums;
};







