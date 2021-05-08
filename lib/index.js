"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engineer_1 = require("./engineer");
const intern_1 = require("./intern");
const manager_1 = require("./manager");
const generateEmployeeCard_1 = require("./generateEmployeeCard");
const inquirer = require("inquirer");
const fs_1 = require("fs");
// array to store string versions of the employee cards
let employeeCards = [];
// questions to ask during the inquirer prompt
let questions = [
    {
        type: "list",
        name: "employeeType",
        message: "What kind of employee do you want to add add?\n",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        type: "input",
        name: "employeeName",
        message: "What is the employees name?\n"
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the employees id?\n"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employees email?\n"
    },
    {
        type: "input",
        name: "employeeGithub",
        message: "What is the employees github username?\n",
        // only ask this question if employeeType is 'Engineer'
        when: function (answers) { return answers.employeeType == "Engineer"; }
    },
    {
        type: "input",
        name: "employeeOfficeNumber",
        message: "What is the employees office number?\n",
        // only ask this question if employeeType is 'Manager'
        when: function (answers) { return answers.employeeType == "Manager"; }
    },
    {
        type: "input",
        name: "employeeSchool",
        message: "What is the employee's current school?\n",
        // only ask this question if employeeType is 'Intern'
        when: function (answers) { return answers.employeeType == "Intern"; }
    }
];
// enum that contains options for the type of employee
var Commands;
(function (Commands) {
    Commands["AddEmployee"] = "Add employee";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
// main prompt function
function promptUser() {
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: "Select 'Add employee' to add an employee. Select 'Quit' to write the created employees to HTML and exit",
        choices: Object.values(Commands)
    })
        .then(answers => {
        switch (answers['command']) {
            case Commands.AddEmployee:
                createEmployeePrompt();
                break;
            case Commands.Quit:
                // create the html text from all the generatd employeecards
                let myPage = generateEmployeeCard_1.createHTMLFromEmployeeCards(employeeCards);
                writeToFile(myPage);
        }
    });
}
// secondary prompt that activates when user selects 'Add Employee'
function createEmployeePrompt() {
    inquirer.prompt(questions).then(answers => {
        let newEmployee;
        // switch statement to generate employee subclass based on employeeType selected
        switch (answers.employeeType) {
            case "Engineer":
                newEmployee = new engineer_1.Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
                break;
            case "Intern":
                newEmployee = new intern_1.Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeSchool);
                break;
            case "Manager":
                newEmployee = new manager_1.Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeOfficeNumber);
                break;
        }
        // generate employeecard from the new object and push it to the employeeCards array
        employeeCards.push(generateEmployeeCard_1.createEmployeeCard(newEmployee));
        console.log(`${answers.employeeType} successfully added to team\n\n`);
        // prompt the user again
        promptUser();
    })
        .catch((err) => // catch any thrown errors that happen during employee construction
     {
        console.log(err.message); // display error message
        console.log("Employee not added. Please try again\n\n");
        promptUser(); // try again
    });
}
// async function that uses a promise to only write until
async function writeToFile(myPage) {
    return new Promise(function (res, rej) {
        if (myPage && myPage != "") {
            fs_1.promises.writeFile("./dist/generated-team-profile.html", myPage);
            console.log("File saved successfully to dist/generated-team-profile.html");
        }
        else {
            console.log("No employee cards to write");
        }
    }).catch((err) => { console.log(err); });
}
promptUser();
