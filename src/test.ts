// Set

let numberSet: Set<number>;
numberSet = new Set([1, 2, 3, 4]);

const stringSet: Set<string> = new Set(["a", "b", "c"]);

class Cat {
	constructor() {}

	walk(): void {
		console.log("cat is walking");
	}
}

const cat = new Cat();
cat.walk();

interface IAnimal {
	name: string;
	age: number;
	feed(food: string, amount: number):void;
}

class Dog implements IAnimal {
	constructor(public name: string, public age: number) {}

	feed(food: string, amount: number): void {
		console.log(`${this.name} have a ${amount} kg of ${food} `)
	}

	walk(): void {
		console.log(`${this.name} can walk`);
	}
}

const dog = new Dog("Lola", 7);
dog.feed('beef', 0.78);
dog.walk();
