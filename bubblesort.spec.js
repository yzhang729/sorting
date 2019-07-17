describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('returns an array', function() {
    expect(Array.isArray(bubbleSort([]))).toEqual(true);
  });
  it('sorts simple integer list', function() {
    expect(bubbleSort([5, 8, 9, 1])).toEqual([1, 5, 8, 9]);
  });
  it('sorts positive and negative integers', function() {
    expect(typeof bubbleSort([5, 8, -9, 1])).toEqual([-9, 1, 5, 8]);
  });
  it('sorts strings', function() {
    expect(typeof bubbleSort(['cat', 'mouse', 'dog'])).toEqual([
      'cat',
      'dog',
      'mouse',
    ]);
  });
});
