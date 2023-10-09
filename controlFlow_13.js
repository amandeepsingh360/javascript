// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', ' ', [], {}, function(){},


// Nullish Coalescing Operator(??) : Works in null and undefined
// [similar to :- a = (a == null || undefined) ? otherVal : a] 
let val1;

let val2 = 4 ?? 10;

let val3 = null ?? 10;

console.log(val1);
console.log(val2);
console.log(val3);

// terary operator

let val;

val = val === undefined ? 5 : val;

console.log(val);