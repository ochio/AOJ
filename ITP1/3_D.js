function Main(input){
  input = input.split(' ').map(Number)
  const [a,b,c] = input
  let count = 0
  for(let i = a; i <= b; i++){
    if(c % i === 0) count++
  }
  console.log(count);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));