import insertionSort from './insertionSort';

// Assuming ascending order

test('Should sort an array of numbers', () => {
	const compareFn = (a, b) => a > b;

	expect(insertionSort([], compareFn)).toEqual([]);
	expect(insertionSort([1], compareFn)).toEqual([1]);
	expect(insertionSort([2, 1], compareFn)).toEqual([1, 2]);
	expect(insertionSort([3, 22, 14, 7, 11, 8], compareFn)).toEqual([3, 7, 8, 11, 14, 22]);
	expect(insertionSort([41, 1, 9, 23, 55], compareFn)).toEqual([1, 9, 23, 41, 55]);
	expect(insertionSort([-33, -14, -55, -8, -2], compareFn)).toEqual([-55, -33, -14, -8, -2]);
	expect(insertionSort([48, -21, 12, 0, -5, 8], compareFn)).toEqual([-21, -5, 0, 8, 12, 48]);
	expect(insertionSort([5, 4, 3, 2, 1], compareFn)).toEqual([1, 2, 3, 4, 5]);
});
