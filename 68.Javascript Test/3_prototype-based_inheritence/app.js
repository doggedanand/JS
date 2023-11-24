// ==== Question 3 Prototype-based Inheritence ====

// Describe prototype based inheritence in Javascript. Provide an example demonstrating how objects
// inherit properties and methods from prototypes.

// Prototype inheritance in javascript is the linking of prototypes of a parent object to a child
// object to share and utilize the properties of a parent class using a child class.

let animal = {
  animalEats: false,
};

let rabbit = {
  rabbitJumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit.animalEats);
console.log(rabbit.rabbitJumps);

function Student(n, a) {
  this.name = n;
  this.age = a;
}

Student.prototype.class = function () {
  return this.name;
};

const student = new Student("anand", 22);
console.log("==== Student ====", student);

console.log("==== Student p object ====", student.class);

Student.prototype.class = function () {
  return this.name + " " + "!";
};

console.log("==== prototype object ====", student.class());
