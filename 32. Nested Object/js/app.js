// Nested Object
// nested object means object inside the object let's see how we can

var user={
    id:101,
    email:"abc@gmail.com",
    personalInfo:{
        name:"abc",
        address:{
            street:"Jalalabad",
            city:"Ghazipur",
            country:"India"
        }
    }
};

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);




// above things comes in nested object