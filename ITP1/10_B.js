'use strict';

function Main(input) {
	const [a, b, angle] = input.split(' ').map(Number);
	const S = (a * b * Math.sin((angle * Math.PI) / 180)) / 2;
	console.log(S);
	const L = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - a * b * 2 * Math.cos((angle * Math.PI) / 180)) + a + b;
	console.log(L);
	const h = (S / a) * 2;
	console.log(h);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
