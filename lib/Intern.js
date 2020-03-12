const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
      }
      getRole() {
        return "Intern";
       // console.log("Intern");
      }  
      getSchool() {
        return this.school;
        //console.log(this.school);
      }  
};

module.exports = Intern;