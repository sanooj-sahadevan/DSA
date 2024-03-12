// function reverse(arr) {
//   let i = 0;
//   let j = arr.length-1
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   return arr;
// }
console.log(reverse([1, 2, 3, 4, 5, 6]));


function reverse(arr){
    let rev = []

    for(i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }
    return rev
}