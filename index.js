const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

const promptEmployee = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: "What type of employee are you adding?",
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },


]);
};

const promptRole = (promptEmployee) => {
    let role = promptEmployee.role;
    if (role === "Engineer") {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub ID?"
            }
        ])
    }
    if (role === "Intern") {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "What school does this intern attend?"
            }
        ])
    }
    if (role === "Manager") {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office phone number?"
            }
        ])
    };
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('HTML file created')
    });
};

promptEmployee()
.then(promptRole)
