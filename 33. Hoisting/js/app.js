// Hoisting
// Hoisting means to lift or pull

// let's call a function without decleard




/*
hello();    
will get error hello is not defined
*/





function hello(){
    console.log("Hello World !");
}

hello();


// let's use the feature of hoisting how we can
// Hoisting is JavaScript's default behavior of moving declarations to the top.
hi();

function hi(){
    console.log("Hello Hoisting !");
}




var x ;                 //declearation
x=10;                   //assignment
console.log(x);         // called


/*
x=10;
console.log(x);
var x;
*/
// as we know hoisting hoisting behavior so in this case var x will move up and code will run properly






/*
console.log(x);
var x;
x=10;
*/

// will not run




// "strict mode" why we use in our script
// to avoid error we use strict mode in our script let's see the condition

/*
x=10;
console.log(x);
*/

// without decleartion can't use in strict mode