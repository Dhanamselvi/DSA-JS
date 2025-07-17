// Move Zeros
/*
    Given an integer array nums, move all 0's to the end of it while maintaining
    the relative  order of the non-zero elements.

    Note : that you must do this in-place without making a copy of array.
*/

function moveZero(nums){
    let x = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++;
        }
    }
    // Fill all the remaining elements with zeros
    for(let i = x; i<nums.length; i++){
        nums[i] = 0
    }
    return nums
}

console.log(moveZero([1,2,0,3,0,0,5]))