function clickedFOOD(JS) { 

    const x = document.querySelector('.food .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');

    const nameFD = document.querySelector('.food .selected .name').innerText;
    const priceFD = document.querySelector('.food .selected .price').innerText;
    const NpriceFD = Number(infoPRICE.substr(3));
}
function clickedDRINK(JS) { 

    const x = document.querySelector('.drink .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');

    const nameDK = document.querySelector('.drink .selected .name').innerText;
    const priceDK = document.querySelector('.drink .selected .price').innerText;
    const NpriceDK = Number(infoPRICE.substr(3));
}
function clickedDESSERT(JS) { 

    const x = document.querySelector('.dessert .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');

    const nameDT = document.querySelector('.dessert .selected .name').innerText;
    const priceDT = document.querySelector('.dessert .selected .price').innerText;
    const NpriceDT = Number(infoPRICE.substr(3));
}