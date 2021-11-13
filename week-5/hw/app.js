//Client management menu driven app - final js file

class Client {
    constructor(name, industry, address, contactName, phone, email) {
        this.name = name;
        this.industry = industry;
        this.address = address;
        this.contactName = contactName;
        this.phone = phone;
        this.email = email;
    }

    describe() {
        return `${this.name} located at ${this.address} is in the ${this.industry} industry. The point of contact is ${this.contactName}, and they can be reached at ${this.phone} or ${this.email}.`;
    }
}

class Dept {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }
}

class Menu {
    constructor() {
        this.depts = [];
        this.selectedDept = null; //Needed to specify which department currently working on
        this.selectedClient = null; //Needed to specify which client currently working on
    }

    start() {
        let selection = this.showMainMenu();

        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createDept();
                    break;
                case "2":
                    this.viewDept();
                    break;
                case "3":
                    this.viewAllDepts();
                    break;
                case "4":
                    this.deleteDept();
                    break;
                default:
                    selection = 0; //exit program
            }
            selection = this.showMainMenu(); //Shows main menu after every applicable action
        }
        alert("Program ended. Have a great day!"); //Show message when program terminates
    }

    showMainMenu() {
        return prompt(`
            0) Exit
            1) Create new department
            2) View a department
            3) View all departments
            4) Delete a department
        `);
    }

    showDeptMenu(deptInfo) {
        return prompt(`
        0) Back
        1) Create client
        2) View client
        3) View all clients
        4) Delete client
        -----------------------
        ${deptInfo} 
        `);
    }

    showClientMenu(clientInfo) {
        return prompt(`
        0) Back
        -----------------------
        ${clientInfo} 
        `) 
    }

    createDept() {
        //console.log("1. ", this.depts); //console log for debugging purposes
        let name = prompt("Enter name of the new department:");
        this.depts.push(new Dept(name)); //Dept name is now new instance of Dept
        //console.log("2. ", this.depts); //console log for debugging purposes
    }

    viewDept() {
        let index = prompt("Enter the index of the department you'd like to view:");
        if (index > -1 && index < this.depts.length) { //validation
            this.selectedDept = this.depts[index];
            let description = "Department Name: " + this.selectedDept.name + "\n";

            let selection = this.showDeptMenu(description);
            switch (selection) {
                case "1":
                    this.createClient();
                    console.log("Successfully created a client.");
                    break;
                case "2":
                    console.log("Viewing a client.");
                    this.viewClient();
                    break;
                case "3":
                    console.log("Viewing all clients.");
                    this.viewAllClients();
                    break;
                case "4":
                    this.deleteClient();
                    console.log("Successfully deleted a client.");
                    break;
                default:
                    selection = 0; //Goes back one screen. 
            }
        }
    }

    viewAllDepts() {
        let deptString = "";
        for (let i = 0; i < this.depts.length; i++) { //Iterate through depts
            deptString += i + ") " + this.depts[i].name + "\n"; //Get name and index for each dept and add new line
        }
        alert(deptString); //Display all depts in dialog box
    }

    deleteDept() {
        let index = prompt("Enter the index of the department you'd like to delete:");

        if (index > -1 && index < this.depts.length) {
            this.depts.splice(index, 1); //Removes 1 dept from the index the user enters
        }
    }

    createClient() {
        //console.log("1. ", this.selectedDept.clients); //console log for debugging purposes
        let name = prompt("Enter the name for the new client:");
        let industry = prompt(`Enter the industry for ${name}:`);
        let address = prompt(`Enter the address for ${name}:`);
        let contactName = prompt(`Enter the contact's name for ${name}:`);
        let phone = prompt(`Enter the phone number for ${contactName} at ${name}:`);
        let email = prompt(`Enter the email for ${contactName} at ${name}:`);
        this.selectedDept.clients.push(new Client(name, industry, address, contactName, phone, email)); //Make new client and push to clients array
        //console.log("2. ", this.selectedDept.clients); //console log for debugging purposes
    }

    viewClient() { 
        let index = prompt("Enter the index of the client you'd like to view:");
        if (index > -1 && index < this.selectedDept.clients.length) { //Needs selectedDept before clients-have to get into dept first!
            this.selectedClient = this.selectedDept.clients[index];
            let description = "Client Name: " + this.selectedClient.describe() + "\n"
            this.showClientMenu(description);
        }
    }

    viewAllClients() { //Check if this works!
        let clientString = "";
        for (let i = 0; i < this.selectedDept.clients.length; i++) { //Iterate through clients. or dept.clients or selectedDept.clients
            clientString += i + ") " + this.selectedDept.clients[i].name + "\n"; //Get name and index for each client and add new line
        }
        alert(clientString); //Display all clients in dialog box
    }
    

    deleteClient() {
        let index = prompt("Enter the index of the client you'd like to delete:");
        if (index > -1 && index < this.selectedDept.clients.length) {
            this.selectedDept.clients.splice(index, 1); //Removes 1 player from the index the user entered
        }
    }
    
}

let menu = new Menu();
menu.start();