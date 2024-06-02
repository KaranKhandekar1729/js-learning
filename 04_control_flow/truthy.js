const UserEmail = []

if (UserEmail){
    console.log("Got User Email")
}else {
    console.log("Don't have user Email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}

if (UserEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// Null coalescing Operator (??)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 15
// val1 = null ?? 12 ?? 11
console.log(val1);

// Ternary Operator (?)
// condition ? true:false

const teaPrice = 100
teaPrice > 80 ? console.log("greater than 80"):console.log("lesser than 80");