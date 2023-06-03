let nav = document.getElementById('menu-bar');   // have selected the nav by id




// this function will stop the navbar in paticular distance when limit 265 cross
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset >= 265) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
})