if(true){
    let a = 10;
    var b = 10;
    const c = 10;
}

// console.log(a); 
console.log(b); //problem of var
// console.log(c); 

function one(){
    const username = "Aman"
    function two(){
        const website = "yoyo";
        console.log(username);
    }
    console.log("hello");
    two();
}

one();

// Function Hoisting

console.log(addOne(4));
function addOne(num){
    return num + 1;
}

// console.log(addTwo(4)); //problem
const addTwo = function(num){
    return num + 2;
}