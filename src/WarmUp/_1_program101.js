console.log("Hello, World!");

// Datatypes in JavaScript
/*
    7 ---------- Number
    "Hello" ---- String
    true ------- Boolean
*/

const a  = 10;
const b = 20;

const sum = a+b;           // 30
const mutltiply = a * b;  //  200
const differecne = b-a;   // 10
const division = b / a;   // 2

const x = 10
let y = 5

// what is the difference between const and let?
/*
    const x = 10 --> we cannot change the value of x later in the code
    let y = 5 --> we can change the value of y later in the code
*/

let fistName = "John";
let lastName = "Doe";

let fullName = fistName + " " + lastName; // "John Doe"

fistName = "3";
lastName = 7;

fullName = fistName + " " + lastName; // "3 7"

fistName = 3;
lastName = "7";
fullName = firstName + " " + lastName; // "3 7"

fistName = 5;
lastName = 10;
fullName = firstName + lastName; // 15

// List in JavaScript
let arr = [2,9,34,27,10];
arr[3];   // 27
arr[3] + arr[0]; //29

arr[5]  // undefined

// List can have multiple datatypes
arr = [2, "Hello", true, 27, 10];

// List contains other lists
arr = [2, [3,5,7], true, 27, 10];
arr[1];  // [3,5,7]

// Object in JavaScript
/** 
 * Object is a collection of key-value pairs
 * 
 * 
*/
let obj ={
    a: 7,
    name: "Alice",
    bool: true,
    arr: [2,4,6],
    nestedObj: {
        x: 10,
        y: 20
    }
}   
console.log(obj.name); // "Alice"
console.log(obj.arr[2]); // 6