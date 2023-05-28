// Create and Append Element
// The appendChild() method appends a node (element) as the last child of an element.




let elm = document.getElementById("p1");

let h1 = document.createElement("h1");

let text=   document.createTextNode("This is a heading tag created by Javascript.");

h1.appendChild(text);

elm.appendChild(h1);



// will learn about how to apply class using javascript using clasName property

h1.className= "container col-sm-3";
h1.id = "div1";





// want to add outside of h1 means in body

// document.body.appendChild(h1);










// using property that is (textContent)
// h1.textContent="This is a heading tag created by Javascript.";




// using textContent can change text and read also let's see how can read 
// suppose in p tag have an id will do like this
let paragraph = document.getElementById("id");
console.log(paragraph.textContent);
