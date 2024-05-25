let a = 300
const b = 400
var c = 500

if(true){
    let a = 3
    const b = 4
    var c = 5
    console.log("INNER: ", a);
}

console.log(a); //300
// console.log(b); //400
// console.log(c); //5