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
		const frame = write(h,w)
		console.log(frame);
		i++
	}
}

function write(h,w){
	let rec = ''
	for(let j = 0; j < h; j++){
		let f = j%2 === 0 ? true : false
		for(let k = 0; k < w; k++){
			rec += f ? '#' : '.'
			f = !f
		}
		rec += '\n'
	}
	return rec
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));