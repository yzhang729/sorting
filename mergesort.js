function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let midpoint = Math.floor(wholeArray.length / 2);
  let arrayCopy = wholeArray;
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = arrayCopy.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  let sortedArray = [];
  while (
    (arr1[arr1Pointer] || arr1[arr1Pointer] === 0) &&
    (arr2[arr2Pointer] || arr2[arr2Pointer] === 0)
  ) {
    let arr1Val = arr1[arr1Pointer];
    let arr2Val = arr2[arr2Pointer];
    if (arr1Val - arr2Val < 0) {
      sortedArray.push(arr1Val);
      arr1Pointer++;
    } else {
      sortedArray.push(arr2Val);
      arr2Pointer++;
    }
  }
  arr1.splice(0, arr1Pointer);
  arr2.splice(0, arr2Pointer);
  console.log(sortedArray.concat(arr1).concat(arr2));
  return sortedArray.concat(arr1).concat(arr2);
}

function mergeSort(array) {
  /* your code here */
  if (array.length <= 1) {
    return array;
  } else {
    let splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}
