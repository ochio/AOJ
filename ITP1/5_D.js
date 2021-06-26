function Main(input){
  const N = Number(input)
	const ans = []
	for(let i = 1; i <= N; i++){
		if(i%3===0){
			ans.push(i)
		}else{
			if(include3(i)) ans.push(i)
		}
	}
	console.log(ans.join(' '));
}

function include3(num){
	if(num % 10 === 3) return true 
	num = Math.floor(num / 10)
	if(num > 0) return include3(num)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));