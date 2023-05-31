let b = document.getElementById('btn');
let d = document.getElementById('myDiv');

b.addEventListener('click', btnClicked, true);
d.addEventListener('click', divClicked, true);
document.body.addEventListener('click', bodyClicked, true);

function btnClicked(event) {
    console.log('btn clicked...')
    event.stopPropagation();
}

function divClicked(event) {
    console.log('div clicked...');
    event.stopPropagation();

}

function bodyClicked(event) {
    console.log('body clicked...');
    event.stopPropagation();

}