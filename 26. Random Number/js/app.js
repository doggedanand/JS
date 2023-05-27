// Random Number
// we have saw in ludo all time get another number so that type of situation where can use the random number so in this method we will also use the math method that will be Math.random()


let randomNumber= Math.random();   // A random whole number between 0 and - 1 when will refresh browser all time get new number
console.log(randomNumber);
 


// how to make useful to this
// want to generate number from 0 to 9
let x= Math.floor(Math.random()*10); 
console.log(x);







// want to generate number from 0 to 100 then what we can do 
/*
let x= Math.floor(Math.random()*101); 
console.log(x);
*/




// want to generate number from 1 to 10 then what we can do 
let xy= Math.floor(Math.random()*10)+1; 
console.log(xy);







// want to generate number from 15 to 25
function getRandomNumber(min,max){
    let x = Math.floor(Math.random()*(max-min))+min;
    return x;
}

console.log(getRandomNumber(10,20));



// want to include min and max both then

/*

function getRandomNumber(min,max){
    let x = Math.floor(Math.random()*(max-min+1))+min;
    return x;
}

console.log(getRandomNumber(10,20));

*/