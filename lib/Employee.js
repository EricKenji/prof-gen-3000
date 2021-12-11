// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // returns employee name
    getName() {
        return this.name;
    }

    // returns employee ID
    getId() {
        return this.id;
    }

    // returns employee email
    getEmail() {
        return this.email;
    }

    // returns employee role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;