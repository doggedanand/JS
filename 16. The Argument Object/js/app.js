// will learn argument array in this file

/*
function add(){
    console.log(arguments.length);  
    console.log(arguments);

}

add(1,1);
add(1,1,3);
add(1,1,4);

*/









/*
function add(){
    console.log(arguments[2]);
    console.log(arguments[3]);

}


add(1,1,4);
*/








function add(){
    if(arguments.length==0){
        console.log("No argument passed !");
    }else{
        let sum=0;
        for(let i=0; i<arguments.length;i++){
            sum=sum+arguments[i];
        }
        console.log(sum);
    }
}


// add();
add(5,2,4);

// will call with new function first create
let addition=add;
addition(1,6,7,8);
