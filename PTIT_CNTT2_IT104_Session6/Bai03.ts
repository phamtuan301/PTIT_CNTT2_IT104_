
abstract class Animal {
    constructor(public name: string) {}
    abstract makeSound(): void;
    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof woof!");
    }
}
class Cat extends Animal {
    makeSound(): void {
        console.log("Meow meow!");
    }
}

const dog = new Dog("Buddy");
dog.makeSound();
dog.move(5);

const cat = new Cat("Kitty");
cat.makeSound(); 
cat.move(3);
//Abstract method khong co than ham
//Abstract method chi co the khai bao trong abstract class
//cac class con bat buoc phai override va viet phan than 
//

//method co than ham, dinh nghia trong class
//co the duoc goi truc tiep
//khong bat buoc override khi ke thua