//ES6: CONST AND LET

//Let
var x = 10; //x = 10
{
    let x = 2; //x = 2
} //x = 10 again

//Const
//const pi = 3.14159;
//console.log(pi);

//pi = 6;
//console.log(pi); //This will throw "Uncaught TypeError: Assignment to constant variable" because the value of pi was already assigned.


//ES6 - TEMPLATE LITERALS
//Benefits of template literals
//1. Multi-line strings
let myString = `Hello
world
my name
is Nick.`;

console.log(myString);

let anotherString = "Hello\nworld\nmy name\nis Nick." //Before ES6, had to use escape character \n to denote line break. Looks same in console, though
console.log(anotherString);

let anotherString2 = "Hello" +
    "\nworld" +
    "\nmy name" +
    "\nis Nick.";
console.log(anotherString2); //This looks same way in console, but is easier to read code. Either way, use backticks and you can now add lines breaks like typing in regular text editor

//2. Interpolating - executing code inside string or a different language
//Denoted by ${}

console.log(`Six times five = ${6 * 5}`); //Everything inside ${} will be executed then concatenated to string