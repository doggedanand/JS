// Traversing elements




let elm = document.getElementById("intro");
let prt = elm.parentElement;
prt.innerHTML = "Parent element changed";



// select first child element 
let elmm = document.getElementById("intro1");
let firstChild = elmm.firstElementChild;
let lastChild = elmm.lastElementChild;

// if will use elm.children it'll select all children li
let childs = elmm.children;
console.log(childs);




// how to select siblings
elmm.previousElementSibling;
elmm.nextElementSibling;


