const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
const { generateTopHTML } = require("./dist/generateHTML.js");
const { generateBottomHTML } = require("./dist/generateHTML.js");
const { renderManager } = require("./dist/generateHTML.js");
const { renderEngineer } = require("./dist/generateHTML.js");
const { renderIntern } = require("./dist/generateHTML.js");
const generateCSS = require("./dist/generateCSS.js");

function generateWebpage() {
    fs.writeFile(`index.html`, generateTopHTML(), (err) => {
        if (err) {
            throw err;
        }
    });
    fs.writeFile(`style.css`, generateCSS(), (err) => {
        if (err) {
            throw err;
        }
    });
}

function renderCards() {
    employees.forEach(employees => {
        if (employees.role === "Manager") {
            fs.appendFile(`index.html`, renderManager(employees), (err) => {
                if (err) {
                    throw err;
                }
            });
        } else if (employees.role === "Engineer") {
            fs.appendFile(`index.html`, renderEngineer(employees), (err) => {
                if (err) {
                    throw err;
                }
            });
        } else if (employees.role === "Intern") {
            fs.appendFile(`index.html`, renderIntern(employees), (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    }
    )
}

function generateBottom() {
    fs.appendFile(`index.html`, generateBottomHTML(), (err) => {
        if (err) {
            throw err;
        }
    });
}

function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Quit"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Manager":
                console.log("add manager!")
                addManager();
                break;

            case "Add an Engineer":
                console.log("add engineer!")
                addEngineer();
                break;

            case "Add an Intern":
                console.log("add intern!")
                addIntern();
                break;

            default:
                console.log("Thank you!")
                generateWebpage();
                renderCards();
                generateBottom();
                break;
        }
    })
}


function addManager() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is their name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is their employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "What is their email?",
            type: "input"
        },
        {
            name: "office",
            message: "What is their office number?",
            type: "input"
        },
    ]).then(answers => {
        const me = new Manager(answers.name, answers.id, answers.email, answers.office);
        employees.push(me)
        console.log(employees);
        askQuestion();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is their name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is their employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "What is their email?",
            type: "input"
        },
        {
            name: "github",
            message: "What is their github link?",
            type: "input"
        },
    ]).then(answers => {
        const me = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(me)
        console.log(employees);
        askQuestion();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is their name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is their employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "What is their email?",
            type: "input"
        },
        {
            name: "school",
            message: "Where do they go to school?",
            type: "input"
        },
    ]).then(answers => {
        const me = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(me)
        console.log(employees);
        askQuestion();
    })
}

askQuestion();