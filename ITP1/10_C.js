'use strict';

function Main(input) {
	input = input.split('\n');
	let i = 0;
	while (true) {
		const n = input[i] - 0;
		if (n === 0) break;
		i++;
		const ary = input[i].split(' ').map(Number);
		const av = ary.reduce((p, c) => p + c) / n;
		let a = 0;
		for (let i = 0; i < ary.length; i++) {
			a += Math.pow(ary[i] - av, 2);
		}
		a /= n;
		console.log(Math.sqrt(a));
		i++;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
