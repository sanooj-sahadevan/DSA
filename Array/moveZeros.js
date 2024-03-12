function zero(arr) {

    arr.sort((a,b)=>{
        if(a===0){
            return -1
        }else{
            return 0
        }
    })
    return arr
}

console.log(zero([2, 0, 3, 0, 4, 5]));
