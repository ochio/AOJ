function Main(input){
  input = input.split('\n')
  for(let i = 0; i < input.length; i++){
      let [a,b] = input[i].split(' ').map(Number)
      if(a === 0 && b === 0) break;
      if(a > b) [a,b] = [b,a];
      console.log(`${a} ${b}`)
  }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));