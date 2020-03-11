class Engineer extends Employee {
    constructor(name,lastname) {
        super(name,lastname);
        this.job=[];
    }
​
    doWork() {
        console.log("defining problems, conducting and narrowing research, analyzing criteria, finding and analyzing solutions, and making decisions");
    }
}