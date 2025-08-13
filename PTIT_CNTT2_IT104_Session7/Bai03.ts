abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Animal name: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): void {
        console.log("Gau gau");
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): void {
        console.log("Meo meo");
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
dog.printName();
dog.makeNoise();
cat.printName();
cat.makeNoise();