var sortArray = function(nums) {

};

function maxHeapify(arr, i, endIndex) {
  let left = 2 * i + 1;
  let right = left + 1;
  let largest = i;

  if (left < endIndex && arr[left] > arr[largest]) {

  }

}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
