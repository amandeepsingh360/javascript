const num = 1;
console.log(num);

const balance = new Number(5);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNum = 23.890903;

// Decimal se pehle priority
console.log(otherNum.toPrecision(1));
console.log(otherNum.toPrecision(2));
console.log(otherNum.toPrecision(3));

const hundreds = 1000000000;

console.log(hundreds.toLocaleString("en-IN"));

console.log(`Minimum value of number ${Number.MIN_VALUE}`);
console.log(`Maximum value of number ${Number.MAX_VALUE}`);

// ----------------- Maths -----------------

console.log(Math);

console.log(Math.abs(-100));
console.log(Math.round(59892.3928));
console.log(Math.floor(59892.3928));
console.log(Math.ceil(59892.3928));

console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

console.log(Math.random()) // values between 0 and 1

const min = 10;
const max = 30;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
