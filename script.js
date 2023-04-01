let _FDname = ''; //nome
let _FDnoR$price = ''; //preço STRING com virgula (FooD)
let _FDprice = 0;

let _DKname = ''; //nome
let _DKnoR$price  =''; //preço STRING com virgula (DrinK)
let _DKprice = 0;

let _DTname = ''; //nome
let _DTnoR$price = ''; //preço STRING com virgula (DesserT)
let _DTprice = 0;

let _FD_DK_DT = 0;
let reais = '';
//------------------------------------------------------------
function ENABLE() {
    if (_FDname !== '') {
        if (_DKname !== '') {
            if (_DTname !== '') {
                const x = document.querySelector('.button');
                x.classList.add('BTgreen');
                x.innerHTML = "Fechar Pedido!"
                document.querySelector('.true_button').disabled = false;
                
                _FDprice = document.querySelector('.food .selected .price').innerText;
                _FDnoR$price = _FDprice.substr(3);
                _FDprice = _FDnoR$price.replace(',', '.');
                console.log(_FDname);
                console.log(_FDnoR$price);

                _DKprice = document.querySelector('.drink .selected .price').innerText;
                _DKnoR$price = _DKprice.substr(3);
                _DKprice = _DKnoR$price.replace(',', '.');
                console.log(_DKname);
                console.log(_DKnoR$price);

                _DTprice = document.querySelector('.dessert .selected .price').innerText;
                _DTnoR$price = _DTprice.substr(3);
                _DTprice = _DTnoR$price.replace(',', '.');
                console.log(_DTname);
                console.log(_DTnoR$price);
                //--------
                _FD_DK_DT = (Number(_FDprice) + Number(_DKprice) + Number(_DTprice)).toFixed(1);
                _FD_DK_DT = Number(_FD_DK_DT);
                console.log(_FD_DK_DT);
                reais = String(_FD_DK_DT);
                reais = "R$ " + reais.replace('.', ',') + "0";
                console.log(reais);

                //----------------------------------------------

                const FDname = document.querySelector('.FDname');
                FDname.innerHTML = _FDname;
                const FDprice = document.querySelector('.FDprice');
                FDprice.innerHTML = _FDnoR$price;

                //--------
                const _FD_DK_DTname = document.querySelector('.total_price');
                _FD_DK_DTname.innerHTML = reais;
            }
        }
    }
}
//------------------------------------------------------------
const buttoned = document.querySelector('.true_button');
buttoned.addEventListener('click', buttonedFUNC);

function buttonedFUNC() {
    const DEShide = document.querySelector('.confirm_screen');
    DEShide.classList.toggle('hide_screen');
    
    /*if (DEShide !== '.hide_screen') {
        document.querySelector('.true_button').disabled = true;
    } else {
        document.querySelector('.true_button').disabled = false;
    }*/
}
//--------
const buttonedEXIT = document.querySelector('.true_button2');
buttonedEXIT.addEventListener('click' ,buttonedEXITFUNC);

function buttonedEXITFUNC () {
    const hide = document.querySelector('.confirm_screen');
    hide.classList.toggle('hide_screen');
}

//------------------------------------------------------------
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

    _FDname = document.querySelector('.food .selected .name').innerText;
    ENABLE();
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

    _DKname = document.querySelector('.drink .selected .name').innerText;
    ENABLE();
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

    _DTname = document.querySelector('.dessert .selected .name').innerText;
    ENABLE();
}