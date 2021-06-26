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
		for(let k = 0; k < w; k++){
			if(j === 0 || j === h-1){
				rec += '#'
			}else if(k === 0 || k === w-1){
				rec += '#'
			}else{
				rec += '.'
			}
		}
		rec += '\n'
	}
	return rec
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));