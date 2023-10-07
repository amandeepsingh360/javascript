const accountID = 1234
let accountEmail = "amanarsh360@gmail.com"
var accountPassword = "12321"
accountCity = "Delhi"

console.log([accountID,accountEmail,accountPassword,accountCity]);

/*
const => constant(cannot be changed)
variables can be declared by let and var. 
We dont use var because of the problem of scope in var. if some programmer write a varible with var and other programmer will write same name of variable in other File, then value of variable gets changed.
to solve this, then let comes which doesnot leads to scope problem.\

Due to safeness of JS, we may dont assign variable(var,let or const) and can also use it. But it is highly unsafe.

if we dont assign variable then its value is undefined
*/