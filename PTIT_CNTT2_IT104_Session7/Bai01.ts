class Employee {
    name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor(): void {
        super.printInfor();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const emp1 = new Employee("John Doe", "TechCorp", "123-456-789");
emp1.printInfor();
const manager1 = new Manager("Alice Smith", "TechCorp", "987-654-321", 10);
manager1.printInfor();