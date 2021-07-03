'use strict';

function Main(input) {
	input = input.split('\n');
	let i = 0;
	while (true) {
		let s = input[i].trim();
		if (s === '-') break;
		const m = Number(input[++i]);
		for (let j = 1; j <= m; j++) {
			const h = input[i + j];
			const tmp = s.substring(0, h);
			const tmp2 = s.slice(h);
			s = tmp2 + tmp;
		}
		console.log(s);
		i += m + 1;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
