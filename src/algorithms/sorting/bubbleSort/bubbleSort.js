export default function bubbleSort(arr, compareFn) {
	let sorted = false;
	let lastIdx = arr.length - 1;

	while (!sorted) {
		sorted = true;
		for (let i = 0; i < lastIdx; i++) {
			if (compareFn(arr[i], arr[i + 1])) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				sorted = false;
			}
		}
		lastIdx -= 1;
	}

	return arr;
}
