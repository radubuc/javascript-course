//CLASSES VIDEO NOTES
//Make class called Student
//class Student {
//    //Constructor is called when we create an instance of Student
//    //This is where all properties are initialized
//    constructor(firstName, lastName, phoneNumber, grade) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.phoneNumber = phoneNumber;
//        this.grade = grade;
//    }

    //"Function" not needed here. Method obnly needs name.
    //Method is a function that belongs to an object or a class
//    introduce() {
//        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
//    }
//}


//Create instances of Student class
//let student1 = new Student("Tom", "Sawyer", "6235555555", "A");
//let student2 = new Student("Sam", "Smith", "4805555555", "A");

//student1.introduce();
//student2.introduce();



//INHERITANCE VIDEO NOTES
//Using inheritance
//class NotificationSender {
//    constructor(status) {
//        this.status = status;
//    }

//    sendNotification(notification) {
//        console.log("Sending: " + notification);
//    }

//    findUsersWithStatus(status) {
//        let users = getUsers(status);
//        return users;
//    }
//}


//class PromotionSender extends NotificationSender {
//    constructor(status) {
//        super(status);
//    }

//    calculateDiscount(status) {
//        if (status === "GOLD") {
//            return 0.3;
//        } else if (status === "SILVER") {
//            return 0.15;
//        }
//        return 0;
//    }
//}

//class CollectionSender extends NotificationSender {
//    constructor(status) {
//        super(status);
//    }

//    calculateFee(status) {
//        if (status === "OVERDUE") {
//            return 10;
//        } else if (status === "DELINQUENT") {
//            return 25;
//        }
//        return 5;
//    }
//}

//let collectionSender = new CollectionSender("OVERDUE");
//collectionSender.sendNotification("This is a test collections notification.")
//sendNotification is an option because CollectionSender inherits NotificationSender class



//HANDLING EXCEPTIONS VIDEO NOTES
//try {
//    list.push("hello");
//} catch (err) {
//    console.log(err);
//}

//console.log("goodbye");
//"goodbye" still prints after error because we told program how to handle exception instead of letting it crash



//MENU APP VIDEO NOTES
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        //Checks to see if player is instance of Player class, so someone can't just pass in a string or number
        if (player instanceof Player) {
            this.players.push(player); //Adds player to team
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null; //Need to add because we can only work on one team at a time
    }

    start() {
        let selection = this.showMainMenuOptions(); //Methods don't exist yet. Top Down development, will make all later
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createTeam();
                    break;
                case "2":
                    this.viewTeam();
                    break;
                case "3":
                    this.deleteTeam();
                    break;
                case "4":
                    this.displayTeams();
                    break;
                default:
                    selection = 0; //Default is to end program
            }
            selection = this.showMainMenuOptions(); //call selection again inside of loop so menu options will show after every action as long as loop is active
        }
        alert("Goodbye!") //Alerts shows up when program is exited
    }
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create new team
            2) View team
            3) Delete team
            4) Display all teams
        `) //Remember, template literal allows normal line breaks!
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) Back
            1) Create Player
            2) Delete Player
            -----------------------
            ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = ""; //Create blank string
        for (let i = 0; i < this.teams.length; i++) { //Iterate through teams
            teamString += i + ") " + this.teams[i].name + "\n"; //Get name for each team and add new line. Each team will show up with an index numbering them (zero based)
        }
        alert(teamString); //Display all teams in a dialog box that pops up in browser
    }

    createTeam() {
        let name = prompt("Enter name for new team: "); //User enters name in browser
        this.teams.push(new Team(name)); //Team gets pushed to team's array
    }

    viewTeam() {
        let index = prompt("Enter the index of the team you wish to view: ");
        //Always validate user input so they don't crash program
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = "Team Name: " + this.selectedTeam.name + "\n";

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ") " + this.selectedTeam.players[i].name + " - " + this.selectedTeam.players[i].position + "\n"; //Prints index, ), specific player's name, -, position, new line
                //Ex: 0) Renee - goalie [new line after]
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createPlayer();
                    break;
                case "2":
                    this.deletePlayer(); //Break not needed because nothing comes after
            }
        }
    }

    deleteTeam() {
        let index = prompt("Enter the index of the team you wish to delete: ");
            if (index > -1 && index < this.teams.length){
            this.teams.splice(index, 1); //Remove 1 team from the index the user entered
            }
        
    }

    createPlayer() {
        let name = prompt("Enter name for new player: ");
        let position = prompt("Enter position for new player: ");
        this.selectedTeam.players.push(new Player(name, position)); //Push player to whatever team is selected. Makes new player, takes in name and position user entered in prompt
    }

    deletePlayer() {
        let index = prompt("Enter the index of the player you wish to delete: ");
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1); //Use splice to remove 1 player at the index the user entered
        }
    }
}

let menu = new Menu(); //Creates instance of Menu
menu.start(); //Shows menu