// if 
// const userLoggedIn = true
const temperature = 100

// if (temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("more than 50")
// }


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedin = true
const debitcard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true


if (userLoggedin && debitcard){
    console.log("Allowed to buy course");
}

if (LoggedInfromEmail || LoggedInfromGoogle){
    console.log("user logged in");
}