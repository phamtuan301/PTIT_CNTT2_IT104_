class Animal {
    private name: string;
    protected age: number;
    species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak():void{
        console.log(`sound`);
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        this.age = age;
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Woof");
    }
}
class Cat extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Meow");
    }
}
class Rabbit extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Squeak");
    }
}

const dog = new Dog("Buddy", 3, "Dog", "Golden Retriever");
const cat = new Cat("Whiskers", 2, "Cat", "Siamese");
const rabbit = new Rabbit("Thumper", 1, "Rabbit", "Lionhead");
dog.setAge(4);
console.log(dog.getName(), dog.getAge(), dog.species, dog.breed);
console.log(cat.getName(), cat.getAge(), cat.species, cat.breed);
console.log(rabbit.getName(), rabbit.getAge(), rabbit.species, rabbit.breed);
dog.speak();
cat.speak();
rabbit.speak();
dog.setAge(4);
