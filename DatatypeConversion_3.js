/*
convert to number
string which is not a number and undefined ==> NaN(Not a Number)
null ==> 0

convert to boolean
empty string, null, undefined => false
non-empty string => true
*/

let ar = null
let conv = Number(ar);
// console.log(conv);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(true);
console.log(+true);

// starting me "+" lgane se number me conversion ho jata h
console.log(+"");
console.log(+"Hello");
console.log(+null);

/*
Memory are of two types:-
Stack(Primitive), Heap(Non - Primitive)
*/