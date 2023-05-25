// if input =1, "y", "yes" output= continue...
// if input=0, "n", "no" output= End...



// using if statement 

let input;
input = "";
if (input === 1) {
    document.write("continue...")
} else if (input === "y") {
    document.write("continue...")
} else if (input === "yes") {
    document.write("continue...")
} else if (input === 0) {
    document.write("end...")
} else if (input === "n") {
    document.write("end...")
} else if (input === "no") {
    document.write("end...")
} else {
    document.write("Wrong input")
}

// switch do ===comparision 

switch (input) {
    case 1: // if(input===1)
        document.write("continue...")

        break;
    case "y":
        document.write("continue...")
        break;
    case "yes":
        document.write("continue...")
        break;
    case "0":
        document.write("end...")
        break;
    case "n":
        document.write("end...")
        break;
    case "no":
        document.write("end...")
        break;
        default:
            document.write("Wrong input")
}