export default function selectionSort(arr, compareFn) {
	for (let last = arr.length - 1; last > 0; last--) {
		const largestIdx = findLargest(arr, compareFn, last);
		[arr[last], arr[largestIdx]] = [arr[largestIdx], arr[last]];
	}

	return arr;
}

function findLargest(arr, compareFn, last) {
	let largestIdx = 0;
	for (let i = 0; i <= last; i++) {
		if (compareFn(arr[i], arr[largestIdx])) largestIdx = i;
	}

	return largestIdx;
}
