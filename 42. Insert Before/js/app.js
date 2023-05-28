// Insert Before





let listone = document.getElementById("list");

let item = document.createElement("li");

item.textContent = "new list ";

let pos=listone.firstElementChild;

// want to add next li what will do will use .nextElementSibling

// let pos=listone.firstElementChild.nextElementSibling;
// let pos=listone.firstElementChild.nextElementSibling.nextElementSibling;
// let pos=listone.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

listone.insertBefore(item,pos);








// want to add before ul in this case out parent would be body (see in app.html file)






// listone.appendChild(item);