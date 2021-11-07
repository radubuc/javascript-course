//Week 4 Quiz Scratch

//Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier.
//function createFullName(firstName, lastName) {
//    return firstName + " " + lastName;
//}

//function doubleNumber(number) {
//    return number * 2;
//}

//function getEvenNumbers(array) {
//    let evenNumbers = [];
//    for (let i of array) {
//        if (i % 2 === 0) {
//            evenNumbers.push(i);
//        }
//    }
//    return evenNumbers;
//}


const createFullName = (firstName, lastname) => `${firstName} ${lastName}`;

const doubleNumber = (number) => number * 2;

const getEvenNumbers = (array) => {
    let evenNumbers = [];
    for (let i of array) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}



//The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

//name starts with a 'C'(upper or lowercase)
//address contains no undefined fields
//the city is Peoria and the state is AZ
//membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

//The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },

//My Test customer
//  {
//        name: 'Brianna',
//        address: {
//            street: '5678 E Bell Rd',
//            city: 'Tucson',
//            zip: '85641',
//            state: 'AZ'
//        },
//        membershipLevel: 'BRONZE',
//        age: 35
//    },
//    //more customers with the same schema. This customer should be returned because they match the criteria!
]; 

//Note: The solution to this problem does not require the use of callbacks.


//Processes an array of customer objects and return a new array
function analyzeCustomer(array) {
    let customer = customers.map(function (element) {
        if (customers.startsWith('c') || customers.startsWith('C')) {
            return customer;
        }
        if (customers.address !== undefined){
            return customer;
        }
        if (customer.address.city == Peoria && customer.address.state == AZ) {
            return customer;
        }
        if (customer.membershipLevel == 'GOLD' || customer.membershipLevel == 'PLATINUM' || (customer.membershipLevel == 'BRONZE' && customer.age < 29)) {
            return customer;
        }
        //else {
        //    Is else statement needed? Forgot to add it in
        //}
    });
} console.log(analyzeCustomer(customers));


//Pseudo Code - add MAP
//function analyzeCustomer(array) {
//    let customer = customers.map(function (element) {
//    if (name starts with a 'C'(upper or lowercase)) {
//            return customer;
//        }
    
//    if (address contains no undefined fields) {
//        customer.
//    }
//    if (the city is Peoria and the state is AZ) {

//    }
//    if (membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too) {

//    }

//    return new array

//});
//} console.log(analyzeCustomer(customers));