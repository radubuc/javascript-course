//Client management menu driven app

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
    constructor(name, dev) {
        this.name = name;
        this.dev = dev;
        this.clients = [];
    }

    addClient(client) {
        if (client instanceof Client) { //Makes sure entry is compatible with Client class
            this.clients.push(client); //Adds entry to clients array 
        } else {
            throw new Error(`Please enter a valid client name, industry, address, contact name, phone number, and email address.`);
        }
    }

    describe() {
        return `${this.client} is assigned to ${this.Dept.name.length} departments.`;
    }
}

class Menu {
    constructor() {
        this.depts = [];
        this.selectedDept = null; //Needed to specify which department currently working on
        this.selectedClient = null; //Is this need to use viewClient method?
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
        alert("Program ended. Have a great day!") //Show message when program terminates
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
        3) Delete client
        -----------------------
        ${deptInfo} 
        `) //Check to see if this works with view client added in!
    }

    createDept() {
        let name = prompt("Enter name of the new department:");
        this.depts.push(new Dept(name)); //Dept name is now new instance of Dept
    }

    viewDept() {
        let index = prompt("Enter the index of the department you'd like to view:");
        if (index > -1 && index < this.depts.length) { //validation
            this.selectedDept = this.depts[index];
            let description = "Department Name: " + this.selectedDept.name + "\n";

            for (let i = 0; i < this.selectedDept.depts.length; i++) {
                description += i + ") " + this.selectedDept.depts[i].name + "\n";
                  //Ex. 0) Dev <new line>
            }

            let selection = this.showDeptMenu(description);
            switch (selection) {
                case "1":
                    this.createClient();
                    break;
                case "2":
                    this.viewClient();
                    break;
                case "3":
                    this.deleteClient();
                    break;
                default:
                    selection = 0; //Goes back one screen. TEST THIS and maybe add addClientNote and related methods later 
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
        let name = prompt("Enter the name for the new client:");
        let industry = prompt(`Enter the industry for ${this.name}:`); //Check if this works
        let address = prompt(`Enter the address for ${this.name}:`);
        let contactName = prompt(`Enter the contact's name for ${this.name}:`);
        let phone = prompt(`Enter the phone number for ${this.contactName} at ${this.name}:`);
        let email = prompt(`Enter the email for ${this.contactName} at ${this.name}:`);
        let dept = prompt("Enter the name of the department you'd like to assign this client to"); //Check if it works using "dept". It should!
        this.selectedDept.clients.push(new Client(name, industry, address, contactName, phone, email, dept)); //Make new client and push to clients array
    }

    viewClient() { //Flying blind here, so check if it works!
        let index = prompt("Enter the index of the client you'd like to view:");
        if (index > -1 && index < this.clients.length) {
            this.selectedClient = this.clients[index];
            let description = "Client Name: " + this.selectedClient.name + "\n"

            for (let i = 0; i < this.selectedClient.clients.length; i++) {
                description += i + ") " + this.selectedClient.clients[i].name + "\n";
            }
        }
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