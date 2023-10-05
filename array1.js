const arr = [1,"Hi", [1, 2, 3], 2, 3, 4, 5]; 

console.log(arr);

// Array makes shallow copy[same reference point, heap storage]
// It doesnot make deep copy

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(9); // high complexity[not optimised]
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.includes(10));
console.log(arr.indexOf(100));

console.log(arr.join()); //converts to string

// slice, splice
// if (a,b) is the range, slice will print (a, b - 1) and donot affect the orignal array
// if (a,b) is the range, splice will print (a, b) and removes the portion in the original array

const newArray = [1, 2, 3, 4, 5, 6];
console.log("A : ",newArray);

const sliceArray = newArray.slice(1, 3);
console.log(sliceArray);
console.log("B : ",newArray);

const spliceArray = newArray.splice(1, 3);
console.log(spliceArray);
console.log("C : ",newArray); 