function Main(input){
	const r = Number(input)
	const a = r * r * Math.PI
	const b = 2 * Math.PI * r

	console.log(`${a} ${b}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));