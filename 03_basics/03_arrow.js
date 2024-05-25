const user = {
    username: "jules",
    price: 999,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to the website`)
         console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "julian"
// user.welcomeMessage()

// console.log(this);


// function tea(){
//     let username = "karan"
//     console.log(this.username);
// }

// tea()


// const tea = function (){
//     let username = "karan"
//     console.log(this.username);
// }

// tea()


// const tea = () => {
//     let username = "karan"
//     console.log(this);
// }

// tea()

// const addTWo = (a, b) => {
//     return a + b
// }


// const addTWo = (a, b) => a + b
// const addTWo = (a, b) => (a + b)

const addTWo = (a, b) => ({username: "karan"})

console.log(addTWo(3,4));