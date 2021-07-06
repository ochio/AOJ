'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = input[1].split(' ').map(Number);
	insertionSort(A, N);
}

function insertionSort(A, N) {
	for (let i = 1; i < N; i++) {
		console.log(A.join(' '));
		const v = A[i];
		let j = i - 1;
		while (j >= 0 && A[j] > v) {
			A[j + 1] = A[j];
			j--;
		}
		A[j + 1] = v;
	}
	console.log(A.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
