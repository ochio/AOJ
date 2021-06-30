'use strict';

function Main(input) {
	let a = '';
	input = input.trim();
	for (let i = 0; i < input.length; i++) {
		const f = check(input[i]);
		const tmp = f ? input[i].toLowerCase() : input[i].toUpperCase();
		a += tmp;
	}
	console.log(a);
}

const check = (c) => {
	const codeA = 'A'.charCodeAt();
	const codeZ = 'Z'.charCodeAt();
	const code = c.charCodeAt();
	return codeA <= code && code <= codeZ;
};

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
