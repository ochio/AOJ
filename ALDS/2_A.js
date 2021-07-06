'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = input[1].split(' ').map(Number);
	let c = 0;
	function bubbleSort(A, N) {
		let f = true;
		while (f) {
			f = false;
			for (let i = N - 1; i > 0; i--) {
				if (A[i] < A[i - 1]) {
					[A[i], A[i - 1]] = [A[i - 1], A[i]];
					c++;
					f = true;
				}
			}
		}
		return A;
	}
	console.log(bubbleSort(A, N).join(' '));
	console.log(c);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
