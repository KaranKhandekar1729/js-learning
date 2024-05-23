// singleton
Object.create //through constructor, creates singleton
const myobj = new Object() //another way

// object literals

const mysym1 = Symbol('key1')

const JsUser = {
    name: 'Karan',
    "full name": "Karan Khandekar",
    [mysym1]: "mykey1",
    age: 19,
    location: 'Mumbai',
    Email: 'karan@google.com',
    isLoggedIn: false,
    LastLogInDays: ['Monday', 'Saturday'],
}

//ways to access
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);

// console.log(JsUser["full name"]); //can only be accessed this way and not thru dot operator
// console.log(JsUser.mysym1);
// console.log(typeof JsUser.mysym1); //being used as string and not symbol
// to do that use [mysym1]: "mykey1"

// console.log(JsUser[mysym1]);

JsUser.Email = "michie@email.com"
// Object.freeze(JsUser) //stops the obejct from changing
JsUser.Email = "jules@email.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello USer");
}

JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());