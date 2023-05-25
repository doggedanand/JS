// will learn use of break

// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 5) {
//         // break;
//         continue;
//     }
//     document.write(counter);
//     document.write('</br>')

// }




// nested loop
// for (let counter = 1; counter <= 10; counter++) {

//     document.write(counter);
//     document.write('</br>');

//     for (let counter2 = 1; counter2 <= 2; counter2++) {
//         document.write("TechGun");
//         document.write('</br>');
//     }

// }





// for (let counter = 1; counter <= 10; counter++) {

//     document.write(counter);
//     document.write('</br>');

//     for (let counter2 = 1; counter2 <= 2; counter2++) {
//         if(counter==3){
//             break;
//         }
//         document.write("TechGun");
//         document.write('</br>');
//     }

// }




outer:for (let counter = 1; counter <= 10; counter++) {

    document.write(counter);
    document.write('</br>');

    for (let counter2 = 1; counter2 <= 2; counter2++) {
        if(counter==3){
            break outer;
        }
        document.write("TechGun");
        document.write('</br>');
    }

}