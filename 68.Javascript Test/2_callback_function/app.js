
// ==== Question 2 Callback Functions ====

// What is a callback funtion in JavaScript? Provide an example of a situation where a callback
// function is commonly used.

// A callback function is simply a function that is passed into another function as an argument,
// which is then triggered when the other function is executed.

function greetings(username) {
  alert("Welcome " + username);
}

function saveUserName(callback) {
  var name = prompt("Please enter your username.");
  callback(name);
}

saveUserName(greetings);

 
