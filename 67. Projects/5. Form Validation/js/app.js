
let username = document.getElementById('username')
let password = document.getElementById('password')
let flag = 1;



// this function will stop to user can't submit without fill the proper data according to validation
function validateForm() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "User name is Empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User Name required min 3 char";
        flag = 0;
    } else {

        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById('passError').innerHTML = "Password is Empty"
        flag = 0;
    } else {
        document.getElementById('passError').innerHTML = "";
        flag = 1;
    }
    return false;
}