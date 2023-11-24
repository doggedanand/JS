// ==== Question 1 Closure ====

// Expanin what a closure is in JavaScript Provide a proctical example demonstrationg
// the use of closures.

// Closure means that an inner function always has access to the vars and parameters
// of its outer function, even after the outer function has returned.

// Or Function with lexicle scope is a closer.

function OuterFunction() {
  var outerVariable = 1;

  function InnerFunction() {
    alert(outerVariable);
  }

  InnerFunction();
}

OuterFunction();

// second Example

function test() {
  let a = 100;
  return function inner() {
    return a+1;
  };
}

let inner = test();
console.log("====",inner());
console.dir(inner);

