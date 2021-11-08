//CLASSES VIDEO NOTES
//Make class called Student
class Student {
    //Constructor is called when we create an instance of Student
    //This is where all properties are initialized
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    //"Function" not needed here. Method obnly needs name.
    //Method is a function that belongs to an object or a class
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}


//Create instances of Student class
let student1 = new Student("Tom", "Sawyer", "6235555555", "A");
let student2 = new Student("Sam", "Smith", "4805555555", "A");

student1.introduce();
student2.introduce();



//INHERITANCE VIDEO NOTES
//Using inheritance
class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    sendNotification(notification) {
        console.log("Sending: " + notification);
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}


class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

    calculateDiscount(status) {
        if (status === "GOLD") {
            return 0.3;
        } else if (status === "SILVER") {
            return 0.15;
        }
        return 0;
    }
}

class CollectionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

    calculateFee(status) {
        if (status === "OVERDUE") {
            return 10;
        } else if (status === "DELINQUENT") {
            return 25;
        }
        return 5;
    }
}

let collectionSender = new CollectionSender("OVERDUE");
collectionSender.sendNotification("This is a test collections notification.")
//sendNotification is an option because CollectionSender inherits NotificationSender class



//HANDLING EXCEPTIONS VIDEO NOTES
try {
    list.push("hello");
} catch (err) {
    console.log(err);
}

console.log("goodbye");
//"goodbye" still prints after error because we told program how to handle exception instead of letting it crash