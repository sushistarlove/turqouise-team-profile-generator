const generateIndex = require('./src/render')
const { prompt } = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


const employeeData = [];

const path = require("path");
// const writeFileAsync = util.promisify(fs.writeFile);

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
            const newManager = new Manager(manager.name, manager.id, manager.email, manager.officenumber)
        employeeData.push(newManager)
        promptWhichEmployee()
        })

    }

    const promptWhichEmployee = () => {
        prompt([{
           message: "Which type of employee would you like to add?",
           type: "list",
           choices: ["Engineer", "Intern", "End"],
           name: "whichemployee"
        }]).then(({whichemployee})=> {
            console.log(whichemployee)

            switch(whichemployee) {
                case "Engineer":
                    promptUserEngineer();
                    break;

                    case "Intern":
                    promptUserIntern();
                    break;

                    default:
                        const render = generateIndex(employeeData)
                        fs.writeFile("template.html", JSON.stringify(render),error => {
                            if(error) throw error
                            console.log('filesaved')
                        })
                        process.exit();
            }
            })

    }


    const promptUserEngineer = () => {
        prompt([{
            message: "What is the engineer's name?",
            type: 'input',
            name: "anme",
        }, {
            message: "What is the engineer's id?",
            type: 'input',
            name: "id",
        }, {
            message: "What is the engineer's email?",
            type: 'input',
            name: "email",
        }, {
            message: "What is the engineer's github?",
            type: 'input',
            name: "github",
        }, {
            message: "What is the engineer's office number?",
            type: 'input',
            name: "officenumber",
        }]).then((engineer)=> {
            console.log(engineer)
            const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        employeeData.push(newEngineer)
        promptWhichEmployee()
        })

    }

    const promptUserIntern = () => {
        prompt([{
            message: "What is the intern's name?",
            type: 'input',
            name: "name",
        }, {
            message: "What is the intern's id?",
            type: 'input',
            name: "id",
        }, {
            message: "What is the intern's email?",
            type: 'input',
            name: "email",
        }, {
            message: "What is the intern's school?",
            type: 'input',
            name: "school",
        }]).then((intern)=> {
            console.log(intern)
            const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school)
        employeeData.push(newIntern)
        promptWhichEmployee()
        }) 

    }
promptUserManager()
}


askQuestions()





