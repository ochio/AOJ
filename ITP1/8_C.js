'use strict';

function Main(input) {
	input = input.trim().toLowerCase();
	let i = 0;
	const obj = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0,
		f: 0,
		g: 0,
		h: 0,
		i: 0,
		j: 0,
		k: 0,
		l: 0,
		m: 0,
		n: 0,
		o: 0,
		p: 0,
		q: 0,
		r: 0,
		s: 0,
		t: 0,
		u: 0,
		v: 0,
		w: 0,
		x: 0,
		y: 0,
		z: 0,
	};
	const reg = new RegExp(/[a-z]/);
	while (i < input.length) {
		const s = input[i];
		i++;
		if (!reg.exec(s)) continue;

		if (!obj[s]) obj[s] = 1;
		else obj[s] += 1;
	}
	for (let p in obj) {
		console.log(`${p} : ${obj[p]}`);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
