// functions predefince and userdefine
// we have already user alert() function

/*
for(i=1; i<=10; i++){
    document.write(`2 x ${i} = ${i*2}`);
    document.write('<br>');
}
*/


/*
function mulTable(){
    for(i=1; i<=10; i++){
        document.write(`2 x ${i} = ${i*2}`);
        document.write('<br>');
    }
}



mulTable();

document.write("Hello <br>");

mulTable();
*/



// parameter and argument

function mulTable(num){
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write('<br>');
    }
}


mulTable(10);

document.write("Hello <br>");

mulTable(20);


// will create a fucntion with two argument 
function add(num1, num2){
    document.write(num1+num2);
}

add(5,11)