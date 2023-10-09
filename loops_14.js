const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}

// maps
// Stores unique value and remembers the order of map
const map = new Map();

map.set('IN','India');
map.set('USA','United States of America');
map.set('Fr','France');
map.set('IN','Pindia');

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}

const obj = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// object is not iteratable through forof

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

for(const key in arr){
    console.log(arr[key]);
}