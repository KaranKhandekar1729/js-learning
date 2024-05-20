const accountId = 1234;
let accountEmail = "karan@google.com"
var accountPassword = "1234567"
accountCity = "Mumbai" //not suggested/good practice
let accountState;

// accountId = 5678 // not allowed
accountEmail = "karan@nasa.gov"
accountPassword = "22343"
accountCity = "Ankara"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])