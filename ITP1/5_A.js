function Main(input){
  input = input.split('\n')
	let i = 0
	let flag = true;
	while(flag){
		const [h, w] = input[i].split(' ').map(Number)
		if(h === 0 && w === 0){
			flag = false;
			break;
		}
		let rec = ''
		for(let j = 0; j < h; j++){
			for(let k = 0; k < w; k++){
				rec += '#'
			}
			rec += '\n'
		}
		console.log(rec);
		i++
	}
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));