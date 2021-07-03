'use strict';

function Main(input) {
	input = input.split('\n');
	const [r, c] = input[0].split(' ').map(Number);
	for (let i = 0; i < r; i++) {
		const ary = input[i + 1].split(' ').map(Number);
		const sum = ary.reduce((p, c) => p + c);
		const row = [...ary, sum];
		console.log(row.join(' '));
	}

	const sums = [];
	for (let i = 0; i < c; i++) {
		let sum = 0;
		for (let j = 0; j < r; j++) {
			const ary = input[j + 1].split(' ').map(Number);
			sum += ary[i];
		}
		sums.push(sum);
	}

	const total = sums.reduce((p, c) => p + c);
	const bottom = [...sums, total];
	console.log(bottom.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
