for (let i = 2; i < 9; i = i + 2) {
  // console.log(i); // 2,4,6,8
}

// print all even numbers from array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // console.log(arr[i]); // 2, 4, 6, 8
    }
  }
}
// print all odd numbers from array
function printOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]); // 1, 3, 5, 7, 9
    }
  }
}

/*  Write a function that searches for an element in an array and returns its index,
  if the element is not present, return -1. */

function searchElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement([2, 3, 1, 4, 2, 8, 23], 2)); // 0
console.log(searchElement([2, 3, 1, 4, 2, 8, 23], 8)); // 5
console.log(searchElement([2, 3, 1, 4, 2, 8, 23], 10)); // -1

// Write a function that returns the number of negative number in an array

function countNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegativeNumber([1, 2, 3, -4, -2, -4, -6, 8])); // 4

// Write a function that returns the largest number in an array

function largestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestNumber([1, 2, 3, 8, 2, 4, 9, 23, 11])); // 23
console.log(largestNumber([1, 2, 3, 8, 2, 4, 9, -23, 11])); // 11

// Write a function that returns the smallest number in an array
function smallestNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(smallestNumber([1, 2, 3, 8, 2, 4, 9, 23, 11])); // 1
console.log(smallestNumber([1, 2, 3, 8, 2, 4, 9, -23, 11])); // -23

// write a function that returns the second largest number in an array

function secondLargestNum(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest; // infinity, 4,
      firstLargest = arr[i]; // 4,9
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestNum([4, 9, 0, 1, 2, 8, 7])); // 8
console.log(secondLargestNum([4])); // null
console.log(secondLargestNum([])); // null
console.log(secondLargestNum([-4, -9, 0, -1, -2, -8, -7])); // -1
console.log(secondLargestNum([10, 20, 4, 5, 2, 20, 5, 9, 20])); // 10
