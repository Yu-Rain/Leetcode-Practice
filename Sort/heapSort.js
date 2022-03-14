/**
 * 堆排序的思想
 * 利用最大堆的特点 节点比左右两个子节点大, 那么堆顶就是最大值.
 * 将数组元素想象成一个堆, 根节点下标为0, 左子节点下标为2*i-1, 右子节点下标为2*i-1-1
 * 1. 首先我们先将数组初始化成一个最大堆. buildMaxHeap
 *    1.1 从最后一个非叶子节点开始调整, 下标为 n/2-1; 直到下标为0为止
 *    调整函数为 maxHeapify函数
 * 2. 初始化最大堆完成后, 堆顶(根节点, 下标为0的元素) 是整个数组的最大值.
 *    然后将 下标为0的最大值 与此次调整范围的最后一个元素 i 进行交换. 这样我们就将每次调整后的最大值放在了数组中排序的正确位置了.
 * 3. 交换后, 可能不是最大堆了, 需要重新调整为最大堆
 *    此时, 我们从堆顶(下标为0) 开始调整, 调整的下标范围为 0 ~ i-1 (此时下标i上是已经排好序的最大值)
 * 4. 每次调整完毕后, 堆顶都是最大值, 情况和步骤2相同, 重复操作步骤2. 也就是说 步骤2和步骤3是不断循环的过程. 循环的下标范围是从 i ~ 1
 *
 * 调整成最大堆的逻辑 maxHeapify函数:
 *    入参: 数组arr, 节点下标i, 调整的下标范围最大值 maxIndex
 *   1. 首先需要给定一个节点的下标 i, 然后计算出左子节点下标为2*i-1, 右子节点下标为2*i-1-1, 最后计算出三者的最大值, 并将最大值与下标i进行交换
 *     注意: 左右子节点的下标不能超出 此次调整的下标范围最大值
 *   2. 如果 最大值的下标 和 i 不相同, 那么在交换之后 需要以最大值的下标为新的节点, 再次调整, 也就是重复步骤1, 此处为递归过程.
 *   3. 如果 最大值的下标 和 i 相同, 那么递归结束
 *
 *  时间复杂度: O(nlogn), 初始化建堆的时间复杂度为 O(n), 重建堆的时间复杂度为O(nlogn)
 *  空间复杂度: o(1)
 * 堆排序是不稳定的排序算法
 * 在实际应用中，快速排序的性能一般会优于堆排序
 */

function sortArray(nums) {
  // 构建初始大顶堆
  buildMaxHeap(nums);

  for (let i = nums.length - 1; i > 0; i--) {
    // 将本轮排序的最大值交换到排序范围的最后位置.
    swap(nums, 0, i);
    // 调整剩余数组, 使其满足大顶堆
    maxHeapify(nums, 0, i);
  }
  return nums;
}

function buildMaxHeap(arr) {
  // 从最后一个非叶子节点开始调整大顶堆.
  // 最后一个非叶子节点的下标为: Math.trunc(arr.length / 2) - 1 或者 (arr.length >> 1) - 1
  for(let i = Math.trunc(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, arr.length);
  }
}

function maxHeapify(arr, i, endIndex) {
  // 左子节点的下标
  let left = 2 * i + 1;
  // 右子节点的下标
  let right = left + 1;
  // 记录根结点, 左子结点, 右子结点三者中的最大值下标
  let largest = i;
  // 与左子结点比较
  if (left < endIndex && arr[left] > arr[largest]) {
    largest = left;
  }
  // 与右子结点比较
  if (right < endIndex && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // 将最大值交换为根节点
    swap(arr, i, largest);
    // 再次调整交换数字后的大顶堆
    maxHeapify(arr, largest, endIndex)
  }


}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

