// let's see how we can select and element by class name






let elm = document.getElementsByClassName("cl");
// console.log(elm);

for (let i = 0; i < elm.length; i++) {
    elm[i].innerHTML = "<h1> hello </h1>";
}

// elm.innerHTML = "<h1>hello </h1>"


// can select two class also