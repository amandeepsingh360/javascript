/*
convert to number
string which is not a number and undefined ==> NaN(Not a Number)
null ==> 0

convert to boolean
empty string => false
non-empty string => true
*/

let ar = null
let conv = Number(ar);
console.log(conv);