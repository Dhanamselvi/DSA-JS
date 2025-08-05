
let arr = [1,2,3,4,5]

function sumOfAllNumbersInArray(n){
    if(n == 0) return arr[n]
    return  arr[n] + sumOfAllNumbersInArray(n-1)
}
console.log(sumOfAllNumbersInArray(arr.length - 1))

// sum of all Odd Numbers
function sumOfAllOddNumbersInArray(n){
    let isOdd = (arr[n] % 2 != 0)
    if(n == 0) return isOdd ? arr[n] : 0
    return (isOdd ? arr[n] : 0) + sumOfAllOddNumbersInArray(n-1)     
}
console.log(sumOfAllOddNumbersInArray(arr.length - 1))


// sum of all Even Numbers
function sumOfAllEvenNumbersInArray(n){
    let isEven = (arr[n] % 2 == 0)
    if(n == 0) return isEven ? arr[n] : 0
    return (isEven ? arr[n] : 0) + sumOfAllEvenNumbersInArray(n-1)     
}
console.log(sumOfAllEvenNumbersInArray(arr.length - 1))
