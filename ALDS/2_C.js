'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ');
	const ary_a = ary.map((v) => v.split(''));
	const ary_b = ary.map((v) => v.split(''));

	const b = BubbleSort(ary_a, N);
	const s = SelectionSort(ary_b, N);
	console.log(b.join(' ').replace(/,/g, ''));
	console.log('Stable');
	console.log(s.join(' ').replace(/,/g, ''));
	console.log(s.join('') === b.join('') ? 'Stable' : 'Not stable');
}

function BubbleSort(C, N) {
	for (let i = 0; i < N; i++) {
		for (let j = N - 1; j > i; j--) {
			if (C[j][1] < C[j - 1][1]) {
				[C[j], C[j - 1]] = [C[j - 1], C[j]];
			}
		}
	}
	return C;
}

function SelectionSort(C, N) {
	for (let i = 0; i < N; i++) {
		let minj = i;
		for (let j = i; j < N; j++) {
			if (C[j][1] < C[minj][1]) {
				minj = j;
			}
		}
		[C[i], C[minj]] = [C[minj], C[i]];
	}
	return C;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
