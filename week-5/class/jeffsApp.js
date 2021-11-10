class Employee {
    constructor(firstName, lastName, position) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.position = position; 
    }

    describeEmployee() {
        return `${this.firstName} ${this.lastName} | ${this.position}`;
    }

}


class Department {
    constructor(deptName) {
        this.deptName = deptName;
        this.employees = []; 
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        } else {
            throw new Error(`${employee} does not work here and cannot be added to a department.`);
        }
    }

    describeDepartment() {
        return `${this.deptName} has ${this.employees.length} employees.`;
    }
}

class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null; 
    }

    start() {
        let selection = this.showMainMenuOptions(); 

        while ( selection != 0 ) {
            switch ( selection ) {
                case '1': 
                    this.viewDepartment(); 
                    break;
                case '2': 
                    this.viewDepartments();
                    break;
                case '3':
                    this.createDepartment();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Program ended');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit program
            1) View Department
            2) Display Departments
            3) Add Department
        `);
    }

    showDepartmentMenuOptions(description) {
        return prompt(`
            0) Back
            1) Add Employee
            2) Remove Employee 
            ---------------------------
            ${description}
        `)
    }

    viewDepartments() {
        let deptString = '';
        for (let i = 0; i < this.departments.length; i++) {
            deptString += i + ') ' + this.departments[i].deptName + '\n';
        }
        alert(deptString);
    }

    createDepartment() {
        let deptName = prompt('Enter department name: ');
        this.departments.push(new Department(deptName));  
    }

    viewDepartment() {
        let index = prompt(`Enter the index of the department you wish to view: `);
        if (index > -1 && index < this.departments.length) {


            this.selectedDepartment = this.departments[index];
            



            let description = 'Department Name: ' + this.selectedDepartment.deptName + '\n';
            for (let i = 0; i < this.selectedDepartment.employees.length; i++) {
                description += i + ') ' + this.selectedDepartment.employees[i].firstName + ' ' + this.selectedDepartment.employees[i].lastName + ' - ' + this.selectedDepartment.employees[i].position + '\n';
            }
            let selection = this.showDepartmentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addEmployee();
                    break;
                case '2':
                    this.removeEmployee();
            }
        }
    }

    addEmployee() {
        let firstName = prompt("Enter first name of new employee: ");
        let lastName = prompt("Enter last name of new employee: ");
        let position = prompt("Enter position of new employee: ");
        this.selectedDepartment.employees.push(new Employee(firstName, lastName, position));
    }

    removeEmployee() {
        let index = prompt("Which employee do you want to remove?");
        if (index > -1 && index < this.selectedDepartment.employees.length) {
            this.selectedDepartment.employees.splice(index, 1);
        }
    }
}

let menu = new Menu();

menu.start();
