let name = "Aman"
let income = 30;

// String interpolation[We make placeholder here]
console.log(`Hi my name is ${name} and my income is ${income} lpa`);

// gaming is an object which contains key-value pairs of index and its value
const gaming = new String("amandeep-singh");
console.log(gaming[0]);
console.log(gaming.__proto__);

// the functions of string are in __proto__ but we can directly access them also

console.log(gaming.length);

console.log(gaming.toLowerCase()) // it doesnot change original value due to primitive datatype
console.log(gaming.charAt(5)); // character position, if not present then empty character
console.log(gaming.indexOf("M"));// if not present, -1

console.log(gaming.substring(0,4));
console.log(gaming.slice(-8,1));

const newString = "    aman     "
console.log(newString); 
console.log(newString.trim()); 
console.log(newString.replace("aman","arsh"));

console.log(newString.includes("   "));
console.log(newString.includes("  t "));

console.log(newString.split(" "));