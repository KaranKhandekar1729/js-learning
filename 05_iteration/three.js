//for of
["", "", ""]
[{}, {}, {}]

const numbers = [1,2,3,4]
for (const num of numbers) {
    // console.log(`Values: ${num}`);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(greet);
}

//Maps

const map = new Map()
map.set("IN", "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, values] of map) {
    // console.log(key, ":-", values);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
} // not iterable