const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // super () is called to avoid duplicating the construcot parts' that are common between Employee and Engineer
        super(name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;