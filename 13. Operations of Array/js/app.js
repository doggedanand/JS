// Operations of Array

let book = ["Math", "Science", "Physics", "Computer", "Biology"]

// how to check array length
console.log(book.length);

// how to add another element in array
book.push("Hindi")
// push() function add in last and unshift() function add in first


// want to remove an element will use pop() function if we use two times this function it'll remove two elements from last

// (shift()) this function remove element from starting

// (splice()) this function remove the element from anywhere and it's expect two parameter but can give one as well

// want to empty array will use
book = [];   // now have done empty array
book.length = [];   // now have done empty array


// how to get the position of an element

let clanguage = ["Angular", "Javascript", "Python", "NodeJS", "MongoDB"]

let position = book.indexOf("Bio");

console.log(position);




// string is an character of Array
// how to know the this element is an Array or not
let codinglanguage = ["Angular", "Javascript", "Python", "NodeJS", "MongoDB"]

let str = "Angular"

console.log(Array.isArray(clanguage));
console.log(Array.isArray(str));



// how to convert a paragraph in Array
let text = "This is a random text";

let wordArray = text.split(' ');

// below line will work like where'll get s from there remover s and create an Array
// let wordArray=text.split('s');

console.log(wordArray);




// how we can convert an Array to paragraph. it'll work on an Array
let codinglanguages = ["Angular", "Javascript", "Python", "NodeJS", "MongoDB"]

let wordArrays = codinglanguage.join(' ');
console.log(wordArrays);




// how to add two Array and create one Array
let languages = ["Angular", "Javascript", "Python", "NodeJS", "MongoDB"]
let books = ["Math", "Science", "Physics", "Computer", "Biology"]

let all = languages.concat(books,languages);




// Multi dimensional array
// we should give meaning name to every variable
let book = ["Math", "Science", "Physics", "Computer", "Biology"]

 let bookWithPages=[
    ["Math","100"],
    ["Science, 250"],
    ["Computer","500"],
    ["Biology","1000"]
]

// want to print science 
bookWithPages[2][0]

let fetch = bookWithPages[2][0];
console.log(fetch);

// want to access whole array
bookWithPages[1]









// loop throw an array
let book = ["Math", "Science", "Physics", "Computer", "Biology"]
let bookLength= book.length;

for(i=0; i<bookLength; i++){
    console.log(`Element ${i} is ${book[i]} \n`)
}



// using foreach 
let book = ["Math", "Science", "Physics", "Computer", "Biology"]

book.forEach(myfu);

function myfu(value){
    console.log(value);
}