'use strict';

function Main(input) {
	input = input.split('\n');
	let str = input[0].split('');
	const q = Number(input[1]);
	for (let i = 0; i < q; i++) {
		const c = input[i + 2].split(' ');
		if (c[0] === 'replace') {
			const tmp = c[3].split('');
			for (let i = 0; i < Number(c[2]) - Number(c[1]) + 1; i++) {
				str[i + Number(c[1])] = tmp[i];
			}
		} else if (c[0] === 'reverse') {
			const tmp = str.slice(Number(c[1]), Number(c[2]) + 1).reverse();
			for (let i = 0; i < Number(c[2]) - Number(c[1]) + 1; i++) {
				str[i + Number(c[1])] = tmp[i];
			}
		} else if (c[0] === 'print') {
			const tmp = str.slice(Number(c[1]), Number(c[2]) + 1);
			console.log(tmp.join(''));
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
