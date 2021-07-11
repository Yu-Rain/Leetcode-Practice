/**
 * 基础解法, 相邻的两个数比较, 确保右边的数字比较大
 * 时间复杂度: o(n的平方)
 * 空间复杂度: o(1)
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) { // 每轮遍历完成后, 最大值就已经被交换到了最后一个位置了, 所以j结束条件要 减i, 把排好序的最大值位置排除
      if (arr[j] > arr[j + 1]) { // 如果左边的数大于右边的数，则交换，保证右边的数字最大
        swap(arr, j, j + 1);
      }
    }
  }
}

/**
 * 优化
 * 使用一个变量记录当前轮次的比较是否发生过交换，如果没有发生交换表示已经有序，不再继续排序；
 * @param arr
 */
function bubbleSort2(arr) {
  // 记录当前轮次的比较是否发生过交换
  let swapped = true;
  for (let i = 0; i < arr.length - 1; i++) {
    // 如果没有发生过交换，说明剩余部分已经有序，排序完成
    if (!swapped) break;
    // 设置 swapped 为 false，如果发生交换，则将其置为 true
    swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 如果左边的数大于右边的数，则交换，保证右边的数字最大
        swap(arr, j, j + 1);
        // 表示发生了交换
        swapped = true;
      }
    }
  }
}

/**
 * 在第二步的基础上进一步优化:
 * 除了使用变量记录当前轮次是否发生交换外，再使用一个变量记录上次发生交换的位置，下一轮排序时到达上次交换的位置就停止比较。
 * @param arr
 */
function bubbleSort3(arr) {
  let swapped = true;
  // 最后一个没有经过排序的元素下标
  let indexOfLastUnsorted = arr.length - 1;
  // 上次发生交换的位置
  let swappedIndex = -1;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < indexOfLastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        //
        swap(arr, i, i + 1);
        swapped = true;
        swappedIndex = i;
      }
    }
    // 最后一个没有经过排序的元素的下标就是最后一次发生交换的位置.
    indexOfLastUnsorted = swappedIndex;
  }
}

/**
 * 经过再一次的优化，代码看起来就稍微有点复杂了。最外层的 while 循环每经过一轮，剩余数字中的最大值仍然是被移动到当前轮次的最后一位。

 在下一轮比较时，只需比较到上一轮比较中，最后一次发生交换的位置即可。因为后面的所有元素都没有发生过交换，必然已经有序了。

 当一轮比较中从头到尾都没有发生过交换，则表示整个列表已经有序，排序完成。
 */

/**
 * * 最好的情况下只需要O(n) 的时间复杂度。
 * 最好情况：在数组已经有序的情况下，只需遍历一次，由于没有发生交换，排序结束。
 * 最差情况：数组顺序为逆序，每次比较都会发生交换。
 * 但优化后的冒泡排序平均时间复杂度仍然是O(n2)，所以这些优化对算法的性能并没有质的提升
 */


function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [5, 3, 4, 7, 1, 2];
bubbleSort(arr);
console.log(arr);
