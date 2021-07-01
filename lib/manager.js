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
        return 'manager';
    }

}

module.exports = Manager;