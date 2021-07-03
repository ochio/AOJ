'use strict';

function Main(input) {
	input = input.split('\n');
	const n = Number(input[0]);
	let score_a = 0;
	let score_b = 0;
	for (let i = 0; i < n; i++) {
		const [A, B] = input[i + 1].split(' ');
		if (A === B) {
			score_a++;
			score_b++;
		} else if (A < B) {
			score_b += 3;
		} else {
			score_a += 3;
		}
	}
	console.log(`${score_a} ${score_b}`);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
