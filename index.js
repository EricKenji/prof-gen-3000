const inquirer = require('inquirer');

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

function init() {
    inquirer.prompt(questions);
};

init();