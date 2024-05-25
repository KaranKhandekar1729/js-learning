let a = 300
const b = 400
var c = 500

// if(true){
//     let a = 3
//     const b = 4
//     var c = 5
//     console.log("INNER: ", a);
// }

// console.log(a); //300
// console.log(b); //400
// console.log(c); //5


function one(){
    const username = "jules"

    function two(){
        const website = "notion"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


if (true) {
    const username = "jules"
    if (username === "jules") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++ interesting ++++++++++++++++++++

// Hoisting

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}