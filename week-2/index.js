//LOOPS VIDEO NOTES
//Variable declaration
// var firstName = "sam";

//If statement
// if (firstName == "sam") {
//    console.log("Hello, Sam!");
// }

//For Loop
// for (let i = 0; i < 10; i++) {
//    console.log(i);
// }

//console.log("______________________");

//For Loop with nested If statement
//for (let i = 0; i < 20; i++) {
//    if (i % 2 == 0) {
//        console.log(i);
//    }
//}

//console.log("______________________");

//Array of names
//let names = ["Sam", "Tom", "Hillary"];

//For Loop iterating through names array 1x
//for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

//console.log("______________________");

//While Loop
//let a = 0;

//while (a < 10) {
//    console.log(a);
//    a++;
//}

//console.log("______________________");

//Do While Loop
//let b = 110;

//do {
//    console.log(b);
//} while (b < 10);

//console.log("______________________");

//Modified For Loops
//    //For In Loop - self-iterates through the index
//    for (i in names) {
//        console.log(i);
//    }

//    console.log("______________________");

//    For Of Loop - self-iterates through the object/value
//    This is similar to For Each loop in Java?
//    for (name of names) {
//        console.log(name);
//    }

/////////////////////////////////////////////////////////////////////////////

//USER INPUT VIDEO NOTES
//var name = window.prompt("What is your name?");
//window.alert(`Welcome, ${name}`);

 //Simplified Credential mechanism
//let username = prompt("Username: ");
//let password = prompt("Password: ");

//if (username == "sammy123" && password == "12345") {
//    alert("Welcome back, " + username);
//} else {
//    alert("Incorrect username or password");
//}


//Slightly more advanced credential mechanism
var loggedIn = false;

while (!loggedIn) {
    let username = prompt("Username: ");
    let password = prompt("Password: ");

    if (username == "sammy123" && password == "12345") {
        alert("Welcome back, " + username);
        loggedIn = true;
    } else {
        alert("Incorrect username or password");
    }
}
