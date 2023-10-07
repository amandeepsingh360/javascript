// 1 Jan 1970 => reference date 

// Month starts with 0
// Day starts with 1

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

// let createMyDate = new Date(2023, 0, 23);
// let createMyDate = new Date(2023, 0, 23, 5, 4, 5);
// let createMyDate = new Date("2023-01-14");
let createMyDate = new Date("01-14-2023");
console.log(createMyDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(createMyDate.getTime());
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000)); // seconds

console.log(createMyDate.toLocaleString('default',{
    weekday:"long"
}))