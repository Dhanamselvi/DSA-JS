/* Write a function that searches  for an element in an array and returns the index,
    if the element is not present then just return -1
*/

function findSearchElement(arr,searchVal){
    for(let i = 0; i < arr.length; i++){
        if(searchVal === arr[i]){
            return i
        }
    }
    return -1
}
console.log(findSearchElement([1,4,7,2,9],2))  // 3
console.log(findSearchElement([1,4,7,2,9],6))  // -1

/* write a function that returns the number of negative numbers in an array */

function negativeNumberCount(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++
        }
    }
    return count
}

console.log(negativeNumberCount([1,3,-5,2,0,-8]))

/* Write a function that returns the largest number in an array */
// Method 1
function largestNumber(arr){
    let max = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
// Method 2
function findLargestNumber(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findLargestNumber([1,3,6,8,2,4,6]))

/* Write a function that returns the largest number in an array */
// Method 1
function smallesNumber(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
console.log(smallesNumber([1,3,6,8,2,4,6]))  // 1
// Method 2
function findsmallestNumber(arr){
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

console.log(findsmallestNumber([1,3,6,-8,2,4,6]))  // -8

