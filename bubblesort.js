function bubbleSort(
  arr,
  func = function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (func(arr[j - 1], arr[j]) === 1) {
        swap(arr, j - 1, j);
      }
    }
  }

  return arr;
}

function swap(arr, index1, index2) {
  let tempVar = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tempVar;
  return arr;
}
