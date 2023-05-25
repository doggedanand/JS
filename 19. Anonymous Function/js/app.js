// Anonymous Function

// the function has not name called anonymous function






/*              // function has a name
function show(){
    console.log("Hello World!");
}

show();
*/





// function has no name this is the anonymous funtion we have assign a function in a variable 
let show = function () {
    console.log("Hello World!");
}

// function expression (above funtion is)

show();



// settimeout() want to execute the hello world after 3 sec

setTimeout(() => {
    show();
}, 3000);  
//or
setTimeout(show,3000);


// when we create a funtion javascript save in ram after that do execute but in anonymous funtion we create without name below will see
setTimeout(function(){
    console.log("Hello World");
},3000);

// this will work like above funtion