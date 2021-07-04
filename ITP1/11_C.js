'use strict';

function Main(input) {
	input = input.split('\n');
	const num1 = input[0].split(' ').map(Number);
	const num2 = input[1].split(' ').map(Number);
	let dice = new Dice(...num1);
	let dice2 = new Dice(...num2);
	const d = 'NEWS';

	let flag = false;
	for (let i = 0; i < 1000; i++) {
		const idx = Math.floor(Math.random() * 4);
		dice = dice.roll(d[idx]);
		if (
			dice.first === dice2.first &&
			dice.second === dice2.second &&
			dice.third === dice2.third &&
			dice.forth === dice2.forth &&
			dice.fifth === dice2.fifth &&
			dice.sixth === dice2.sixth
		) {
			flag = true;
			break;
		}
	}
	console.log(flag ? 'Yes' : 'No');
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
