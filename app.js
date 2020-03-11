/*const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");*/
const inquirer = require("inquirer");
/*const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");*/

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "employee",
      message: "What is your Id?",
      name: "employee",
      message: "What is your Id?",
    },
    {
        type: "input",
        name: "employee",
        message: "What is your email??"
      },
    {
      type: "input",
      message: "What is your office number?",
      name: "employee",
    },
    {
        type: "list",
        choices: ["Manager","Engineer","Intern"],
        name: "choices",
        message: "Which team member you like to add:"
      },
   
  ]).then(function(response) {
      console.log(JSON.stringify (response,null,4));
  })
  
   
   
   
   
    /*var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });*/