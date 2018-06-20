let vetoresExodia = ["cabeca.jpg", "braco-direito.jpg", "braco-esquerdo.png", "perna-direita.jpg", "perna-esquerda.jpg",
"cabeca.jpg", "braco-direito.jpg", "braco-esquerdo.png", "perna-direita.jpg", "perna-esquerda.jpg"];
const cartas = document.querySelectorAll(".quadradinho");
const vetorPosicaoCarta = [];

let index;

// function numeroAleatorio(min, max){
//     return indice = Math.floor(Math.random()* (max-min+1)) + min;
// }

// function exodiaAleatorio() { 
//     for (let i = 0; i < cartas.length; i++){
//         let num = numeroAleatorio(0,vetoresExodia.length-1);
//         vetorPosicaoCarta[i] = vetoresExodia[num];
          
//     }
// }

function virarCarta1(){
    cartas[0].style.backgroundImage = `url(cabeca.jpg)`;
    compararCartas(0);
}
function virarCarta2(){
    cartas[1].style.backgroundImage = `url(braco-direito.jpg)`;
    compararCartas(1);
    
}
function virarCarta3(){
    cartas[2].style.backgroundImage = `url(perna-direita.jpg)`;
    compararCartas(2);
    
}
function virarCarta4(){
    cartas[3].style.backgroundImage = `url(cabeca.jpg)`;
    compararCartas(3);
}
function virarCarta5(){
    cartas[4].style.backgroundImage = `url(perna-esquerda.jpg)`;
    compararCartas(4);
    
}
function virarCarta6(){
    cartas[5].style.backgroundImage = `url(braco-esquerdo.png)`;
    compararCartas(5);
    
}
function virarCarta7(){
    cartas[6].style.backgroundImage = `url(perna-direita.jpg)`;
    compararCartas(6);
    
}
function virarCarta8(){
    cartas[7].style.backgroundImage = `url(braco-esquerdo.png)`;
    compararCartas(7);
    
}
function virarCarta9(){
    cartas[8].style.backgroundImage = `url(perna-esquerda.jpg)`;
    compararCartas(8);
    
}
function virarCarta10(){
    compararCartas(9);
    cartas[9].style.backgroundImage = `url(braco-direito.jpg)`;
    
}

let cartasViradas = [];
let index;
function compararCartas (cartaSel){
    
    if (index === 0)
        cartasViradas[0] = cartas[cartaSel];

    else if (index === 1)
        cartasViradas[1] = cartas[cartaSel];    
    index++;
    
    console.log(cartasViradas);

    if(cartaSel === 2){
        if(cartasViradas[0].style.backgroundImage === cartasViradas[1].style.backgroundImage){
            alert("Correto");
        }
        else{
            cartasViradas[0].style.backgroundImage = "url(yugioh.jpg)";
            cartasViradas[1].style.backgroundImage = "url(yugioh.jpg)";

        }
    }
}


    cartas[0].onclick = virarCarta1;
    cartas[1].onclick = virarCarta2;
    cartas[2].onclick = virarCarta3;
    cartas[3].onclick = virarCarta4;
    cartas[4].onclick = virarCarta5;
    cartas[5].onclick = virarCarta6;
    cartas[6].onclick = virarCarta7;
    cartas[7].onclick = virarCarta8;
    cartas[8].onclick = virarCarta9;
    cartas[9].onclick = virarCarta10;

    