const marvel_heroes = ['Thor', 'Hulk', 'Hawkeye']
const dc_heroes = ['flash', 'sandman', 'superman']

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes) //creates a new array
// console.log(marvel_heroes);
// console.log(all_heroes);

const all_new_heroes = [ ...marvel_heroes, ...dc_heroes] //goes past concats limitation of concatenating atmost 2 arrays
// console.log(all_new_heroes);

const another_array = [3, 4, 7, [8], [9, 5, [1]]]

const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);

console.log(Array.isArray('Karan'));
console.log(Array.from('Karan')); //converts to array
console.log(Array.from({name: 'karan'})); //returns an empty array as not sure whether to make array of key/value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns a new array from a set of elements