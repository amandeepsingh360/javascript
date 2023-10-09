const coding = ["c++","python", "Java", "JS", "PHP"]

// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>console.log(item))

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding=[
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

// myCoding.forEach((item)=>{
//     console.log(item.languageName)
// })

// forEach doesnot return its value

// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
console.log(newNums);


// Map

const newNumbers = myNums.map((num)=>num+10);
console.log(newNumbers);

const newNumms = myNums
                .map((num)=>num*10)
                .filter((num)=>num > 40);

console.log(newNumms);

// Reduce
const myNewNums = [1,2,3]
// const myTotal = myNewNums.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     return acc + curr
// }, 0)
const myTotal = myNewNums.reduce((acc,curr) => acc + curr, 0)

console.log(myTotal);

// Practical use case of reduce

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999,
    },
    {
        itemName : "PY Course",
        price : 999,
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999,
    },
    {
        itemName : "Data Science Course",
        price : 12999,
    },
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(PriceToPay);