import { binarySearchAsc, binarySearchDsc, recursiveBinarySearch } from './binarySearch';

test('Should find a number in ascending array', () => {
	expect(binarySearchAsc([], 1)).toBe(-1);
	expect(binarySearchAsc([1], 1)).toBe(0);
	expect(binarySearchAsc([1, 2], 1)).toBe(0);
	expect(binarySearchAsc([1, 2], 2)).toBe(1);
	expect(binarySearchAsc([-5, -4, -2], -2)).toBe(2);
	expect(binarySearchAsc([-5, -4, -2, 0, 3, 5], -5)).toBe(0);
	expect(binarySearchAsc([-5, -4, -2, 0, 3, 5], 3)).toBe(4);
	expect(binarySearchAsc([-5, -4, -2, 0, 3, 5], -8)).toBe(-1);
	expect(binarySearchAsc([-5, -4, -2, 0, 3, 5, 100], 100)).toBe(6);
	expect(binarySearchAsc([-5, -4, -2, 0, 3, 5, 100], 1000)).toBe(-1);
	expect(binarySearchAsc([1, 1, 1, 1], 1)).toBe(1);
});

test('Should find a number in descending array', () => {
	expect(binarySearchDsc([], 1)).toBe(-1);
	expect(binarySearchDsc([1], 1)).toBe(0);
	expect(binarySearchDsc([2, 1], 1)).toBe(1);
	expect(binarySearchDsc([2, 1], 2)).toBe(0);
	expect(binarySearchDsc([-1, -4, -5, -7], -4)).toBe(1);
	expect(binarySearchDsc([-1, -4, -5, -7], -10)).toBe(-1);
	expect(binarySearchDsc([1, 0, -1, -4, -5, -7], -5)).toBe(4);
	expect(binarySearchDsc([1, 0, -1, -4, -5, -7], -7)).toBe(5);
	expect(binarySearchDsc([100, 1, 0, -1, -4, -5, -7], 100)).toBe(0);
	expect(binarySearchDsc([100, 1, 0, -1, -4, -5, -7], 1000)).toBe(-1);
	expect(binarySearchAsc([1, 1, 1, 1], 1)).toBe(1);
});

test('Should find a number in ascending array by using recursive version', () => {
	expect(recursiveBinarySearch([], 1)).toBe(-1);
	expect(recursiveBinarySearch([1], 1)).toBe(0);
	expect(recursiveBinarySearch([1, 2], 1)).toBe(0);
	expect(recursiveBinarySearch([1, 2], 2)).toBe(1);
	expect(recursiveBinarySearch([-5, -4, -2], -2)).toBe(2);
	expect(recursiveBinarySearch([-5, -4, -2, 0, 3, 5], -5)).toBe(0);
	expect(recursiveBinarySearch([-5, -4, -2, 0, 3, 5], 3)).toBe(4);
	expect(recursiveBinarySearch([-5, -4, -2, 0, 3, 5], -8)).toBe(-1);
	expect(recursiveBinarySearch([-5, -4, -2, 0, 3, 5, 100], 100)).toBe(6);
	expect(recursiveBinarySearch([-5, -4, -2, 0, 3, 5, 100], 1000)).toBe(-1);
	expect(recursiveBinarySearch([1, 1, 1, 1], 1)).toBe(1);
});
