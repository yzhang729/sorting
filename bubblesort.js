function bubbleSort(arr) {
  for (let i=0; i<arr.length; i++) {
    for (let j=1; j<arr.length-i; j++) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j-1, j)
        // let tempVar = arr[j-1]
        // arr[j-1] = arr[j]
        // arr[j] = tempVar
      }
    }
  }
  return arr
}

function swap(arr, index1, index2) {
  let tempVar = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = tempVar
  return arr
}
