const btnIniciar = document.getElementById("iniciar");
const optTipo = document.getElementsByName("tipo");

let jogador = "X"; 
let parar = false; //para o jogo
let cont=0; //contar a jogadas realizadas
const btn = [];
for (let i=0;i<=8;i++){
    btn[i] = document.getElementById("b"+ i);
    btn[i].addEventListener ('click',function () {
            if (btn[i].value == "" && !parar){
                let nivel = document.querySelector('input[name="nivel"]:checked');
                btn[i].value = jogador;
                verificarGanhador (btn) ;
            }
    });
}

const verificarGanhador = function (vet) {

    let ganhador = quemGanhou(btn);
    if (ganhador.length == 3){
        vet[ganhador[0]].style.backgroundColor = "red";
        vet[ganhador[1]].style.backgroundColor = "red";
        vet[ganhador[2]].style.backgroundColor = "red";
        parar = true; 
    }else {
        if (cont < 8 ){
            jogador =  jogador == "O"? "X":"O";
        }else {
            alert ("Deu velha!!!")
        }
    }
}

btnIniciar.addEventListener('click',function(){
    window.location.reload();
})

const quemGanhou = function (vet){
    let posicoes = [];
    //horizontal
    for (let i=0;i<9;i+=3){
        if (vet[i].value == jogador && vet[i].value == vet[i+1].value && vet[i+1].value == vet[i+2].value) {
            posicoes = [i,i+1,i+2];
        }
    }
    //vertical
    for (let i=0;i<3;i++){
        if (vet[i].value == jogador && vet[i].value == vet[i+3].value && vet[i+3].value == vet[i+6].value) {
            posicoes = [i,i+3,i+6];
        }
    }
    //diagonais
    if (vet[0].value == jogador && vet[0].value == vet[4].value && vet[4].value == vet[8].value) {
        posicoes = [0,4,8];
    }
    if (vet[2].value == jogador && vet[2].value == vet[4].value && vet[4].value == vet[6].value) {
        posicoes = [2,4,6];
    }

    return posicoes;
}


const jogada = function(j,n){
/*  Função que determina quem e como acontecerá a jogada
    j = quem está jogando
    n = nível
*/


}

function aleatorios (min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min );
}