// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Manager";
        this.officeNumber = officeNumber;
        //this.icon = '<i class="fa fa-briefcase"></i>'
    }
    getName() {
        return this.name;
    };
    getEmail() {
        return this.email;
    };
    getId() {
        return this.id;
    };
    getRole() {
        return this.role;
    };
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager