let name = "Aman"
let income = 30;

// String interpolation[We make placeholder here]
console.log(`Hi my name is ${name} and my income is ${income} lpa`);

// gaming is an object which contains key-value pairs of index and its value
const gaming = new String("amandeep-singh");
console.log(typeof gaming);
console.log(gaming[0]);
console.log(gaming.__proto__);
// console.log(name.__proto__);

// the functions of string are in __proto__ but we can directly access them also

console.log(gaming.length);

console.log(gaming.toLowerCase()) // it doesnot change original value due to primitive datatype
console.log(gaming.at(5)); // character position, if not present then empty character
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

/*
Some string functions which I studied from MDN
1. str.at(index) or str.charAt(index) => at is newer version which supports negative indexes also. 
Prefer at than charAt..

2. str.concat(concatString) => Used for string concatenation[We can also use '+' operator].
"Aman".concat("deep") => Amandeep

3. str.endsWith(searchString,endPosition(optional)) => Used for checking end string in a string.
If endPosition is specified. It will search for searchString before endPosition
"Amandeep Singh".endsWith("Singh")=>true
"Amandeep Singh".endsWith("Singh", 8) => false[It will search before 8th index]

Similarly for startsWith

4. str.includes(searchString, position) => searchString present or not.

5. str.indexOf(searchString, position) => Return index of searchString in str
If not found, returns -1
The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.

6. str.lastIndexOf(searchString, position) => returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

The method returns the index of the last occurrence of the specified substring at a position less than or equal to position, which defaults to +Infinity. If position is greater than the length of the calling string, the method searches the entire string. If position is less than 0, the behavior is the same as for 0 — that is, the method looks for the specified substring only at index 0.

7. str.padEnd(targetLength, padString) => pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

targetLength is the length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, the current string will be returned as-is.

Similary for padStart()

8. str.repeat(numberofTimes) => repeats the string to numberofTimes
str = "Sad"
str.repeat(3) => "Sad Sad Sad"

9. str.replace(string, replacement) => replaces string with replacement in str
[It replaces only first instance of string]

10. str.replaceAll(string,replacement) => Replaces in whole string.

11. str.slice(start,end(optional)) => takes substring from [start,end - 1].
Supports -ve indexing.
for start > end => gives empty string

Similar is str.substring(start, end) but it doesnot support -ve indexes and in case of start>end, it swaps the indexes.

12. str.split(separator, limit(optional)) => separates str based on separator till limit. It gives an array.

13. str.toLowerCase() and str.toUpperCase() does lowerCase and upperCase respectively.

14. str.trim() removes white spaces in string. 

str.trimStart() and str.trimEnd() removes whiteSpaces from start and end resp.
*/

console.log("Hello Hello Hello".replace("Hello","Bye"));

console.log("Aman".concat("deep"," Singh"));