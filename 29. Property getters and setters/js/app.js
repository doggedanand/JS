// Property getters and setters

var person = {
    name: "vishwajeet",
    age: 25,

    // getname:function(){
    //     return this.name.toUpperCase();

    // }

    get getname() {
        return this.name.toUpperCase();
    }
}

console.log(person.getname);




// how to set a properties name in uppercase no matter what property name is

var persons = {
    name: "vishwajeet",
    age: 25,



    set setname(n) {
        this.name = n.toUpperCase();
    }
};

persons.setname = "ajit";
console.log(persons);