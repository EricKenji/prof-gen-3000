const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What type of employee is this?",
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, "data", err => {
        err ? console.log(err) : console.log('HTML file created')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('team.html', generateHtml(data));
    })
};

init();