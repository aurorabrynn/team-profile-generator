// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Engineer";
        this.github = github;
        //this.icon = '<i class="fa fa-code-fork"></i>'
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
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer