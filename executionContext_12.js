// Javascript Execution Context

// 1. Global Execution Context - Always made 

// this for browser => Window Object
// this for node => {} object

// 2. Function Execution Coontext 

// 3. Eval Execution Context

// Code is run in two phases:-

// 1. Memory Creation phase or Creation Phase - Space is allocated for the variables but not executed.

// 2. Execution Phase


// How execution takes place for this code:-

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

