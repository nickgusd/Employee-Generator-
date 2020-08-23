const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//array to push responses from prompt with user answers
const employeesArray = [];
managerPrompt();

// function for manager information and to push to employees Array
function managerPrompt() {
inquirer.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managersName", 
    },  
    {
        type: "input",
        message: "What is your manager's id?",
        name: "managersid",
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managersemail",
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "managersnumber",
    }
  ])
    .then(function(data) {
        console.log(data)
        const manager = new Manager (data.managersName, data.managersid, data.managersemail, data.managersnumber);
        // manager.getRole();
        employeesArray.push(manager);
        addTeam();
    })
    .catch(function(err) {
        throw err;
    }) 
    
}
// addTeam();
//function to add team members
function addTeam() {
    inquirer
    .prompt([
        {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "team",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ],
            },
        ])
    .then(function({team}){
    //     console.log({team})
    //    console.log(team[0])
        // console.log(`${team.team}`)
        if (team === "Engineer") {
            hireEngineer();
        } else if (team === "Intern") {
            hireIntern();
        } else {
            buildTeam();
        }

        

    })
    .catch(function(err) {
        throw err;
    })
}

//function to add Engineer to the team and push to employees array
function hireEngineer() {
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "engineerid"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineeremail"
    },
    {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github"
    },
  ])
  .then(function(data2) {
    console.log(data2)

    const engineer = new Engineer (data2.engineerName, data2.engineerid, data2.engineeremail, data2.github);
    engineer.getGithub();
    engineer.getRole();


    employeesArray.push(engineer);
    addTeam();
    })
    .catch(function(err) {
        throw err;
    })
    }

//     function hireIntern() {
//         inquirer
//         .prompt([
//           {
//             type: "input",
//             message: "What is your intern's name?",
//             name: "internName"
//           },
//           {
//               type: "input",
//               message: "What is your intern's id?",
//               name: "internid"
//           },
//           {
//               type: "input",
//               message: "What is your intern's email?",
//               name: "internemail"
//           },
//           {
//               type: "input",
//               message: "What is your intern's school?",
//               name: "school"
//           },
//         ])
//         .then(function(data3) {
//             console.log(data3)
//             const intern = new Intern (data3.internName, data3.internid, data3.internemail, data3.school);
//             intern.getRole();
//             intern.getSchool();

//            employeesArray.push(intern);
//            addTeam();
//            })
//            .catch(function(err) {
//             throw err;
//         })
           
//     }

    function buildTeam() {

        fs.writeFile(outputPath, render(employeesArray), function(err) {
            if(err){
                return console.log(err); 
            } 
        } );

    }
 

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
