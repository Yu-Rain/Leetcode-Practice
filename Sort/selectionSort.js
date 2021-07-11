/**
 * 选择排序思想:
 * 双重循环遍历数组, 每经过一轮比较, 找到最小元素的下标, 将其交换至首位.
 */

function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) { // 注意遍历范围起止点和冒泡的不同.
      if (arr[minIndex] > arr[j]) {
        // 记录最小值的下标
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

/**
 * 二元选择排序算法
 *  在每轮的比较中, 将最小值和最大值都找出来. 然后将最小值交换到首位, 最大值交换到末尾.
 *
 *  二元选择排序无法将选择排序的效率提升一倍
 *  但实测会发现二元选择排序的速度确实比选择排序的速度快一点点
 */
function dualSelectionSort(arr) {
  let minIndex, maxIndex;
  for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
    minIndex = i;
    maxIndex = i;
    for (let j = i + 1; j < arr.length - i; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    // 如果minIndex和maxIndex都相等, 那么他们必定都等于i, 且后面的所有数字此时已经排序完成
    if (minIndex === maxIndex) break;
    swap(arr, i, minIndex);
    // 如果最大值的下标刚好是 i, 由于arr[i] 和 arr[minIndex]已经交换了, 所以这里要更新maxIndex的值
    if (maxIndex == i) maxIndex = minIndex;
    // 将最大元素交换至末尾
    const lastIndex = arr.length - 1 - i;
    swap(arr, lastIndex, maxIndex);
  }
}



function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[j] ^ arr[i];
  arr[i] = arr[i] ^ arr[j];
}
