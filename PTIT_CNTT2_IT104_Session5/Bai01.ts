class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`Vehicle Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const car1 = new Vehicle("Toyota", 2020, "Toyota Motor Corporation");
const car2 = new Vehicle("Honda", 2019, "Honda Motor Co., Ltd.");
car1.displayInfo();
car2.displayInfo();