const name = "Karan"
const repoCount = 1

console.log(name + repoCount + " Value");

//String Interpolation method
//Modern way,  readability, 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string using new keyword
const myName = new String('Michie-rue')
//Advantage: gives method access, key value character pairs
console.log(myName[0]);
console.log(typeof myName); //object
console.log(myName.__proto__);
console.log(myName.length); //accessing method of prototype
console.log(myName.toUpperCase()); //original string doesn't get changed
console.log(myName.charAt(2));
console.log(myName.indexOf('h'));

const newString = myName.substring(0, 4) //exclusive
console.log(newString); 

const anotherName = myName.slice(-4, 4)
console.log(anotherName);

const String3 = "    Julian     "
console.log(String3);
console.log(String3.trim());

const url = "https://julesrue/%20/julesr"

console.log(url.replace("%20", "-"));
console.log(url.includes("jules"));
console.log(myName.split('-'));