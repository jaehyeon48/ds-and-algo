export function binarySearchAsc(arr, searchTarget) {
	let lo = 0;
	let hi = arr.length - 1;

	while (lo <= hi) {
		const mid = lo + Math.floor((hi - lo) / 2);
		const currentElem = arr[mid];

		if (currentElem === searchTarget) return mid;
		if (currentElem < searchTarget) lo = mid + 1;
		else hi = mid - 1;
	}

	return -1;
}

export function binarySearchDsc(arr, searchTarget) {
	let lo = 0;
	let hi = arr.length - 1;

	while (lo <= hi) {
		const mid = lo + Math.floor((hi - lo) / 2);
		const currentElem = arr[mid];

		if (currentElem === searchTarget) return mid;
		if (currentElem < searchTarget) hi = mid - 1;
		else lo = mid + 1;
	}

	return -1;
}

// 배열이 오름차순으로 정렬되어있다고 가정
export function recursiveBinarySearch(arr, target, lo = 0, hi = arr.length - 1) {
	if (lo > hi) return -1;

	const mid = lo + Math.floor((hi - lo) / 2);
	const currentElem = arr[mid];

	if (currentElem === target) return mid;
	if (currentElem < target) return recursiveBinarySearch(arr, target, mid + 1, hi);
	else return recursiveBinarySearch(arr, target, lo, mid - 1);
}
