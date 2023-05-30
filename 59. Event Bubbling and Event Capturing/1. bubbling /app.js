let b = document.getElementById('btn');
let d = document.getElementById('myDiv');

b.addEventListener('click', btnClicked);
d.addEventListener('click', divClicked);
document.body.addEventListener('click', bodyClicked);

function btnClicked() {
    console.log('btn clicked...')
}

function divClicked() {
    console.log('div clicked...')
}

function bodyClicked() {
    console.log('body clicked...')
}