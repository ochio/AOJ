function Main(input) {
	input = input.split('\n');
	let flag = true;
	let i = 0;
	while (flag) {
		const [m, f, r] = input[i].split(' ').map(Number);
		if (m === -1 && f === -1 && r === -1) {
			flag = false;
			break;
		}
		const ans = judge(m, f, r);
		console.log(ans);
		i++;
	}
}

function judge(m, f, r) {
	if (m === -1 || f === -1) {
		return 'F';
	}

	if (80 <= m + f) {
		return 'A';
	}

	if (65 <= m + f && m + f < 80) {
		return 'B';
	}

	if (50 <= m + f && m + f < 65) {
		return 'C';
	}

	if (30 <= m + f && m + f < 50) {
		if (r >= 50) {
			return 'C';
		}
		return 'D';
	}

	if (m + f < 30) {
		return 'F';
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
