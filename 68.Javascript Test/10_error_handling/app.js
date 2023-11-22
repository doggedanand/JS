// ==== Question 10 Error Handling ====

// Describe the concept of Error Handling in Javascript. Provide an example of how to use 'try',
// 'catch' and 'finally' for error handling.

// try: You put the code that might have an issue inside this block.
// catch: If there's an issue in the try block, this block catches and handles it.
// finally: This block always runs, whether there's an issue or not. It's used for cleanup tasks.

try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error("An error occurred: " + error.message);
} finally {
  console.log("Finally block executed");
}
