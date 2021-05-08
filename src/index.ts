
import {Employee} from './employee';
import {Engineer} from './engineer';
import {Intern} from './intern';
import {Manager} from './manager';
import {createEmployeeCard, createHTMLFromEmployeeCards} from './generateEmployeeCard';
import * as inquirer from 'inquirer';
import {promises as fs} from 'fs';

// array to store string versions of the employee cards
let employeeCards: string[] = [];
// questions to ask during the inquirer prompt
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
        when: function(answers){ return answers.employeeType == "Engineer" }
    },
    {
        type: "input",
        name: "employeeOfficeNumber",
        message: "What is the employees office number?\n",
        // only ask this question if employeeType is 'Manager'
        when: function(answers){ return answers.employeeType == "Manager" }
    },
    {
        type: "input",
        name: "employeeSchool",
        message: "What is the employee's current school?\n",
        // only ask this question if employeeType is 'Intern'
        when: function(answers){ return answers.employeeType == "Intern" }
    }
    
];



// enum that contains options for the type of employee
enum Commands
{
    AddEmployee = "Add employee",
    Quit = "Quit"
}

// main prompt function
function promptUser(): void
{
    inquirer.prompt(
        {
            type: 'list',
            name: 'command',
            message: "Select 'Add employee' to add an employee. Select 'Quit' to write the created employees to HTML and exit",
            choices: Object.values(Commands)
        }
    )
    .then(answers => 
        {
            switch(answers['command'])
            {
                case Commands.AddEmployee:
                    createEmployeePrompt();
                    break;
                case Commands.Quit:
                    // create the html text from all the generatd employeecards
                    let myPage = createHTMLFromEmployeeCards(employeeCards);
                    writeToFile(myPage);
            }
        })
}



// secondary prompt that activates when user selects 'Add Employee'
function createEmployeePrompt(): void
{
    inquirer.prompt(questions).then(answers=> 
        {
            let newEmployee;
            // switch statement to generate employee subclass based on employeeType selected .. could be refactored
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
            // generate employeecard from the new object and push it to the employeeCards array
            employeeCards.push(createEmployeeCard(newEmployee));
            console.log(`${answers.employeeType} successfully added to team\n`)
            // prompt the user again
            promptUser()
        })
        .catch((err: Error) => // catch any thrown errors that happen during employee construction
         {
             console.log(err.message); // display error message
             console.log("Employee not added. Please try again\n\n")
             promptUser();   // try again
        })
}


// async function that uses a promise to only write until
async function writeToFile(myPage)
{
    return new Promise(function (res, rej)
    {
        if(myPage && myPage !="")
        {
            fs.writeFile("./dist/generated-team-profile.html", myPage);
            console.log("File saved successfully to dist/generated-team-profile.html")
        }
        else 
        {
            console.log("No employee cards to write")
        }
    }).catch((err) => {console.log(err)})
}

promptUser();

