function Main(input){
  const [a,b] = input.split(' ').map(Number)
	const ans = Math.floor(a/b)
	const ans2 = a % b
	const ans3 = a / b
  console.log(ans + ' ' + ans2 + ' ' + ans3.toFixed(10));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));