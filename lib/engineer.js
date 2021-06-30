const Employee = require("../lib/employee");


class Engineer extends Employee {
    constructor(github) {
        super(github)
        this.github = github;
    }

    getGithub() {
        return this.github;

    }

    getRole() {
        return 'engineer';
    }

}

module.exports = Engineer;