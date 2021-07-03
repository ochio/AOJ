'use strict';

function Main(input) {
	input = input.split('\n');
	const W = input[0];
	let i = 1;
	let ans = 0;
	while (true) {
		if (input[i] === 'END_OF_TEXT') break;
		input[i] = input[i].toLowerCase();
		const c = input[i].split(' ').filter((v) => {
			return v === W;
		}).length;
		i++;
		ans += c;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
