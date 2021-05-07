
import {Employee} from './employee';
import {Engineer} from './engineer';
import {Intern} from './intern';
import {Manager} from './manager';
import {creatEmployeeCard, createHTMLFromEmployeeCards} from './generateEmployeeCard';
import * as inquirer from 'inquirer';
import {promises as fs} from 'fs';

let employees :Employee[] = [];
let employeeCards: string[] = [];
let questions = 
[
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
enum Commands
{
    Engineer = "Add Engineer",
    Intern = "Add Intern",
    Manager = "Add Manager",
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
    // probably going to need to user promises here!
    .then(answers => 
        {
            switch(answers['command'])
            {
                case Commands.Engineer:
                    createEmployeePrompt();
                    break;
                
                case Commands.Intern:
                    break;
                
                case Commands.Manager:
                    break;
                
                case Commands.Quit:
                    let myPage = createHTMLFromEmployeeCards(employeeCards);
                    return new Promise(function (res, rej)
                    {
                        fs.writeFile("card-sample.html", myPage,);
                        
                    })
            }
        })

        
}



function createEmployeePrompt(): void
{
    inquirer.prompt(questions).then( answers=> 
        {
            let myEng = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
            employeeCards.push(creatEmployeeCard(myEng));
            promptUser()

        })
}




promptUser();

