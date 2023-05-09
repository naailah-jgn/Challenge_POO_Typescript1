class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    tellMyName() {
        console.log(`Iam ${this.name}`);
    }
    tellMyAge() {
        console.log(`Iam ${this.age} years old`);
    }
}
const man = new Person('John', 40);
const woman = new Person('Mary', 45);
console.log(man.tellMyName());
console.log(man.tellMyAge());
console.log(woman.tellMyName());
console.log(woman.tellMyAge());
