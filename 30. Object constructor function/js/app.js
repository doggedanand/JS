// Object constructor function
// why we need
// before ES6 people use object cunstructor after ES6 use class


/*
var student = {
    firstName: "vishwajeet",
    lastName: "kumar",
    age: 25,
    class: 5
}

var student = {
    firstName: "ajit",
    lastName: "kumar",
    age: 21,
    class: 6
}
*/




// using obejct cunstructor let's see how can create 
// when create object constructor we should make the first name capital letter

function Student(first, last, age, cls) {
    this.firstName= first;
    this.lastName=last;
    this.age=age;
    this.class=cls;


    // can add here also
    
    // student1.name=function(){
    //     return this.firstName+ " " + this.lastName
    // }
    
}

var student1=new Student( "vishwajeet","kumar",25,5);
var student2=new Student( "ajit","kumar",25,5);
var student3=new Student( "sujit","kumar",25,5);


// can add property like this
student1.nationality="Indian"

console.log(student1);



// can add method like this
student1.name=function(){
    return this.firstName+ " " + this.lastName
}

console.log(student1.name());