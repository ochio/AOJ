'use strict';

function Main(input) {
	const [x, y] = input.split(' ').map(Number);
	console.log(gcd(x, y));
}

function gcd(x, y) {
	return y === 0 ? x : gcd(y, x % y);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
