//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.1

let isLoggedIn = false
let Temp = null
let userEmail; //or let userEmail = undefined

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

// const bigNumber = 123n
// console.log(typeof bigNumber); //bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ['drStrange', 'Thor',  'SpiderMan']
let myObj = {
    name: "Karan",
    age: 19,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof myFunction); //returns function called object function
// console.log(typeof heroes); //object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)-- is a copy, Heap(Non-Primitive)-- is a reference

let myName = "Karan"

let otherName = myName
otherName = "Michie"

console.log(myName);
console.log(otherName);

let userOne = {
    email: "karan@google.com",
    upi: "123@paytm.com",
}

let userTwo = userOne
userTwo.email = "michie@google.com"

console.log(userOne.email);
console.log(userTwo.email);
