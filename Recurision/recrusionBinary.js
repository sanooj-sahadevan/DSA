const arr = [-5, 2, 4, 6, 10];

function recBinary(t){
    return search(t, 0, arr.length-1)
}


function search(t, start, end){
    if(start>end){
        return -1
    }

let mid = Math.floor((start + end)/2)

if(t===arr[mid]){
    return mid
}
if(t<arr[mid]){
    return search( t, start, end-1)
}else{
    return search (t, start+1, end )
}

}




console.log(recBinary(10));
console.log(recBinary(6));
console.log(recBinary(20));
console.log(recBinary(6));
