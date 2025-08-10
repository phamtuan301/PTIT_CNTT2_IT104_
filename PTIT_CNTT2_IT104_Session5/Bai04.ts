class Vehicles {
    readonly id: number;
    name: string;
    protected year: number;
    private company: string;
    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id},Vehicle Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle1 = new Vehicles(1, "Ford", 2021, "Ford Motor Company");
vehicle1.displayInfo();