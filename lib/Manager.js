// pulls from employee constructor
const Employee = require('./Employee');

// manager constructor
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // returns manager role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;