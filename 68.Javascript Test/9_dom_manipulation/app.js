// ==== Question 9 DOM Manipulation ====

// Explain how to manipulate the DOM in JavaScript without using jQuery. Provide an example of
// adding an element to the DOM dynamically.

var newElement = document.createElement("p");

newElement.textContent = "This element was added dynamically!";

var existingContainer = document.getElementById("existingContent");

existingContainer.appendChild(newElement);
