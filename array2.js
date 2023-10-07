const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = [[7, 8, 9], 10];
// push changes the original array but concat returns new array
firstArr.push(secondArr);
console.log(firstArr);
firstArr.pop();
const newArr = firstArr.concat(secondArr);
console.log(newArr);

// spread is used more than concat
const newSpreadArr = [...firstArr,...secondArr];
console.log(newSpreadArr);

console.log([...secondArr,...thirdArr]);

const FlatArr = thirdArr.flat(Infinity);
console.log(FlatArr)

console.log(Array.isArray(Array.prototype));
console.log(Array.isArray("Amandeep"));

console.log(Array.from("Amandeep"));
console.log(Array.from({name : "Amandeep"}));//not possible to make array
console.log(Array.from([1,2,3,4],(x) => x + x)); // function performs operation on whole array

console.log(Array.of(1, 2, 3));
console.log(Array.of(null, undefined));