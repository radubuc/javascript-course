//Building out a class and making an instance (object) of it
class Student {
    constructor(firstName, lastName, address, phone, gradeLevel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.gradeLevel = gradeLevel;
    }

    describe(classGrade, daysMissed) {
        return `${this.firstName} ${this.lastName} in grade ${this.gradeLevel} lives at ${this.address}. Their phone number is ${this.phone}. They received a ${classGrade} in Chemistry and missed ${daysMissed} days of class.`;
    } //You can pass in variables that weren't mentioned in the constructor. Don't need this keyword if not in constructor
}

class Teacher {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

//See practice app.js for menu


//Instantiating and logging
let student1 = new Student("Jeff", "Haupt", "123 Any Street", "555-555-5555", "12");
let student2 = new Student("Jeff", "Smith", "999 Any Street", "555-555-5555", "12");

let teacher1 = new Teacher();
teacher1.address = "444 This St"; //Can add name like this if don't know at time of instantiation
teacher1.name = "Tom Smith"; //If doing with dot notation, can pass in strings in different order than listed in constructor

console.log(student1);
console.log(student2);

console.log(teacher1);

console.log(student1.describe("C+", 5));

//instanceof checks if a student is of the class Student
console.log(student1 instanceof Student); //true
console.log(student1 instanceof Teacher); //false