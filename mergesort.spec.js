describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('is able to split an odd-length array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge two sorted arrays of unequal lengthinto one sorted array', function() {
    expect(merge([1, 3], [2, 4, 9])).toEqual([1, 2, 3, 4, 9]);
  });
});

describe('Mergesort function', function() {
  it('is able to sort an array', function() {
    expect(mergeSort([9, 1, 3, 5, -11, 7, 2, 22, 4, -10, 0, 8, -1])).toEqual([
      -11,
      -10,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      9,
      22,
    ]);
  });
  it('maybe can sort strings??', function() {
    expect(mergeSort(['dog', 'cat', 'animals'])).toEqual([
      'animals',
      'cat',
      'dog',
    ]);
  });
});
