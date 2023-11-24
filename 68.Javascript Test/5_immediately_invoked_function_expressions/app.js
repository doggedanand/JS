// ==== Question 5 Immediately Invoked Function Expression (IIFE) ====

// What is an IIFE, and why might you use it in Javascript?
// Provide an example of an IIFE.

// It helps to create a private scope for your variables, preventing 
// them from polluting the global scope. This is particularly useful to avoid naming conflicts in larger projects.

(function () {
  var message = "Hello there !!!";
  console.log(message);
})();
