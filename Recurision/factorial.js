function factorial(num){
    if(num===0){
        return 1
    }
    return num*factorial(num-1)
}

  console.log(factorial(5))



// function findSum(arr, t) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === t) {
//           return [arr[i], arr[j]];
//         }
//       }
//     }
//   }
  
//   console.log(findSum([1, 2, 3, 4, 5, 6,  7, 8, 9], 5));