//SPECIAL CLASS RECORDING NOTES - 1/24/22

//ARRAYS
let numberArray = [1, 34, 6, 32, 67];
let length = numberArray.length;

// console.log(numberArray[2]); //Gives element at index 2, ie. 6

numberArray.push(108); //Adds 108 to end of array
// console.log(numberArray);

for(let i = 0; i < numberArray.length; i++) { //For 0 to the end of the array, run and add one each time
    // console.log(numberArray[i]);
}

//FUNCTIONS
function addNumbers(num1, num2) {
    let sum = num1 + num2; //Sum variable is only visible inside this function AKA local scope
    return sum; //Not all functions require return. Will return to where function is called
    //Condensed to return num1 + num2
}

//Function #1 as an arrow function, condenses code even more
const addTwo = (num1, num2) => num1 + num2 //Return statement is implicit with arrow function

//Invoking functions
// console.log(addNumbers(1, 3)); //When empty, logs NaN

//Map method - Takes array, modifies it, adds elements to new array
let double = numberArray.map(x => x*2); //Takes value, multiplies it by 2, adds to end of double array.
console.log(double); //Prints out double array, without values in original numberArray

//OR
// function doubleNumber(num1){
//     return num1 * 2;
// }
// let double = numberArray.map(function(x));
// console.log(double);

// Reduce method - Reduces whole array down into a new, singular value
let numbers = [175, 50, 25];

const getSum = (previousValue, currentValue) => {
    console.log(`Previous Value: ${previousValue}, Current Value: ${currentValue}`);
    return previousValue + currentValue;
} 

let sum = numbers.reduce(getSum, 10);
//First run, 10 is previousValue.
//10 + 175 = 185;
//185 + 50 = 235;
//235 + 25 = 260;

//Filter method
let students = [
    {
        name: 'Cassandra Matos',
        id: 1,
        program: 'Front End',
        instructor: ''
    },
    {
        name: 'Renee Dubuc',
        id: 2,
        program: 'Front End',
        instructor: ''
    },
    {
        name: 'Alejandro Mendez',
        id: 3,
        program: 'Back End',
        instructor: ''
    },
]

//Task: Create a new array with only Front End students
let frontEndStudents = students.filter(student => student.program == 'Front End');
// console.log(frontEndStudents);

let frontEndInstructor = {
    name: 'Cassandra Matos-Mendez',
    programs: ['Front End', 'Back End'],
    employeeNum: 2,
    slackUsername: '@CassandraMatos'
}

//Another arrow function example
//Adding the instructor field in students array
const assignInstructor = (studentsArray, instructor) => { //Take students and assign new instructor
    for(student of studentsArray){ //Access element and access property in element and assign new value
        student.instructor = instructor;
    } 
   } 

   assignInstructor(frontEndStudents, 'Cassandra Matos-Mendez');
   console.log(frontEndStudents);

// () in arrow function still means empty parameters
// Sometimes, if there is only 1 parameter, () may not be there
// => is implicit return statement for simple functions




//How to see result of JS w/o browser:
//Open terminal. Type node app.js or whatever js file is named