'use strict';

function Main(input) {
	input = input.split('\n');
	const n = input[0] - 0;
	const x = input[1].split(' ').map(Number);
	const y = input[2].split(' ').map(Number);
	console.log(p1(n, x, y));
	console.log(p2(n, x, y));
	console.log(p3(n, x, y));
	console.log(p4(n, x, y));
}

function p1(n, x, y) {
	let c = 0;
	for (let i = 0; i < n; i++) {
		c += Math.abs(x[i] - y[i]);
	}
	return c;
}

function p2(n, x, y) {
	let c = 0;
	for (let i = 0; i < n; i++) {
		c += Math.pow(Math.abs(x[i] - y[i]), 2);
	}
	return Math.sqrt(c);
}

function p3(n, x, y) {
	let c = 0;
	for (let i = 0; i < n; i++) {
		c += Math.pow(Math.abs(x[i] - y[i]), 3);
	}
	return Math.pow(c, 1 / 3);
}

function p4(n, x, y) {
	let c = [];
	for (let i = 0; i < n; i++) {
		c.push(Math.abs(x[i] - y[i]));
	}
	return Math.max(...c);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
