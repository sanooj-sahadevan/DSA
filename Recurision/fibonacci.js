// function fibonacci(n){
//     const fib = [0,1]
//     for(i=2;i<n;i++){
//       fib[i] = fib[i-1] + fib[i-2]

//     }
//     return fib
//   }
//   console.log(fibonacci(7));


function recfib(params) {
  if(params<2){
    return params
  }
  return recfib(params-1)+ recfib(params-2)
  
}

console.log(recfib(6));

