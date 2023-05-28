// Date Object

let x = new Date();             // it'll store the date in x of our browser 
console.log(x);






// want to another date
// maximum parameter would be seven
let anoterDate = new Date(2018, 11, 13, 10, 33, 56, 7);                    // year, month, date, hour, minute, second, milisecond   (can remove the parameter also, the place of removed paramter valuse would be 0 but atleast two parameter is must)
console.log(anoterDate);





// can pass the parameter as string formate also
let anoterDates = new Date("October 13, 2018 11:12:33");
console.log(anoterDates);


// there are many pre defice formate that can pass as string formate that is the acceptable 



// computer date start from (Janurary 1, 1970 ) and computer store the date and time in milisecond let's see how
let milisecond = new Date("October 13, 2018 11:12:33");

console.log("time in milisecond" + " " + milisecond.getTime());
console.log("in milisecond" + " " + milisecond.getFullYear());
console.log("in milisecond" + " " + milisecond.getDate());
console.log("in milisecond" + " " + milisecond.getMonth());               //months stats from 0 to 11 that means 0 is Januray and 11 is December
console.log("in milisecond" + " " + milisecond.getDay());                 // days starts from 0 to 6 means 0 is sunday and 6 is saturday
// will show in milisecond










// we have seen the get function in below will see the set function
// set function won't work directly in console
let setDate = new Date("October 13, 2018 11:12:33");
setDate.setDate(15);
setDate.setMonth(11);
console.log(setDate);









// someone gives a date and ask 50 days after which date will be let's see
let a = new Date("October 13, 2018 11:12:33");
let b = new Date("October 13, 2018 11:12:33");
b.setDate(a.getDate()+50);
console.log(a);
console.log(b);
// like above we have seen how to change the date we can also change the month, year, date








// let's see how to compare the date
let ab = new Date("October 13, 2018 11:12:33");
let bb = new Date();

if(bb>ab){
    console.log("ab is passed date");
}else if(ab>bb){
    console.log("ab is future date")
}else{
    console.log("same date")
}



