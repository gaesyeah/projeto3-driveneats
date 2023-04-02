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

let nome = '';
let endereco = '';
let numero = '';
//-------------------
let contador = 2;
//------------------------------------------------------------
function ENABLE() {
    if (_FDname !== '') {
        if (_DKname !== '') {
            if (_DTname !== '') {
                const x = document.querySelector('.button');
                x.classList.add('BTgreen');
                x.innerHTML = "Fechar Pedido";
                document.querySelector('.true_button').disabled = false;
                x.classList.add('hover');
                
                
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
                reais = String((_FD_DK_DT).toFixed(2));
                reais = "R$ " + reais.replace('.', ',');
                console.log(reais);

                //----------------------------------------------
                /*adiciona os nomes e preços na "confirm screen"*/
                const FDname = document.querySelector('.FDname');
                FDname.innerHTML = _FDname;
                const FDprice = document.querySelector('.FDprice');
                FDprice.innerHTML = _FDnoR$price;
                //--------
                const DKname = document.querySelector('.DKname');
                DKname.innerHTML = _DKname;
                const DKprice = document.querySelector('.DKprice');
                DKprice.innerHTML = _DKnoR$price;
                //--------
                const DTname = document.querySelector('.DTname');
                DTname.innerHTML = _DTname;
                const DTprice = document.querySelector('.DTprice');
                DTprice.innerHTML = _DTnoR$price;

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

    nome = prompt('Qual o seu nome?');
    endereco = prompt('Qual o seu endereço?');

    /*fiz um contador para esconder o botão quando a confirm screen está ativa*/
    contador = contador  + 1;
    const resto = contador % 2;
    if(resto === 1){
        const x = document.querySelector('.bottom_bar_fixed');
        x.classList.toggle('hide_screen');
        const y = document.querySelector('.full_page');
        y.classList.toggle('NObar_full_page');
    }
}
//--------
const buttonedEXIT = document.querySelector('.true_button2');
buttonedEXIT.addEventListener('click' ,buttonedEXITFUNC);

function buttonedEXITFUNC () {
    const hide = document.querySelector('.confirm_screen');
    hide.classList.toggle('hide_screen');

    /*fiz um contador para esconder o botão quando a confirm screen está ativa*/
    contador = contador  + 1;
    const resto = contador % 2;
    if(resto !== 1){
        const x = document.querySelector('.bottom_bar_fixed');
        x.classList.toggle('hide_screen');
        const y = document.querySelector('.full_page');
        y.classList.toggle('NObar_full_page');
    }
}

const buttonedCONFIRM = document.querySelector('.true_button1');
buttonedCONFIRM.addEventListener('click', buttonedCONFIRMFUNC);

function buttonedCONFIRMFUNC () {
    
    const hide = document.querySelector('.confirm_screen');
    hide.classList.toggle('hide_screen');
    
    /*fiz um contador para esconder o botão quando a confirm screen está ativa*/
    contador = contador  + 1;
    const resto = contador % 2;
    if(resto !== 1){
        const x = document.querySelector('.bottom_bar_fixed');
        x.classList.toggle('hide_screen');
        const y = document.querySelector('.full_page');
        y.classList.toggle('NObar_full_page');
    }
    
    let zap_text = "https://wa.me/77981343070?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${_FDname}\n- Bebida: ${_DKname}\n- Sobremesa : ${_DTname}\nTotal: ${reais}\n\nNome: ${nome}\nEndereço: ${endereco}`);
    console.log(zap_text);

    window.open(zap_text);
    /*-------------------------------------------------------*/
    /*REMOVE AS CAIXAS MARCADAS PARA SER FEITO UM NOVO PEDIDO*/
    const desmarcaFD = document.querySelector('.food .selected');
    desmarcaFD.classList.remove('selected');
    _FDname = '';
    _FDnoR$price = '';
    _FDprice = 0;
    const desmarcaFDcheck = document.querySelector('.food .check_selected')
    desmarcaFDcheck.classList.remove('check_selected')

    const desmarcaDK = document.querySelector('.drink .selected');
    desmarcaDK.classList.remove('selected');
    _DKname = '';
    _DKnoR$price = '';
    _DKprice = 0;
    const desmarcaDKcheck = document.querySelector('.drink .check_selected')
    desmarcaDKcheck.classList.remove('check_selected')

    const desmarcaDT = document.querySelector('.dessert .selected');
    desmarcaDT.classList.remove('selected');
    _DTname = '';
    _DTnoR$price = '';
    _DTprice = 0;
    const desmarcaDTcheck = document.querySelector('.dessert .check_selected')
    desmarcaDTcheck.classList.remove('check_selected')

    if (_FDname == '' || _DKname == '' || _DTname == '') {
        const q = document.querySelector('.button');
        q.classList.remove('BTgreen');
        q.innerHTML = "Confirme seu pedido";
        document.querySelector('.true_button').disabled = true;
        q.classList.remove('hover');   
    }
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


function clickedDESSERT(JS, JSC) { 

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