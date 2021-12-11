const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArray = [];

const promptManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office phone number?"
    },
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager);
    })
};

const promptEmployee = () => {
    console.log(
        `
        NOW ADDING EMPLOYEES
        `
    )

        return inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: "Is this emplyoee an engineer or intern?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is this employee's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this employee's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this employee's email address?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this engineer's GitHub ID?",
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does this intern attend?",
                when: (input) => input.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: "Would you like to add another employee?",
                default: false
            },
        ])
        .then(employeeData => {
            let { role, name, id, email, github, school, addEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
            } else {
                employee = new Intern (name, id, email, school);
            }

            employeeArray.push(employee);

            if (addEmployee) {
                return promptEmployee(employeeArray);
            } else {
                return employeeArray;
            }
        })

        
};

function writeToFile(data) {
    fs.writeFile('teams.html', data, err => {
        err ? console.log(err) : console.log('HTML file created')
    });
};

promptManager()
    .then(promptEmployee)
    .then(employeeArray => {      
        return generateHtml(employeeArray);
    })
    .then(pageHtml => {
        writeToFile(pageHtml);
    })
    .catch(err => {
        console.log(err);
    });



