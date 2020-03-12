const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
      }
      getRole() {
        return "Engineer";
        //console.log("Engineer");
      }  
      getGithub() {
        return this.github;
       // console.log(this.github);
      }  
};

module.exports = Engineer;