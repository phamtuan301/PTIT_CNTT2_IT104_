class Reactangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    setHeight(height: number): void {
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const react1 = new Reactangle(5, 10);
console.log(`Width: ${react1.getWidth()}, Height: ${react1.getHeight()}`);
console.log(`Area: ${react1.area()}, Perimeter: ${react1.perimeter()}`);
react1.setWidth(7);
react1.setHeight(12);
console.log(`Updated Width: ${react1.getWidth()}, Updated Height: ${react1.getHeight()}`);
console.log(`Updated Area: ${react1.area()}, Updated Perimeter: ${react1.perimeter()}`);