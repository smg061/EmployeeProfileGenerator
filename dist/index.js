"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engineer_1 = require("./engineer");
const generateEmployeeCard_1 = require("./generateEmployeeCard");
const inquirer = require("inquirer");
const fs_1 = require("fs");
let employees = [];
let employeeCards = [];
let questions = [
    {
        type: "input",
        name: "employeeName",
        message: "What is the employees name?"
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the employees id?"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employees email?"
    },
    {
        type: "input",
        name: "employeeGithub",
        message: "What is the employees github username?"
    }
];
// enum that contains options for the type of employee
var Commands;
(function (Commands) {
    Commands["Engineer"] = "Add Engineer";
    Commands["Intern"] = "Add Intern";
    Commands["Manager"] = "Add Manager";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: "Select which type of employee to add. Select 'Quit' to exit",
        choices: Object.values(Commands)
    })
        // probably going to need to user promises here!
        .then(answers => {
        switch (answers['command']) {
            case Commands.Engineer:
                createEmployeePrompt();
                break;
            case Commands.Intern:
                break;
            case Commands.Manager:
                break;
            case Commands.Quit:
                let myPage = generateEmployeeCard_1.createHTMLFromEmployeeCards(employeeCards);
                return new Promise(function (res, rej) {
                    fs_1.promises.writeFile("card-sample.html", myPage);
                });
                break;
        }
    });
}
function createEmployeePrompt() {
    inquirer.prompt(questions).then(answers => {
        let myEng = new engineer_1.Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
        employeeCards.push(generateEmployeeCard_1.creatEmployeeCard(myEng));
        promptUser();
    });
}
promptUser();
// function writetoFile(input)
// {
//     fs.writeFile('./card-sample.html', input, err =>
//     {
//         if(err) throw err;
//         else console.log("File written successfuly")
//     })
// }
async function main() {
}
