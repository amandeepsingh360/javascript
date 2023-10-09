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

// 1. Global Execution - this

// 2. Memory Phase - 
    // val1=>undefined
    // val2=>undefined
    // addNum=>definition
    // result1=>undefined
    // result2=>undefined

// 3. Execution Phase
    // val1 => 10
    // val2 => 5
    // for result1 => New Executional Context[Box]

    // New Executional Context => new Variable Environment + Execution Thread

    // New Executional Context:-
    //     Memory Phase :-
    //         val1 => undefined
    //         val2 => undefined
    //         total => undefined

    //     Execution Context :-
    //         num1 => 10
    //         num2 => 5
    //         total => 15[it returns]

    //     After this, it deletes

    // for result2 => New Executional Context[Box]

    // New Executional Context => new Variable Environment + Execution Thread

    // New Executional Context:-
    //     Memory Phase :-
    //         val1 => undefined
    //         val2 => undefined
    //         total => undefined

    //     Execution Context :-
    //         num1 => 10
    //         num2 => 2
    //         total => 12[it returns]

    //     After this, it deletes
