// let's see how to return a value in function

function add(a, b) {
    a + b;

    console.log("suim ho ghya");
}

let d = add(5, 6);

document.write(d);
document.write("<br>")




function addtwo(a, b) {
    return a + b;
}

let c = addtwo(5, 6);

document.write(c);











function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

let result = compare(6, 6);

document.write(c);