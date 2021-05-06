"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engineer_1 = require("./engineer");
const intern_1 = require("./intern");
const generateEmployeeCard_1 = require("./generateEmployeeCard");
const inquirer = require("inquirer");
const fs = require("fs");
var typeOfEmployees;
(function (typeOfEmployees) {
    typeOfEmployees["Engineer"] = "Engineer";
    typeOfEmployees["Intern"] = "Intern";
    typeOfEmployees["Manager"] = "Manager";
})(typeOfEmployees || (typeOfEmployees = {}));
let myEng = new engineer_1.Engineer("Max", 3, "pablohoney@gmail.com", "smg061");
let myIntern = new intern_1.Intern("Santos", 4, "max.go.342@yahoo.com", "Sam Houston");
function promptUser() {
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Add which type of employee',
        choices: Object.values(typeOfEmployees)
    })
        .then(answers => {
        promptUser();
    });
}
let myExport = generateEmployeeCard_1.cardTemplate(myEng);
let myPage = generateEmployeeCard_1.pageTemplate(myExport);
let myAppend = generateEmployeeCard_1.cardTemplate(myIntern);
fs.writeFile('./card-sample.html', myPage, (err) => {
    if (err)
        throw err;
    else
        console.log("File Written succesfully");
});
fs.appendFile('./card-sample.html', myAppend, (err) => {
    if (err)
        throw err;
    else
        console.log("File Written succesfully");
});
