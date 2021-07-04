'use strict';

function Main(input) {
	input = input.split('\n');
	const num = input[0].split(' ').map(Number);
	let dice = new Dice(...num);
	const q = Number(input[1]);
	const d = 'NESW';

	for (let i = 0; i < q; i++) {
		const [t, f] = input[i + 2].split(' ').map(Number);
		while (!(dice.first === t && dice.second === f)) {
			const idx = Math.floor(Math.random() * 4);
			dice = dice.roll(d[idx]);
		}
		console.log(dice.third);
	}
}

class Dice {
	constructor(a, b, c, d, e, f) {
		this.first = a;
		this.second = b;
		this.third = c;
		this.forth = d;
		this.fifth = e;
		this.sixth = f;
	}

	roll(d) {
		const that = Object.assign({}, this);
		if (d === 'N') {
			this.first = that.second;
			this.second = that.sixth;
			this.third = that.third;
			this.forth = that.forth;
			this.fifth = that.first;
			this.sixth = that.fifth;
		} else if (d === 'E') {
			this.first = that.forth;
			this.second = that.second;
			this.third = that.first;
			this.forth = that.sixth;
			this.fifth = that.fifth;
			this.sixth = that.third;
		} else if (d === 'S') {
			this.first = that.fifth;
			this.second = that.first;
			this.third = that.third;
			this.forth = that.forth;
			this.fifth = that.sixth;
			this.sixth = that.second;
		} else if (d === 'W') {
			this.first = that.third;
			this.second = that.second;
			this.third = that.sixth;
			this.forth = that.first;
			this.fifth = that.fifth;
			this.sixth = that.forth;
		}
		return this;
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
