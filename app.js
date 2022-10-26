const Manger = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputPath = path.join(OUTPUT_DIR,"team.html");

const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");

// Inquirer to gather information about the team members
const teamMembers = [];

function start() {
    managerQuery();
}

function managerQuery() {
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of your team manager?",
        },
        {
            type:"input",
            name:"id",
            message:"Team Managers ID:",
        },
        {
            type:"input",
            name:"email",
            message:"Team Managers email adress:",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Team Managers office number:",
        },
    ])
    .then((val) => {
        const manager = new Manager(
            val.name,
            val.id,
            val.email,
            val.officeNumber,
        );
        console.table(manager);
        teamMembers.push(manager);
        addTeamMember();
    }).catch(err => console.log(err))
}

function addTeamMember() {
    inquirer
    .prompt([
        {
            type:"list",
            name:"what_type",
            message:"Do you want to add an engineer or intern?",
            choices:["Engineer","Intern","Not right now"],
        },
    ])
    .then((val) => {
        if (val.what_type === "Engineer") {
            engineerQuery();
        } else if (val.what_type === "Intern") {
            internQuery();
        } else {
            createFile();
        }
    });
}

function engineerQuery() {
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Engineer name?",
        },
        {
            type:"input",
            name:"id",
            message:"Engineers ID number:",
        },
        {
            type:"input",
            name:"email",
            message:"Engineers email address:",
        },
        {
            type:"input",
            name:"github",
            message:"What is the Engineers GitHub Username?",
        },
    ])
    .then((val) => {
        const engineer = new Engineer(val.name, val.id, val.email, val.github);
        console.table(engineer);
        teamMembers.push(engineer);
        addTeamMember();
    });
}


function internQuery() {
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Interns name?",
        },
        {
            type:"input",
            name:"id",
            message:"Interns ID:",
        },
        {
            type:"input",
            name:"school",
            message:"What school did the intern attend?",
        },
    ])
    .then((val) => {
        const intern = new Intern(val.name, val.id, val.email, val.school);
        console.table(intern)
        teamMembers.push(intern);
        addTeamMember();
    });
}

function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } else {

        fs.writeFileSync(outputPath, render(teamMembers),"UTF-8");
        console.log("Files created in the output folder");
    }
}

start();