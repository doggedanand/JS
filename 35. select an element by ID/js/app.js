// let's see how we can select and element by id

let elm=document.getElementById("first");                     
console.log(elm);
// if id would be wrong will get output null



// (innerHtml) The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// get value
console.log(elm.innerHTML)





// set value
elm.innerHTML="<h1>hello </h1>"