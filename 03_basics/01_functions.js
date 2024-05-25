function sayMyName(){
    console.log("Jules");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}


const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginMessage(username){
    return `${username} just logged In`
}

// console.log(loginMessage("Jules"))
// console.log(loginMessage())

function calculateCartPrice(val1, ...num1){
    return num1 
}

console.log(calculateCartPrice(400, 200, 100));

const User = {
    username: "jules",
    price: "999"
}

function handleObject(anyobject){
    return `the user ${anyobject.username} checked out with ${anyobject.price} priced items`
}

// console.log(handleObject(User));
console.log(handleObject({
    username: "julian",
    price: 899
}))

const arr = [300, 100, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr))
console.log(returnSecondValue([100, 1000, 10000]))