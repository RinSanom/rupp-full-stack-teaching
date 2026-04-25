class Person {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  display() {
    console.log(`Name:  ${this.name} `);
    console.log(`Age:  ${this.age}`);
    console.log(`Role:  ${this.role}`);
  }
}

const person = new Person("Bopha", 19, "Teacher");
const person2 = new Person("Dom", 20, "Student");
const person3 = new Person("Jon", 30, "Teacher");

person.display();
person2.display();
person3.display();
