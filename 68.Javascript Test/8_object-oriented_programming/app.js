// ==== Question 8 Object Oriented Programming (OOP) ====

// Discuss the concept of object-oriented programming in JavaScript without using classes.
// Provide an example of creating objects and definig methods.

// JavaScript is a prototype-based object-oriented language, which means that it doesn't have classes,
// rather it defines behaviors using a constructor function and then reuses it using the prototype.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person("John Doe", 30);
const anand = new Person("Ananad Vishwakarma", 22);


john.greet();
anand.greet();

