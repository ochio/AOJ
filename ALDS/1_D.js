'use strict';

function Main(input) {
	input = input.split('\n').map(Number);
	const n = input[0];
	let min = input[1];
	let ans = input[2] - input[1];
	for (let i = 1; i < n; i++) {
		ans = Math.max(ans, input[i + 1] - min);
		min = Math.min(min, input[i + 1]);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
