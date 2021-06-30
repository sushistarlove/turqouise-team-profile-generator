const Employee = require("../lib/employee");


class Manager extends Employee {
    constructor(officeNumber) {
        super(officeNumber)
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;