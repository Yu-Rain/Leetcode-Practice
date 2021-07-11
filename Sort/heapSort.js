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
 *  时间复杂度: o(nlogn), 初始化建堆的时间复杂度为 O(n), 重建堆的时间复杂度为O(nlogn)
 *  空间复杂度: o(1)
 *
 */

