// Remplace Element
 



let parent = document.getElementById("menu");
 
let item=document.createElement("li");

item.textContent="Services";

let replace=parent.firstElementChild.nextElementSibling;

parent.replaceChild(item,replace);