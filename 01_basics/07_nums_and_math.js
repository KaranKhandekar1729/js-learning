const score = 100

const balance = new Number(100); //explicitly defines/creates the sepcific datatype container
console.log(balance) //[Number: 100]

console.log(balance.toString().length); //returns string
console.log(balance.toFixed(2)); //returns string

const anotherNum = 34.8792786
console.log(anotherNum.toPrecision(2)); //returns string

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));

Number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

//++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
