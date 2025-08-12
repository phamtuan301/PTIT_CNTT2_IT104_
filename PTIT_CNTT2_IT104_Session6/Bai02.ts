abstract class Job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log(`Job type: ${this.type}`);
    }
    abstract calculateSalary(): number;
}
class ParttimeJob extends Job {
    workingHours: number;
    constructor(type: string, workingHours: number) {
        super(type);
        this.workingHours = workingHours;
    }
    calculateSalary(): number {
        return this.workingHours * 30000; 
    }
}
class FulltimeJob extends Job {
    monthlySalary: number;
    constructor(type: string, monthlySalary: number) {
        super(type);
        this.monthlySalary = monthlySalary;
    }
    calculateSalary(): number {
        return 10000000; 
    }
}
const parttimeJob = new ParttimeJob("Part-time", 160);
const fulltimeJob = new FulltimeJob("Full-time", 10000000);
parttimeJob.printType();
console.log(`Salary: ${parttimeJob.calculateSalary()}`);
fulltimeJob.printType();
console.log(`Salary: ${fulltimeJob.calculateSalary()}`);