// ==== Question 1 Closure ====

// Expanin what a closure is in JavaScript Provide a proctical example demonstrationg
// the use of closures.

// Closure means that an inner function always has access to the vars and parameters
// of its outer function, even after the outer function has returned.

function OuterFunction() {
  var outerVariable = 1;

  function InnerFunction() {
    alert(outerVariable);
  }

  InnerFunction();
}

OuterFunction();
