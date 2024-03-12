 console.log(palindrome("malayalam"));


 function palindrome(str) {

    // return str.split('').reverse('').join('')===str

    let rev =''
    for(i=str.length-1;i>=0;i--){
        rev += str[i]
    }
    return rev ===str
 }
