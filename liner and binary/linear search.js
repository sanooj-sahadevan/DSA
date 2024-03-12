const arr = [-5,2,10,4,6]


function linear(t){
for(i=0;i<arr.length;i++){
    if(t==arr[i]){
        return i
    }
} return -1
}

console.log(linear(10));