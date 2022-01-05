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
