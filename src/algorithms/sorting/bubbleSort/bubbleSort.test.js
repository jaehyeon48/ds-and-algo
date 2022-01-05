import bubbleSort from './BubbleSort';

// Assuming ascending order

test('Should sort an array of numbers', () => {
	const compareFn = (a, b) => a > b;

	expect(bubbleSort([], compareFn)).toEqual([]);
	expect(bubbleSort([1], compareFn)).toEqual([1]);
	expect(bubbleSort([2, 1], compareFn)).toEqual([1, 2]);
	expect(bubbleSort([3, 22, 14, 7, 11, 8], compareFn)).toEqual([3, 7, 8, 11, 14, 22]);
	expect(bubbleSort([41, 1, 9, 23, 55], compareFn)).toEqual([1, 9, 23, 41, 55]);
	expect(bubbleSort([-33, -14, -55, -8, -2], compareFn)).toEqual([-55, -33, -14, -8, -2]);
	expect(bubbleSort([48, -21, 12, 0, -5, 8], compareFn)).toEqual([-21, -5, 0, 8, 12, 48]);
	expect(bubbleSort([5, 4, 3, 2, 1], compareFn)).toEqual([1, 2, 3, 4, 5]);
});

test('should do stable sorting', () => {
	const compareFn = (a, b) => a.value > b.value;
	const beforeSort = [
		{
			value: 10,
			name: 'a'
		},
		{
			value: 2,
			name: 'c'
		},
		{
			value: 2,
			name: 'b'
		},
		{
			value: -4,
			name: 'd'
		},
		{
			value: 2,
			name: 'e'
		}
	];

	const afterSort = [
		{
			value: -4,
			name: 'd'
		},

		{
			value: 2,
			name: 'c'
		},
		{
			value: 2,
			name: 'b'
		},
		{
			value: 2,
			name: 'e'
		},
		{
			value: 10,
			name: 'a'
		}
	];

	expect(bubbleSort(beforeSort, compareFn)).toEqual(afterSort);
});
