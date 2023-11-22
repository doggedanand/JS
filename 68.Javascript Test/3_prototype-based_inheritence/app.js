// ==== Question 3 Prototype-based Inheritence ====

// Describe prototype based inheritence in Javascript. Provide an example demonstrating how objects
// inherit properties and methods from prototypes.

// Prototype inheritance in javascript is the linking of prototypes of a parent object to a child
// object to share and utilize the properties of a parent class using a child class.

let animal = {
  animalEats: true,
};

let rabbit = {
  rabbitJumps: true,
};


rabbit.__proto__ = animal;
console.log(rabbit.animalEats);
console.log(rabbit.rabbitJumps);
