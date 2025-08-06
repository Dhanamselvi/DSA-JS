function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;

    while( right >= left){
        let middle = Math.floor((left + right)/2);
        if(target === arr[middle]){
            return middle
        }
        else if(target > arr[middle]){
            left = middle + 1
        }
        else{
            right = middle - 1
        }
    }
    return -1
}
console.log(binarySearch([-20,-8,-1,0,5,8,9,12,15],8))  // 5
console.log(binarySearch([-20,-8,-1,0,5,8,9,12,15],-8)) // 1
console.log(binarySearch([5],5))                        // 0
console.log(binarySearch([-20,-8,-1,0,5,8,9,12,15],7))  // -1