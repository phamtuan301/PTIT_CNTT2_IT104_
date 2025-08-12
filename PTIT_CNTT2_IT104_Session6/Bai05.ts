interface changeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements changeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0;
    }
    speedUp(): void {
        this.speed += 10;
        console.log(`Speeding up. Current speed: ${this.speed}`);
    }

    slowDown(): void {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`Slowing down. Current speed: ${this.speed}`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Stopped.`);
    }
}
const car = new Vehicle();
car.speedUp();   
car.speedUp();   
car.slowDown();  
car.stop();