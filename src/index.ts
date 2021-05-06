
import {Employee} from './employee';
import {Engineer} from './engineer';
import {Intern} from './intern';
import {cardTemplate, pageTemplate} from './generateEmployeeCard';
import * as inquirer from 'inquirer';
import * as fs from 'fs';


enum typeOfEmployees
{
    Engineer = "Engineer",
    Intern = "Intern",
    Manager = "Manager",
}


let myEng = new Engineer("Max", 3, "pablohoney@gmail.com", "smg061");
let myIntern = new Intern("Santos", 4, "max.go.342@yahoo.com", "Sam Houston");

function promptUser():void
{
    inquirer.prompt(
        {
            type: 'list',
            name: 'command',
            message: 'Add which type of employee',
            choices: Object.values(typeOfEmployees)
        }
    )
    .then(answers => 
        {
            promptUser();
        })

}

let myExport = cardTemplate(myEng);
let myPage = pageTemplate(myExport);
let myAppend = cardTemplate(myIntern);
fs.writeFile('./card-sample.html', myPage, (err) => 
{
    if (err) throw err;
    else console.log("File Written succesfully");
     
});

fs.appendFile('./card-sample.html', myAppend, (err) => 
{
    if (err) throw err;
    else console.log("File Written succesfully");
     
});