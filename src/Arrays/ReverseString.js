// Reverse a String
/*
    Write a function that reverses a string.
    The  input string is given as an array of characters.
    You must do this by modifying the input array in-place with O(1) extra memory
*/

function reverseString(s){
    let length = s.length
    let halfLen = Math.floor(length/2)
    for(let i = 0; i < halfLen; i++){
        let temp = s[i];
        s[i] = s[length-1-i];
        s[length-1-i] = temp;
    }
    return s;
}
console.log(reverseString(['s','e','l','v','i']))