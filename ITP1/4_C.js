function Main(input){
	input = input.split('\n')
	let flag = true
	let i = 0

	while(flag){
		let [a, op, b] = input[i].split(' ')
		if(op === '?') {
			flag = false
			break
		}
		a = Number(a)
		b = Number(b)
		let ans = 0
		if(op === '+'){
			ans = a + b
		}else if(op === '-'){
			ans = a - b
		}else if(op === '*'){
			ans = a * b
		}else if(op === '/'){
			ans = Math.floor(a/b)
		}
		console.log(ans);
		i++
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));