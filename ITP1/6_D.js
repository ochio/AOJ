function Main(input){
  input = input.split('\n')
	const [n, m] = input[0].split(' ').map(Number)
	const ary = []
	for(let i = 0; i < n; i++){
		const tmp = input[i+1].split(' ').map(Number)
		const c = tmp.reduce((pre,crt, index) => {
			return pre + crt * Number(input[index+n+1])
		},0)
		console.log(c);
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
