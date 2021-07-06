'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	let c = 0;
	for (let i = 0; i < N; i++) {
		const n = Number(input[i + 1]);
		check(n) ? c++ : '';
	}
	console.log(c);
}

function check(n) {
	if (n <= 3) {
		return true;
	}

	if (n % 2 === 0) {
		return false;
	}

	const s = Math.sqrt(n);
	for (let d = 3; d <= s; d += 2) {
		if (n % d === 0) {
			return false;
		}
	}

	return true;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
