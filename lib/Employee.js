class Employee {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.makeMoney = null;
    }

    sayMyName = () => {
        console.log(this.name, this.lastname);
    }
}

class Engineer extends Employee {
    constructor(name, lastname) {
        super(name, lastname);
        this.tricks = [];

        this.makeMoney = "Defining problems, Conducting and narrowing research, Analyzing criteria, Finding and analyzing solutions, and making decisions";
    }
    sayMyName() {
        console.log("I'm the great ", this.name);
    }
    doMagic() {
        console.log("Working Working!");
    }
}

const employee = new Employee("John", "Doe");
console.log("Name: ", employee.name);
console.log("Lastname: ", employee.lastname);
employee.sayMyName();
console.log(employee.makeMoney);
const engineer = new Engineer("John", "The Engineer");
console.log("Name: ", engineer.name);
console.log("Lastname: ", engineer.lastname);
engineer.sayMyName();
engineer.doMagic();
console.log(engineer.makeMoney);





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