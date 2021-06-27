function Main(input){
  input = input.split('\n')
	let n = Number(input[0])
	const ary = input[1].split(' ').map(Number)
	const ans = []
	while(n > 0){
		ans.push(ary[n-1])
		n--
	}
	console.log(ans.join(' '));
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));