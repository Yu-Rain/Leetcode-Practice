/**
 * 递归方式
 * @param nums
 * @returns {*}
 */

function sortArray(nums) {
  // 首先判断边界条件
  if ((nums === null) || (nums.length < 2)) {
    return nums;
  }
  // 开始递归快速排序
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(arr, start, end) {
  // 判断数组元素个数少于2个, 无需排序, 结束递归.
  if (start >= end) return;

  // 快速排序
  const mid = partition(arr, start, end);

  // 对左边区域快速排序
  quickSort(arr, start, mid - 1);

  // 对右边区域快速排序
  quickSort(arr, mid + 1, end);
}


/**
 * 双指针分区算法, 选择第一个元素作为基数
 * 返回中间值下标
 * 基数的选择:
 * 选择第一个元素作为基数
 * 选择最后一个元素作为基数
 * 选择区间内一个随机元素作为基数 (平均时间复杂度最优)
 */
function partition(arr, start, end) {
  // 选取第一个元素作为基数
  const pivot = arr[start];
  // 从第二个数开始分区
  let left = start + 1;
  let right = end;

  while (left < right) {
    // 找到大于基数的元素位置
    while(left < right && arr[left] <= pivot) {
      left++;
    }
    // 找到小于基数的元素位置
    while(left < right && arr[right] >= pivot) {
      right--;
    }
    // 交换这两个数, 使得左边分区都小于或等于基数,右边分区大于或等于基数.
    if (left < right) {
      exchange(arr, left, right);
      left++;
      right--;
    }
  }
  // 如果left 和 right 相等, 需要判断在这个下标上的元素和基数pivot的大小
  if (left === right && arr[right] > pivot) {
    right--;
  }
  // 此时right 指向的元素比基数小, 将此元素和基数进行交换.
  exchange(arr, start, right);
  // 返回基数所在的下标
  return right;
}
// 交换数组中的两个元素
function exchange(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


/**
 * 非递归方案,使用队列存储需要进行排序的分区start和end
 */

function sortArry2(nums) {
  if (nums === null || nums.length <= 1) return nums;

  const queue = [{start: 0, end: nums.length - 1}];

  while(queue.length > 0) {
    const {start, end} = queue.pop();
    const mid = partition(nums, start, end);
    if (start < mid - 1) {
      queue.push({start, end: mid - 1});
    }
    if (mid + 1 < end ) {
      queue.push({start: mid + 1, end});
    }
  }

  return nums;
}












