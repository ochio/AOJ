'use strict';

function Main(input) {
	input = input.split('\n');
	const n = Number(input[0]);
	const ary = [];
	for (let i = 0; i < n; i++) {
		const num = input[i + 1].split(' ').map(Number);
		const dice = new Dice(...num);
		ary.push(dice);
	}

	const d = 'SSSSWSSSSWSSSSWSSSSWSSSSW';
	let flag = false;
	for (let i = 0; i < ary.length; i++) {
		let dice1 = ary[i];
		for (let j = i + 1; j < ary.length; j++) {
			let dice2 = ary[j];
			for (let k = 0; k < d.length; k++) {
				dice2 = dice2.roll(d[k]);
				if (
					dice1.first === dice2.first &&
					dice1.second === dice2.second &&
					dice1.third === dice2.third &&
					dice1.forth === dice2.forth &&
					dice1.fifth === dice2.fifth &&
					dice1.sixth === dice2.sixth
				) {
					flag = true;
					break;
				}
			}
		}
	}

	console.log(flag ? 'No' : 'Yes');
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
