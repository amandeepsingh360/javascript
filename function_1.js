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