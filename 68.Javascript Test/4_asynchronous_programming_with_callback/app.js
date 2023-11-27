// ==== Question 4 Asynchronous Programming with Callbacks ====

// Explain the concept of asynchronous programming with callbacks. Provide an example
// of handling asynchronous operations using callbacks.

// Prototype inheritance in javascript is the linking of prototypes of a parent object to a child
// object to share and utilize the properties of a parent class using a child class.

function login(callback) {
  setTimeout(() => {
    console.log("User LoggedIn!");
    callback();
  }, 3000);
}

function userDashboard(callback) {
  setTimeout(() => {
    console.log("User Dashboard!");
    callback();
  }, 5000);
}

function userLogout() {
  setTimeout(() => {
    console.log("User LoggedOut!");
  }, 1000);
}

function userSignUp(callback) {
  console.log("Process Start...");
  setTimeout(() => {
    console.log("User SignedUp!");
  }, 1000);
  callback();
}

userSignUp(function () {

  login(function () {

    userDashboard(function () {
        
      userLogout();
    });
  });
});
