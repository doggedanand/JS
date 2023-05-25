// Global variable vs Local variable

let car = "Audi";       // Global variable

function add(){
    let result = 33;        // Local variable
    console.log(result);
}

add();


//console.log(result);      // if i'll try to access local variable here can't access.
// if we talk about global variable we'll be able to access anywhere in program








function add(){
    let result=33;          // can create variable with same name because ram clear the variable after outside
    console.log(result);
}

function sub(){
    let result=50;          // can create variable with same name because ram clear the variable after outside
    console.log(result);
}


add();
sub();


// can use same name of variable in local variable but can't use in global