'use strict';

function Main(input) {
	input = input.split('\n');
	const s = input[0].trim();
	const p = input[1].trim();
	const ss = s + s;
	const ans = ss.indexOf(p) !== -1 ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
