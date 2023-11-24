// ==== Question 7 'this' keyword ====

// Explain how the "this" keyword works in JavaScript. Provide an example of situation where the
// value of "this" changes.

// “This” keyword refers to an object that is executing the current piece of code. It references
// the object that is executing the current function. If the function being referenced is a regular
// function, “this” references the global object.

function ExampleConstructor() {
  this.property = "some value";
}

const instance = new ExampleConstructor();
console.log(instance.property);
