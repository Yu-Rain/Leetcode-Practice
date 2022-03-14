function sortArray(nums) {
  if (nums === null || nums.length < 2) return nums;
  quickSort(nums, 0, nums.length - 1);
  return nums;
}
function quickSort(arr, start, end ) {
  if (start >= end) return;
  const mid = partition(arr, start, end);
  quickSort(arr, start, mid - 1);
  quickSort(arr, mid + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let left = start + 1;
  let right = end;
  while (left < right) {
    while (left < right && arr[left] <= pivot) {
      left++;
    }
    while (left < right && arr[right] >= pivot) {
      right--;
    }
    if (left < right) {
      exchange(arr, left, right);
      left++;
      right--;
    }
  }
  if (left === right && arr[right] > pivot) {
    right--;
  }
  exchange(arr, start, right);
  return right;
}

function rangRandom(start, end) {
  return parseInt(Math.random() * (end - start + 1) + start);
}


function sortArr2(num) {
  if (num === null || num.length < 2) return nums;
  quickSort(num, 0, num.length - 1);
  return num;
}

function quickSort(arr, start, end) {
  if (start >= end) return;
  const mid = partition2(arr, start, end);
  quickSort(arr, start, mid - 1);
  quickSort(arr, mid + 1, end);
}
function partition2(arr, start, end) {
  const randomIndex = rangRandom(start, end);
  exchange(arr, start, randomIndex);
  const pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left < right) {
    while (left < right && arr[left] <= pivot) {
      left++;
    }
    while (left < right && arr[right] >= pivot) {
      right--;
    }
    if (left < right) {
      exchange(arr, start, end);
      left++;
      right--;
    }
  }
  if (left === right && arr[right] > pivot) {
    right--;
  }
  exchange(arr, start, right);
  return right;
}

















