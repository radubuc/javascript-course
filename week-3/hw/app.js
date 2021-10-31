//1a. Subtract first element of array from last
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[ages.length - 1]) - ages[0]);

//1b. Add new age to array and repeat 1a
ages.push(5);
console.log(ages);
console.log((ages[ages.length - 1]) - ages[0]);

//1c. Loop through array and calculate avg age.
//Help from Stack Overflow
//https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js 
const average = (ages) => ages.reduce((a, b) => a + b) / ages.length;
console.log(average(ages));

//2. Create an array called names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name.
//Help from Stack Overflow
// https://stackoverflow.com/questions/45642106/finding-average-string-length-of-strings-in-array-javascript
//First find sum of letters in each name, then divide by number of names
var total = 0;

for (i = 0; i < names.length; i++) {
    total += names[i].length;
} var avgNameLength = total / names.length;

console.log(avgNameLength);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
//Help from MDN
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join 
for (i = 0; i < names.length; i++) {
    console.log(names.join(', '));
}

/* 3. How do you access the last element of any array?
    array.length – 1

4.	How do you access the first element of any array?
    array[0]
*/

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//Modified from For Each slide 9 of week 3 class presentation
let nameLengths = [];

for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//Help from Stack Overflow
// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers 

let sumOfNameLengths = 0;

for (i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
    
}
console.log(sumOfNameLengths);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatNx(word, n) {
    let concatWord = "";
    for (let i = 0; i < n; i++) {
        concatWord += word;
    }
    return concatWord;
}

console.log(concatNx("Hello", 3));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

let firstName = "";
let lastName = "";

function createFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

console.log(createFullName("Renee", "Dubuc"));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arr1 = [17, 23, 32, 55]; //Sum 127
let isSumGT100 = true;

function sumGT100(array) {
    var sumOfArray = 0;

    for (i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }

    if (sumOfArray > 100) {
        return isSumGT100;
    } 
}

console.log(sumGT100(arr1)); //true

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
//Find sum of elements in array, then divide by number of elements in array
let arr2 = [19, 25, 30, 45]; //Sum 127

function avgArr(array) {
    var total = 0;

    for (i = 0; i < array.length; i++) {
        total += array[i];
    } var avgOfArray = total / array.length;

    return avgOfArray;
}

console.log(avgArr(arr2)); //Avg 29.75

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//console.log(avgArr(arr1)); //Avg 31.75
//console.log(avgArr(arr2)); //Avg 29.75

function compArrAvgs(a, b) {
    if (avgArr(a) > avgArr(b)){
        return true;
    } 
}
console.log(compArrAvgs(arr1, arr2)); //true


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 0;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 11)); //true
console.log(willBuyDrink(true, 9.50)); //false
console.log(willBuyDrink(false, 11.25)); //false
console.log(willBuyDrink(false, 7.75)); //false

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Create a function that finds the area of a triangle, given the base and height. Spits out both strings and integer. Use as a friendly calculator.
//A = 1/2bh
function findTriangleArea(b, h) {
    let area = (0.5 * b) * h;
    return area;
}

console.log("The area of the triangle is: " + findTriangleArea(5, 10) + " units."); //Area = 25







