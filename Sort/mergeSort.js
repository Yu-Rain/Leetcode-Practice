/**
 * 归并排序, 递归实现
 * 先拆分成小数组
 * 然后对两个小数组进行排序, 得到一个有序的大数组

 * 时间复杂度: O(NlogN) , 拆分数组一共会有logN层, 每层的时间复杂度是o(2N) (合并数组 时间为N, 将合并后的结果复制到原数组的时间 为N)
 * 空间复杂度: O(N)
 * 是稳定排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) return nums;
  // 先创建好临时存储元素的数组, 避免在递归过程中开辟过多的临时空间
  const result = new Array(nums.length);
  mergeSort(nums, 0, nums.length - 1, result);

  // 对 start 到 end 区间的数组进行归并排序
  function mergeSort(nums, start, end, result) {
    // 只剩下一个元素的时候, 停止拆分
    if(start === end) return;
    const mid = Math.trunc((start + end) / 2);
    // 拆分左边区域
    mergeSort(nums, start, mid, result);
    // 拆分右边区域
    mergeSort(nums, mid + 1, end, result);

    // 合并左右有序数组
    merge(nums, start, mid, end, result);
  }

  function merge(arr, start, mid, end, result) {
    const start2 = mid + 1;
    // 两个指针分别指向两个数组的首部下标
    let p1 = start;
    let p2 = start2;

    while(p1 <= mid && p2 <= end) {
      // result数组中存储有序元素的位置始终等于 start 加上 index1 和 index2的移动距离
      const resultIndex = start + (p1 - start) + (p2 - start2);
      if (arr[p1] <= arr[p2]) {

        result[resultIndex] = arr[p1];
        p1++;
      } else {
        result[resultIndex] = arr[p2];
        p2++;
      }
    }
    // 补齐剩余数字
    while(p1 <= mid) {
      result[p1 + p2 - start2] = arr[p1];
      p1++;
    }
    while(p2 <= end) {
      result[p1 + p2 - start2] = arr[p2];
      p2++;
    }
    // 将result操作区间的数字拷贝到arr数组中, 以便下一次比较.
    while(start <= end) {
      arr[start] = result[start];
      start++;
    }

  }
  return nums
};
