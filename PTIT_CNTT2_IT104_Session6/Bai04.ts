interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
    

class Rectangle1 implements Geometry {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle1(4, 6);
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);
