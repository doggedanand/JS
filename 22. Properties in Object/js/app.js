// Object 


// let's create a perosn object
let person = {
    firstName: 'vishwajeet',
    lastName: 'kumar'
};
console.log(person);


// in two ways can access the object firstone is dot notation like (person.firstName) secondone is array notaion

// dot notation
console.log(person.firstName);
console.log(person.lastName);

// array notation
console.log(person['firstName']);
console.log(person['lastName']);

// if will do like this in this situation only array notaiton will work do notation won't work
let persons = {
    "first Name": 'vishwajeet',
    "last Name": 'kumar'
};



// can modify the properties like (person.firstName="jeet")
person.firstName="jeet";
person.lastName="singh";


// can create new properties in same object like this(person.age=20)
person.age=18;
person.address="Jalalabad";

// want to delete a properties like (delete person.lastName)
delete person.lastName;

// want to check propertie is assigned or not how we can do 
// in operator returns either true or false
console.log("age" in person);

// how to know the all properties in object means we'll itterate
for(let key in person){
    console.log(key);
    console.log(key+ ":"+ person[key]);
}
