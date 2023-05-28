// this keyword in Object 

let person = {
    firstName:"vishwajeet",
    lastName:"kumar",
    sayHello(){
        console.log("Hello ! I'm" +" "+ person.firstName +" "+ "and i have a"+" "+ car.brand +" "+"car");
        document.log("Hello ! I'm" +" "+ this.firstName +" "+ "and i have a"+" "+ car.brand+" "+"car");
    }
};


let car= {
    brand:"Tata",
    model:"Safari"
}

person.sayHello();
