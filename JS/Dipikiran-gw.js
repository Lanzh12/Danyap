let number = document.getElementById('number-1');
let counter = 0;
setInterval(() => {
    if (counter == 8) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + '%';
    }
}, 200); {
    let numbers = document.getElementById('number-2');
    let counters = 0;
    setInterval(() => {
        if (counters == 30) {
            clearInterval();
        } else {
            counters += 1;
            numbers.innerHTML = counters + '%';
        }
    }, 110);
}

{
    let numbers = document.getElementById('number-3');
    let counters = 0;
    setInterval(() => {
        if (counters == 58) {
            clearInterval();
        } else {
            counters += 1;
            numbers.innerHTML = counters + '%';
        }
    }, 50);
}

{
    let numbers = document.getElementById('number-4');
    let counters = 0;
    setInterval(() => {
        if (counters == 20) {
            clearInterval();
        } else {
            counters += 1;
            numbers.innerHTML = counters + '%';
        }
    }, 150);
}

{
    let numbers = document.getElementById('number-5');
    let counters = 0;
    setInterval(() => {
        if (counters == 100) {
            clearInterval();
        } else {
            counters += 1;
            numbers.innerHTML = counters + '%';
        }
    }, 30);
}