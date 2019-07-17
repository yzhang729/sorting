describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough()
  });
  it('calls on the swap function', function() {
    bubbleSort([9, 7, 3])
    expect(swap.calls.count()).toEqual(3)
  });
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
    expect(bubbleSort([5, 8, -9, 1])).toEqual([-9, 1, 5, 8]);
  });
  it('sorts strings', function() {
    expect(bubbleSort(['cat', 'mouse', 'dog'])).toEqual([
      'cat',
      'dog',
      'mouse',
    ]);
  });
});
