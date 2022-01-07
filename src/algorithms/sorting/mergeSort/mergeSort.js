export function mergeSort(arr, start, end) {
	if (start >= end) return arr;

	const mid = start + Math.floor((end - start) / 2);
	mergeSort(arr, start, mid);
	mergeSort(arr, mid + 1, end);
	merge(arr, start, mid, end);
	return arr;
}

function merge(arr, start, mid, end) {
	let i = start;
	let j = mid + 1;
	const merged = [];

	while (i <= mid && j <= end) {
		merged.push(arr[i] < arr[j] ? arr[i++] : arr[j++]);
	}
	while (i <= mid) merged.push(arr[i++]);
	while (j <= end) merged.push(arr[j++]);

	for (let k = start; k <= end; k++) arr[k] = merged[k - start];
}

// this version actually "slices" the array
export function mergeSortV2(arr) {
	const len = arr.length;
	if (len < 2) return arr;

	const mid = Math.floor(len / 2);
	const leftArr = mergeSortV2(arr.slice(0, mid));
	const rightArr = mergeSortV2(arr.slice(mid, len));
	return mergeV2(leftArr, rightArr);
}

function mergeV2(leftArr, rightArr) {
	let i = 0;
	let j = 0;
	const result = [];

	while (i < leftArr.length && j < rightArr.length) {
		result.push(leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++]);
	}

	while (i < leftArr.length) result.push(leftArr[i++]);
	while (j < rightArr.length) result.push(rightArr[j++]);

	return result;
}
