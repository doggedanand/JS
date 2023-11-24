// ==== Question 6 Callback Hell ====

// What is Callback Hell in Javascript? and how can you mitigate it ?
// Provide an example of nested callback.

// The callback hell in JavaScript is referred to as a situation where an excessive amount
// of nested callback functions are being executed. It reduces code readability and maintenance.

console.log("Start");

setTimeout(() => {
  console.log("Callback 1");

  setTimeout(() => {
    console.log("Callback 2");

    setTimeout(() => {
      console.log("Callback 3");
    }, 1000);
  }, 1000);
}, 1000);

console.log("End");


