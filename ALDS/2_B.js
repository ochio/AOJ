'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let n = 0;
	function selectionSort(A, N) {
		for (let i = 0; i < N - 1; i++) {
			let minj = i;
			for (let j = i; j <= N - 1; j++) {
				if (A[j] < A[minj]) {
					minj = j;
				}
			}
			if (A[i] !== A[minj]) n++;
			[A[i], A[minj]] = [A[minj], A[i]];
		}
		return A;
	}
	const result = selectionSort(ary, N);
	console.log(result.join(' '));
	console.log(n);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./ALDS/test.txt', 'utf8'));
