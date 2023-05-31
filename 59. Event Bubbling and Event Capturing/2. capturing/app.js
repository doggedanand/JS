let b = document.getElementById('btn');
let d = document.getElementById('myDiv');

b.addEventListener('click', btnClicked, true);
d.addEventListener('click', divClicked, true);
document.body.addEventListener('click', bodyClicked, true);

function btnClicked() {
    console.log('btn clicked...')
}

function divClicked() {
    console.log('div clicked...')
}

function bodyClicked() {
    console.log('body clicked...')
}