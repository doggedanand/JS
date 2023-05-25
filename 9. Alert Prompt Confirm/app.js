// alert


// alert('Welcome !');

// prompt('Enter your age');





/*
let age = prompt('Enter you age !')
if (age != null) {
    document.write(`Your age is ${age}`);
} else {
    document.write(`Age field was blank`);
}
*/





let response = confirm("Are you sure want to delete!");
if(response){
    document.write("Deleted")
}else{
    document.write("Not Deleted")
}