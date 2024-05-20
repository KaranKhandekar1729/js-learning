let score = "28abc"

// console.log(typeof score)
// console.log(typeof(score));

let isNumber = Number(score)
// console.log(typeof isNumber) //number
// console.log(isNumber); //NaN

// "28" => 28
// "28abc" => NaN
// true => 1, false => 0

let isLoggedIn = "Karan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);

// "" => false
// "Karan" => true
// "1" => true, "0" => false

let someNumber = 11

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************* Operations **********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let srt2 = " Karan"

let str3 = str1+srt2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(1+3*3%2);

// console.log(+true); //converts to number
// console.log(+false);
// console.log(+""); //converts bool to number

// console.log(true+); //doesnt work

let num1, num2, num3

num1 = num2 = num3 = 2

let gameCounter = 100;
gameCounter++; //prefix and postfix precedence operator works differently
console.log(gameCounter);