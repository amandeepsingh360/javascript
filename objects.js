// Singleton => made from constructor[Has only one instance]
// Non - Singleton => made from literals[Has  multiple instances]

const sym = Symbol("key1");
const Obj = {
    name : "Aman",
    "full name" : "Amandeep Singh",
    [sym] : "mykey1",
    age : 19,
    location : "Delhi",
    isLoggedIn : true,
    lastLogin : ["Monday", "Tuesday"]
};

console.log(Obj.name);
console.log(Obj["name"]);
// console.log(Obj.fullname); //undefined, will not able to access
console.log(Obj["full name"]);
console.log(Obj[sym]); // This is correct for symbol
// console.log(Obj[sym]);

// Object.freeze(Obj); // will not able to change value of Obj

Obj.greeting = function(){
    console.log("Hello ! ")
}

Obj.greeting2 = function(){
    console.log(`Hello ${Obj.name} ! `)
}
console.log(Obj.greeting);
console.log(Obj.greeting());
console.log(Obj.greeting2());

const obj1 = {1:"a",2:"b"}; 
const obj2 = {3:"c",4:"d"};
console.log({obj1,obj2}); 

const obj3 = Object.assign(obj1,obj2);
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);
// obj1 is changed in assign
console.log(obj1);
const obj6 = {33 : "c", 4 : "dd"};
console.log(obj6);

const obj5 = {...obj1,...obj6};

// in Assign and {...} method, if the same key is present then the value of corresponding to the key is changed
console.log(obj5);

// Array
console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5)); //array me Array

// property present h ya nhi
console.log(obj5.hasOwnProperty('1'));
console.log(obj5.hasOwnProperty('5'));