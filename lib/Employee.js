class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
      getName() {
        return this.name;
        //console.log(this.name);
      }
      getId() {
        return this.id;
       // console.log(this.id);
      }
      getEmail() {
        return this.email;
        //console.log(this.email);
      }
      getRole() {
        return "Employee";
       // console.log("Employee");
      }
 };

 module.exports = Employee;





/*class Employee {
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }
    sayMyName(){
        console.log(this.name,this.lastname);
    }
}
class Engineer extends Employee {
    constructor(name,lastname) {
        super(name,lastname);
        this.works=[];
    }
    doJobs() {
        console.log("defining", "problems");
    }
}


const employee=new Employee("Joe", "Doe");
console.log("Name: ",employee.name);
console.log("LastName: ",employee.lastname);
employee.sayMyName();


const engineer=new Engineer("Berto", "The Engineer");
console.log("Name: ",engineer.name);
console.log("LastName: ",engineer.lastname);
engineer.sayMyName();
engineer.doJobs();*/