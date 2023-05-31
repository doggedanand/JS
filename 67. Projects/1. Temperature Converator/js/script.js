var cel = document.getElementById('cel');

var fah = document.getElementById('fah');

// this function will calculate in celsius 
cel.addEventListener('input', function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(1);
    }
    fah.value = f;
});


// this function will claculte in fahrenheit
fah.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    if (!Number.isInteger(c)) {
        c = c.toFixed();
    }
    cel.value = c;
});

