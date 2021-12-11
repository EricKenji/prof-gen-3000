//pulls from employee constructor
const Employee = require('./Employee');

// intern constructor
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // returns intern's school
    getSchool() {
        return this.school;
    }

    // returns interns role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;