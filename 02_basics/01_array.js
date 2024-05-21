// array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7]
const myHeroes = ['DrStrange', 'Mysterio', 'Knight']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

// shallow copy-- call by ref
// mutable, indexable

// Array methods

// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(1));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
