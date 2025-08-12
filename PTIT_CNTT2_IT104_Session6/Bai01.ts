abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): number;
}
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): number {
        return this.width * this.height;
    }
}
const rec1 = new Rectangle("Rectangle 1", 5, 10);
console.log(rec1.getName()); 
console.log(rec1.getSize()); 