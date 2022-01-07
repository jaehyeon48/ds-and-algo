import { mergeSort, mergeSortV2 } from './mergeSort';

// Assuming ascending order

test('Should sort an array of numbers', () => {
	expect(mergeSort([], 0, 0)).toEqual([]);
	expect(mergeSort([1], 0, 0)).toEqual([1]);
	expect(mergeSort([2, 1], 0, 1)).toEqual([1, 2]);
	expect(mergeSort([3, 22, 14, 7, 11, 8], 0, 5)).toEqual([3, 7, 8, 11, 14, 22]);
	expect(mergeSort([41, 1, 9, 23, 55], 0, 4)).toEqual([1, 9, 23, 41, 55]);
	expect(mergeSort([-33, -14, -55, -8, -2], 0, 4)).toEqual([-55, -33, -14, -8, -2]);
	expect(mergeSort([48, -21, 12, 0, -5, 8], 0, 5)).toEqual([-21, -5, 0, 8, 12, 48]);
	expect(mergeSort([5, 4, 3, 2, 1], 0, 4)).toEqual([1, 2, 3, 4, 5]);
});

test('Should sort an array of numbers with mergeSort v2', () => {
	expect(mergeSortV2([])).toEqual([]);
	expect(mergeSortV2([1])).toEqual([1]);
	expect(mergeSortV2([2, 1])).toEqual([1, 2]);
	expect(mergeSortV2([3, 22, 14, 7, 11, 8])).toEqual([3, 7, 8, 11, 14, 22]);
	expect(mergeSortV2([41, 1, 9, 23, 55])).toEqual([1, 9, 23, 41, 55]);
	expect(mergeSortV2([-33, -14, -55, -8, -2])).toEqual([-55, -33, -14, -8, -2]);
	expect(mergeSortV2([48, -21, 12, 0, -5, 8])).toEqual([-21, -5, 0, 8, 12, 48]);
	expect(mergeSortV2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
