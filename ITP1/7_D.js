'use strict';

function Main(input) {
	input = input.split('\n');
	const [n, m, l] = input[0].split(' ').map(Number);
	const a = [];
	for (let i = 0; i < n; i++) {
		const ary = input[i + 1].split(' ').map(Number);
		a.push(ary);
	}
	const b = [];
	for (let i = 0; i < m; i++) {
		const ary = input[i + n + 1].split(' ').map(Number);
		b.push(ary);
	}

	const c = [];
	for (let i = 0; i < n; i++) {
		if (!c[i]) c[i] = [];
		for (let j = 0; j < l; j++) {
			if (!c[i][j]) c[i][j] = 0;
			for (let k = 0; k < m; k++) {
				c[i][j] += a[i][k] * b[k][j];
			}
		}
	}
	for (let i = 0; i < c.length; i++) {
		console.log(c[i].join(' '));
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
