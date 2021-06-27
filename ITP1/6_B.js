function Main(input){
  input = input.split('\n')
	let n = Number(input[0])
	const s = new Array(13).fill(false)
	const h = new Array(13).fill(false)
	const c = new Array(13).fill(false)
	const d = new Array(13).fill(false)
	const obj = {
		S:s,
		H:h,
		C:c,
		D:d,
	}
	for(let i = 0; i < n; i++){
		const type = input[i+1].split(' ')[0]
		const num = Number(input[i+1].split(' ')[1])
		obj[type][num-1] = true
	}
	s.forEach((v,i) => {
		if(v === false){
			console.log(`S ${i+1}`);
		}
	})
	h.forEach((v,i) => {
		if(v === false){
			console.log(`H ${i+1}`);
		}
	})
	c.forEach((v,i) => {
		if(v === false){
			console.log(`C ${i+1}`);
		}
	})
	d.forEach((v,i) => {
		if(v === false){
			console.log(`D ${i+1}`);
		}
	})
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
