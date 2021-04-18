// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;
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
    getSchool() {
        return this.school;
    }
}

module.exports = Intern