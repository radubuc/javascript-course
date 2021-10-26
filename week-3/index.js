//////ARRAYS VIDEO NOTES

////var customerNames = [];
//////Push adds name to array
////customerNames.push('Sam Smith');
////customerNames.push('Tommy Guns');

//////Logs first customer name
////console.log(customerNames[0]);

//////Prints multiple names
////for (let i = 0; i < customerNames.length; i++) {
////    console.log(customerNames[i]);
////}

//////Prints multiple names with For Of loop
////for (name of customerNames) {
////    console.log(name);
////}




////Functions Video Notes

////Writing instructions
//function myFunction() {
//    for (let i = 0; i < 100; i++) {
//        console.log(i);
//    }
//}

////Executing instructions
//myFunction();

////Example of parameters in function (ideally no more than 3. if more, consider multiple functions)
////Parameters in () - Like the parking spot the car goes into
////Parameters are always generic placeholder
//function createFullName(firstName, lastName) {
//    console.log(firstName + ' ' + lastName);
//}

////Example of arguments in invoking of function
////Arguments in () - Like the car that goes into a parking spot
//createFullName('Tom', 'Sawyer');


////Example of Return statement - gives value back, typically at end of function
////No () needed after return statement
//function createFullName(firstName, lastName) {
//    return firstName + ' ' + lastName;
//}

////Stores fullName as a variable to be reused
//var fullName = createFullName('Tom', 'Sawyer');
//console.log("Welcome, " + fullName);

////Think of function as vending machine. It will take your money and the address of the snack you select. If you insert more money than necessary, it will return your change




//INTERMEDIATE ARRAY METHODS VIDEO NOTES

//Map - Create a new array that has lengths of each string in array
//Passes in each param 1x then returns how many characters in each name in new array
//Parameter can be anything, doesn't have to be element but its a good descriptor
//NOTE: Be very careful with () and {} here! See lines 70-72 
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length; //Returns how many elements in array
});
console.log(lengths); //returns how many characters in each string


//Reduce - Takes all values in array and reduces them down to one value. Final value is result of a reducer function that we pass in as an argument
//Finding sum of lengths array AKA sum of all the characters in all the names
//Accumulator accumulates all values together, and it's result of the previously returned value. Each time function executes, accumulator will be whatever was returned by the previous execution
//CurrentValue or element in array
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

//Ex with initial value for the accumulator to start at
let sum2 = lengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);
console.log(sum2);


//For Each method (not loop) - Invokes a functions for each element in array, but doesn't return new array from results of invocation
//Log out each element (name) in array without loop
names.forEach(function (element) {
    console.log(element);
});


//Filter - Returns boolean value on each element in array. Returns new array that contains all elements where invoked method returns true. Use to filter out specific elements and only keep ones that pass boolean expression.
//Filter for names with even number of characters s
let evens = names.filter(function (element) {
    return element.length % 2 == 0;
});
console.log(evens);



//Splice - Alters content of array by adding, modifying, or removing element from array at specific location. Most common is to remove element
//Remove element (name) from array and return as an array
let removedElement = names.splice(1, 1); //(Location to start, how many elements to remove)
console.log(removedElement);