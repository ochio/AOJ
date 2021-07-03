'use strict';

function Main(input) {
	const [x1, y1, x2, y2] = input.split(' ').map(Number);
	console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
