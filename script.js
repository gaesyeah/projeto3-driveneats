function clickedFOOD(JS,JSC) {

    const x = document.querySelector('.food .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }
    const y = document.querySelector(JS);
    y.classList.add('selected');
//--------
    const w = document.querySelector('.food .check_selected')
    if (w !== null ) {
        w.classList.remove('check_selected')
    }
    const z = document.querySelector(JSC);
    z.classList.add('check_selected');

    
    const nameFD = document.querySelector('.food .selected .name').innerText;
    const priceFD = document.querySelector('.food .selected .price').innerText;
    const RpriceFD = priceFD.replace(',', '.');
    const NpriceFD = Number(RpriceFD.substr(3));
    const FpriceFD = NpriceFD.toFixed(2); //preço numero com ponto (FooD)

    const noR$priceFD = priceFD.substr(3); //preço string com virgula (FooD)
}


function clickedDRINK(JS,JSC) { 
    const x = document.querySelector('.drink .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }
    const y = document.querySelector(JS);
    y.classList.add('selected');
//--------
    const w = document.querySelector('.drink .check_selected');
    if (w !== null) {
        w.classList.remove('check_selected');
    }
    const z = document.querySelector(JSC);
    z.classList.add('check_selected');


    const nameDK = document.querySelector('.drink .selected .name').innerText;
    const priceDK = document.querySelector('.drink .selected .price').innerText;
    const RpriceDK = priceDK.replace(',', '.');
    const NpriceDK = Number(RpriceDK.substr(3));
    const FpriceDK = NpriceDK.toFixed(2); //preço numero com ponto (DrinK)

    const noR$priceDK = priceDK.substr(3); //preço string com virgula (DrinKv)
}


function clickedDESSERT(JS,JSC) { 
    const x = document.querySelector('.dessert .selected');
    if (x !== null) {
        x.classList.remove('selected');
    }
    const y = document.querySelector(JS);
    y.classList.add('selected');
//--------
    const w = document.querySelector('.dessert .check_selected')
    if (w !== null) {
        w.classList.remove('check_selected');
    }
    const z = document.querySelector(JSC);
    z.classList.add('check_selected');


    const nameDT = document.querySelector('.dessert .selected .name').innerText;
    const priceDT = document.querySelector('.dessert .selected .price').innerText;
    const RpriceDT = priceDT.replace(',', '.');
    const NpriceDT = Number(RpriceDT.substr(3));
    const FpriceDT = NpriceDT.toFixed(2); //preço numero com ponto (DesserT)

    const noR$priceDT = priceDT.substr(3); //preço string com virgula (DesserT)
}