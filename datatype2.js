"use strict"; // treat all JS code a newer version

// alert cannot be used in node
// alert("hello") // error

let name = "aman"
let age = 19;
let isloggedIn = true
/*
Types of DataTypes:-
1. number
2. String(used in '' & "")
3. Boolean
4. null => standalone value(type is object)
5. undefined => when not given a value(type is undefined)
6. Symbol => Used in React more(to identify uniqueness)
7. Object
*/

// typeof(isLoggedIn) & typeof isLoggedIn are same

console.log(typeof(null)); 
/*
Datatypes are of two types:-

1. Primitive(Actual value is not changed but copy is made)
String => string, Number => number, Boolean => boolean, null => object, undefined => undefined, Symbol => symbol, BigInt => bigint

2. Non-Primitive(Reference Value)
Array => object, Object => object, Function => function

JavaScript is a dynamically typed language because we dont have to define the type of value at declaration
*/

let myObj = {
    name : "Amandeep",
    Id : 13
} 

let myArray = [1,2,3];

const myfunction = function(){
    console.log("hello world");
}   