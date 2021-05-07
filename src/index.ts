
import {Employee} from './employee';
import {Engineer} from './engineer';
import {Intern} from './intern';
import {Manager} from './manager';
import {creatEmployeeCard, createHTMLFromEmployeeCards} from './generateEmployeeCard';
import * as inquirer from 'inquirer';
import {promises as fs} from 'fs';

let employees: Employee[] = [];
let employeeCards: string[] = [];
let questions = 
[
    {
        type: "list",
        name: "employeeType",
        message: "What kind of employee do you want to add add?",
        choices: ["Engineer", "Intern", "Manager"]
    },

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
        message: "What is the employees github username?",
        when: function(answers){ return answers.employeeType == "Engineer" }
    },
    {
        type: "input",
        name: "employeeOfficeNumber",
        message: "What is the employees office number?",
        when: function(answers){ return answers.employeeType == "Manager" }
    },
    {
        type: "input",
        name: "employeeSchool",
        message: "What is the employee's current school?",
        when: function(answers){ return answers.employeeType == "Intern" }
    }
    
];



// enum that contains options for the type of employee
enum Commands
{
    AddEmployee = "Add employee",
    Quit = "Quit"
}


function promptUser()
{
    inquirer.prompt(
        {
            type: 'list',
            name: 'command',
            message: "Select which type of employee to add. Select 'Quit' to exit",
            choices: Object.values(Commands)
        }
    )
    .then(answers => 
        {
            let employeeType = answers.command;
            switch(answers['command'])
            {
                case Commands.AddEmployee:
                    createEmployeePrompt();
                    break;
                case Commands.Quit:
                    // create the html text from all the generatd employeecards
                    let myPage = createHTMLFromEmployeeCards(employeeCards);
                    writeToFile(myPage);
                    // promise allows to write to file only when the user quits
                    // return new Promise(function (res, rej)
                    // {
                    //     if(myPage && myPage !="")
                    //     {
                    //         fs.writeFile("card-sample.html", myPage);
                    //         console.log("File written successfully")
                    //     }
                    //     else 
                    //     {
                    //         console.log("No employee cards to write")
                    //     }
                    // })
            }
        })
}



function createEmployeePrompt(): void
{
    inquirer.prompt(questions).then(answers=> 
        {
            let newEmployee;
            switch(answers.employeeType)
            {
                case "Engineer":
                    newEmployee = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
                    break;
                case "Intern":
                    newEmployee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeSchool);
                    break;
                case "Manager":
                    newEmployee = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeOfficeNumber);
                    break;
            }
            employeeCards.push(creatEmployeeCard(newEmployee));
            promptUser()

        })
}


async function writeToFile(myPage)
{
    return new Promise(function (res, rej)
    {
        if(myPage && myPage !="")
        {
            fs.writeFile("card-sample.html", myPage);
            console.log("File written successfully")
        }
        else 
        {
            console.log("No employee cards to write")
        }
    })

}

promptUser();

