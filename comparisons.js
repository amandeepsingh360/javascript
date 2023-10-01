// comparison should be not made with non-similar datatypes
// Results are unpredictable
console.log("2" > 1);
console.log("02" > 1);

// Unpredictable results
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Strict checking(===):- compares datatype also

console.log("1" === 1)