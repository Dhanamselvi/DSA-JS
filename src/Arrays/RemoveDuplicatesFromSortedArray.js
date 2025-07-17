// Remove Duplicates from Sorted Array (non-decreasinf)

/*
    Given an integer array nums sorted in non-decreasing order,
    remove the duplicates in-place such that each unique element 
    appears only once. The relative order of the elements should be kept the same.
    Then return the number of unique elements in nums
*/

function removeDuplicates(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[x]){
            x = x + 1;
            arr[x] = arr[i]
        }
    }
    // return arr 
    // OR
    return x+1;
}

console.log(removeDuplicates([1,1,2,3,4,4,5]))