// let's see how we can select and element by tag name






let elm = document.getElementsByTagName("h1");
console.log(elm);

for (let i = 0; i < elm.length; i++) {
    elm[i].innerHTML = " heading changed ";
}

// elm.innerHTML = "<h1>hello </h1>"


// can select two class also

// want to change few selected inside the div h1 
/*
let div1=document.getElementById("div1");
let element= div1.getElementById("h1");
*/