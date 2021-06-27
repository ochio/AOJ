function Main(input){
  input = input.split('\n')
	const n = Number(input[0])
	const table = [
		[new Array(10).fill(0),new Array(10).fill(0),new Array(10).fill(0)],
		[new Array(10).fill(0),new Array(10).fill(0),new Array(10).fill(0)],
		[new Array(10).fill(0),new Array(10).fill(0),new Array(10).fill(0)],
		[new Array(10).fill(0),new Array(10).fill(0),new Array(10).fill(0)],
	]

	for(let i = 0; i < n; i++){
		const [b, f, r, v] = input[i+1].split(' ').map(Number)
		table[b-1][f-1][r-1] += v
	}

	for(let i = 0; i < 4; i++){
		for(let j = 0; j < 3; j++){
			console.log(` ${table[i][j].join(' ')}`)
		}
		if(i !== 3){
			console.log('####################');
		}
	}


}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
