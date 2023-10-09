// when we create function, then its parameters
function addTwoNumbers(num1, num2){
    return (num1 + num2);
}
// when we call function, then its arguments
console.log(addTwoNumbers(3,4));

// Default value
function login(person = "AMAN"){
    if(person){
        return `${person} logged in`;
    }
}

console.log(login());

// "" & undefined are false values

// When we dont know the number of items coming in function

function combine(...num){
    return num;
}

console.log(combine(1,2,3,4,5));


// -----Arrow Function----
// this is an object
console.log(typeof this);
// this is used to access current context
const user = {
    username : "Amandeep Singh",
    price : 10000,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our store`);
        console.log(this);
    } 
}

user.welcomeMessage();
// changed the context
// context - kiske bare me baat ho rhi h[or values]
user.username = "Arsh";
user.welcomeMessage();

// current context of js in node environment is empty object[Global Object]
console.log(this);

// current context in browser is Window object[global object]

// this is used in object not functions
function name(){
    const userName = "AMANdeep"
    console.log(name.userName);
    console.log(this);
}

name()

// Arrow Function
const arrow = () => {
    let userName = "Aman";
    // "this" gives global scope in arrow functions
    console.log(this);
}

arrow();

// Implicit Return[Maan lena ki return krega]
const addTwo = (num1,num2) => (num1 + num2)
// const addTwo = (num1,num2) => ({num1 + num2}) // it is not true because it will return object and curly braces dont have object


// Explicit Return[return lgana pdega]
// Curly braces me return hmesha likhna pdega
// const addTwo = (num1,num2)=>({username:"Aman"}) // to return object


// whatever we write in paranthesis is assumed to be returned

// Immediately Invoked Function Expressions(IIFE)
// IIFE is used to stop global pollution. It immediately executes.

// ; is used to differentiate previous code and new function IIFE
;(function hello(hll){
    console.log(`${hll}`);
})("hello");
// execute("hello")
// ()("hello")