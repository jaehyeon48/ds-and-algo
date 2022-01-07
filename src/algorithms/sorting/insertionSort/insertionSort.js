export default function insertionSort(arr, compareFn) {
	for (let i = 1; i < arr.length; i++) {
		const curElem = arr[i];
		let j = i - 1;
		while (j >= 0 && compareFn(arr[j], curElem)) {
			arr[j + 1] = arr[j--];
		}

		arr[j + 1] = curElem;
	}

	return arr;
}
