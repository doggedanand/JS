// Remove Child Element
// body is the parent of all element



let parent = document.getElementById("menu");
// let cloneElm=parent.cloneNode();                    // will clone only parent tag no all child 
let cloneElm=parent.cloneNode(true);  

// console.log(cloneElm);
document.body.appendChild(cloneElm);
cloneElm.id="mobile-menu";

