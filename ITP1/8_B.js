'use strict';

function Main(input) {
	input = input.split('\n');
	let flag = true;
	let i = 0;
	while (flag) {
		let n = input[i];
		let ans = 0;
		if (n === '0') {
			break;
		}
		for (let j = 0; j < input[i].length; j++) {
			ans += Number(n[j]);
		}
		i++;
		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
