// Remove Elements
/*
    Given an interger array nums and an integer val,
    remove all the accuances val in nums in-place.
    The order of the elements may be changed.
    Then return the number of elements in nums which are not equal to val.
*/

function removeElements(arr,val){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i]
            x = x + 1;
        }
    }
    return x;
}
console.log(removeElements([1,2,3,2,4,2,5,2],2))