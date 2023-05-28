// Methods in Object

let person = {
    firstName:"vishwajeet",
    lastName:"kumar"
};

person.age=21;


// here are four ways to create method let's see

person.sayHello()=function(){                   // have create anonymous function
    console.log("Hello");
}

person.sayHello();








// second  way

// person.sayHello()=function(){                    
//     console.log("Hello");
// }

function greet(){
    console.log("Hello !");

}
person.sayHello=greet();            // created the method

person.sayHello();










// third way 
let person = {
    firstName:"vishwajeet",
    lastName:"kumar",
    sayHello:function(){
        console.log("Hello !")
    }
};
// will work like same...







// fourth way it came in ES6
let person = {
    firstName:"vishwajeet",
    lastName:"kumar",
    sayHello(){
        console.log("Hello !")
    }
};
