'use strict';

function Main(input) {
	input = input.split('\n');
	let flag = true;
	let i = 0;
	while (flag) {
		const [n, x] = input[i].split(' ').map(Number);
		if (n === 0 && x === 0) {
			flag = false;
			break;
		}
		const ans = getPattern(n, x);
		console.log(ans);
		i++;
	}
}

function getPattern(n, x) {
	let count = 0;
	for (let i = 1; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let k = j + 1; k <= n; k++) {
				if (i + j + k === x) {
					count++;
				}
			}
		}
	}
	return count;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
