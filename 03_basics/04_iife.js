// Immediately invoked function expressions
/*
IIFE is a way to immediately execute a function in JavaScript.
It can be used to start a database connection or avoid pollution in the global scope.
By using IIFE, the function is executed immediately without any problems.
The function can be written without the need for a support function.
IIFE helps prevent pollution in the global scope by creating a separate scope.
*/

(function chai(){
    //named iife
    console.log("DB CONNECTED");
})(); //semicolon required to stop context

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('karan')
// chai()