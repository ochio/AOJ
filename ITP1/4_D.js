function Main(input){
  input = input.split('\n')
	const n = Number(input[0])
	const ary = input[1].split(' ').map(Number)
	let min = Math.min(...ary),
	max = Math.max(...ary),
	sum = ary.reduce((pre,crt) => {
		return pre + crt
	})
	console.log("%d %d %d", min, max, sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));