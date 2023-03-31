function clickedFOOD(JS) { 

    const x = document.querySelector('.food .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');
    
}
function clickedDRINK(JS) { 

    const x = document.querySelector('.drink .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');
    
}
function clickedDESSERT(JS) { 

    const x = document.querySelector('.dessert .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }

    const y = document.querySelector(JS);
    y.classList.add('selected');
    
}