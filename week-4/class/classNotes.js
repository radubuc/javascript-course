//Class notes - 11/2/21
//TEMPLATE LITERALS

let iHateBackTicks = "This is a string literal";
console.log(typeof iHateBackTicks);

iHateBackTicks = `This is still a string`;
console.log(typeof iHateBackTicks);

let mathProblem = `5 times 5 = ${5 * 5}`;
console.log(mathProblem);
console.log(typeof mathProblem);

let x = 10;
let y = 10;
let mathProblems = `${x} x ${y} = ${x * y}`;
console.log(mathProblems);

//let id = 1439;
//let url = `https://dog.ceo/api/breeds/image/random/${id}`;

let url = (id) => `https://dog.ceo/api/breeds/image/random/${id}`; //Arrow Function
console.log(url(1500));

console.log(url);

let htmlElement = (html) => `<${html}>This is a ${html} element.</${html}>`; //Good candidate for const instead of let

document.getElementById("thisismain").innerHTML = htmlElement("h1");
console.log(htmlElement("p"));



//ARROW FUNCTIONS
function myName(first, last) {
    return `${first} ${last}`;
}

let myName2 = (first, last) => {
    return `${first} ${last}`;
}


console.log(myName("Jeff", "Haupt"));
console.log(myName2("John", "Doe"));
console.log(myName2("Tim", "Smith"));
console.log(myName2("Jane", "Doe"));



//CALLBACK FUNCTIONS
//Callbacks kinda obsolete due to Promises, but will still see them in wild
//function callback(element) {
//    //do things
//}

//function needsToComplete(url2) {
//    const xhr = new XMLHttpRequest();
//    //open
//    //pass in things
//    //headers
//}

//console.log(needsToComplete(url2), callback);



//PROMISES
//Requires you to think a bit differently
//API Call
//see findDogs-ex.png screenshot in week-4 folder
let findDogs = fetch('https://dog.ceo/api/breeds/image/random');
console.log(findDogs); //Can't get pic of dog to show up sad face

//findDogs
//    .then(response => console.log(response.json()))
//    .catch(error => console.log(error));

findDogs
    //Do something (grab data) with the promise
    .then(response => {
        console.log(response.json());
    })

    //or catch the error and log it
    .catch(error => console.log(error));