class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(): void {
        this.speed -= 10;
        console.log(`${this.name} is slowing down.`);
    }
    speedUp(): void {
        this.speed += 10;
        console.log(`${this.name} is speeding up.`);
    }
    showSpeed(): void {
        console.log(`${this.name} is moving at ${this.speed} km/h.`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void {
        console.log(`Bicycle ID: ${this.id}, Name: ${this.name}, Speed: ${this.speed} km/h, Gear: ${this.gear}`);
    }
}
const bike1 = new Bicycle("Mountain Bike", 20, 1, 5);
bike1.speedUp();
bike1.slowDown();
bike1.showSpeed();
bike1.showInfo();