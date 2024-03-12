

function findSum(arr,t) {
    
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]+arr[j]===t){
            return [arr[i],arr[j]]
        }
    }
}
   return-1 
}



console.log(findSum([1, 2, 3, 4, 5, 6, , 7, 8, 9], 5));
