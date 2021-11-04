//ES6: CONST AND LET VIDEO NOTES

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


//ES6 ARROW FUNCTIONS VIDEO NOTES
//Basic example
//Create full name with standard function
function createFullName(first, last) {
    return first + " " + last;
}
console.log(createFullName("Huck", "Finn"));


//Create full name with arrow function
let createFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
    //return not here because it's implied
console.log(createFullName2('Tom', 'Sawyer'));


//Rule 1
//Example with {}
//a = string, b = integer
//Concatenate string x number of times to itself
let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result; //return is needed because there are multiple lines and {}
}
console.log(someFunction('Hello', 3));


//Rule 2
//1 parameter, no () needed
//let someFunction = a => { }

//0 parameters, need blank ()
//let someFunction = () => { }


//Rule 3
//Best practice: Use const var and assign arrow function when creating stand-alone arrow function, ie. if we're not passing function into something anonymously (no var name given). This is so value of funciton won't be changed later.



//CALLBACKS VIDEO NOTES

//let username = sentHttpRequest('getUser');
//console.log(username);

//If function reaches out to a different server to get username, then we try to log username, username could come back undefined. Even though it looks like it should be defined, it hasn't been returned yet. The console.log line started running before username was successfully grabbed. Use callback to get around it


//Example from above with callback

//function logUsername(user) {
//    console.log(user);
//}


//logUsername function is passed into sendHttpRequest Function as an argument

//sendHttpRequest('getUser', logUsername); //Not logUsername()!! We're not invoking logUsername, just name-dropping. Wouldn't work right now because no arguement is being passed in. When sendHttpRequest is finished and has username, it can call the logUsername function and pass in user.

//Can also pass in function anonymously using an arrow function. If going to reuse, don't do it anonymously. Give function a name

//sendHttpRequest('getUser', user => console.log(user));



//PROMISES VIDEO NOTES

//doSomethingThatReturnsAPromise() //Calls function
//    .then((value) => { //Passes function anonymously into then
//        console.log(value); //Log value to console if successful
//    }).catch((err) => { //If not successful, throw error
//        console.log(err); //Logs error to console in red
//    });
//Then/catch is like a try catch block


//The above is using an arrow function, but can also use standard function notation or we could have names for functions. If going to reuse, give it a name
//This accomplishes same thing as doSomethingThatReturnsAPromise

//function handleEvent(value) {
//    console.log(value);
//}

//function handleError(err) {
//    console.log(err);
//}

//doSomethingThatReturnsAPromise()
//    .then(handleEvent)
//    .catch(handleError);


