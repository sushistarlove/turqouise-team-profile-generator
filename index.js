const generateIndex = require('./src/render')
const { prompt } = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const askQuestions = () => {

    const promptUserManager = () => {
         prompt([{
            message: "What is the manager's name?",
            type: 'input',
            name: "name",
        }, {
            message: "What is the manager's id?",
            type: 'input',
            name: "id",
        }, {
            message: "What is the manager's Email?",
            type: 'input',
            name: "email",
        }, {
            message: "What is the manager's office number?",
            type: 'input',
            name: "officenumber",
        }]).then((manager)=> {
        console.log(manager)
        promptWhichEmployee()
        })

    }

    const promptWhichEmployee = () => {
        prompt([{
           message: "Whichs type of employee would you like to add?",
           type: "list",
           choices: ["Engineer", "Intern", "End"],
           name: "whichemployee"
        }]).then((employee)=> {
            console.log(employee)

            switch(employee) {
                case "Engineer":
                    promptUserEngineer();
                    break;

                    case "Intern":
                    promptUserIntern();
                    break;

                    case "End":
                        process.exit();
                        break;
            }
            })

    }


    const promptUserEngineer = () => {
        return prompt([{
            message: "What is the engineer's github?",
            type: 'input',
            name: "id",
        }, {
            message: "What is the engineer's ?",
            type: 'input',
            name: "email",
        }])

    }

    const promptUserIntern = () => {
        return prompt([{

        }])

    }

}