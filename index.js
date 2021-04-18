const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
const generateHTML = require("./dist/generateHTML.js");
const generateCSS = require("./dist/generateCSS.js");

/*function generateWebpage () {
    fs.writeFile(`index.html`, generateHTML, (err) => {
        if (err) {
            throw err;
        }
    });
    fs.writeFile(`style.css`, generateCSS, (err) => {
        if (err) {
            throw err;
        }
    });
}*/

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
    ]).then(addManagerAnswers => {
        const me = new Manager(addManagerAnswers.name, addManagerAnswers.id, addManagerAnswers.email, addManagerAnswers.office);
        employees.push(me)
        console.log(employees);
       /* $(".row").append(`
        <div class="col-4">
        <div class="card" id="bigCard">
            <div class="card-header">
            <h2 class="card-title">${addManagerAnswers.name}</h2>
            <h3 class="card-subtitle mb-2"><i class="fa fa-briefcase"></i> Manager</h3>
            </div>
            <div class="card-body">
                <div class="card" id="smallCard">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${addManagerAnswers.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${addManagerAnswers.email}" class="card-link">${addManagerAnswers.email}</a></li>
                        <li class="list-group-item">Office number: ${addManagerAnswers.office}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`);*/
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
    ]).then(addEngineerAnswers => {
        console.log(addEngineerAnswers);
        const me = new Engineer(addEngineerAnswers.name, addEngineerAnswers.id, addEngineerAnswers.email, addEngineerAnswers.github);
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
    ]).then(addInternAnswers => {
        console.log(addInternAnswers);
        const me = new Intern(addInternAnswers.name, addInternAnswers.id, addInternAnswers.email, addInternAnswers.school);
        employees.push(me)
        console.log(employees);
        askQuestion();
    })
}

askQuestion()