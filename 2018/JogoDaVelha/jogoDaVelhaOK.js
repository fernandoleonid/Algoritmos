const rdoTipo = document.getElementsByName('tipo');
const rdoNivel = document.getElementsByName('nivel');
const gNivel = document.getElementById('gNivel');
const gTipo = document.getElementById('gTipo');
const btnNovo = document.getElementById("novo");
let jogador = "X";
let parar = false;
let cont = 0;

rdoTipo[0].addEventListener('click',function(){
    gNivel.disabled = true;
})

rdoTipo[1].addEventListener('click',function(){
    gNivel.disabled = false;
})

btnNovo.addEventListener('click',function(){
    window.location.reload();
})

const btn = [];
for (let i=0;i<=8;i++){
    btn[i] = document.getElementById("b"+ i);
    btn[i].addEventListener ('click',function () {
        if (rdoTipo[0].checked || rdoTipo[1].checked ) {
            gTipo.disabled = true;
            gNivel.disabled = true;
            
            jogar(i);

        }else{
            alert ("Escolha um tipo de jogo!!!")
        }
    });
}

const jogar = (pos) =>{
    
    if (rdoTipo[0].checked){
        btn[pos].value = jogador;
        btn[pos].disabled = true;
        verificarGanhador()
        jogador = jogador == "X" ? "O" : "X";
    }else {
        if (rdoNivel[0].checked || rdoNivel[1].checked || rdoNivel[2].checked){
            btn[pos].value = jogador;
            btn[pos].disabled = true;
            verificarGanhador()
            jogador = jogador == "X" ? "O" : "X";
            cont++
            //Maquina jogando
            if (cont < 9 && !parar) {
                while (btn[pos].disabled ) {
                    pos = IA();
                    console.log (pos);
                }
                btn[pos].value = jogador;
                btn[pos].disabled = true;
                verificarGanhador();
                jogador = jogador == "X" ? "O" : "X";
                cont++
            }
        }else{
            alert ("Escolha o nível!!!")
        }
    }
    
}

const IA = () => {

    if(rdoNivel[1].checked){
        if (cont >=3){
            //verifica as horizontais
            for (let i=0;i<9;i+=3){                
                if (btn[i].value == "X" && btn[i+1].value == "X" && btn[i+2].value == "" ) {
                    return i+2;
                }else if (btn[i].value == "X" && btn[i+2].value == "X" && btn[i+1].value == "" ) {
                    return i+1;
                }else if (btn[i+1].value == "X" && btn[i+2].value == "X" && btn[i].value == "" ) {
                    return i;
                }
            }
            //verifica as verticais
            for (let i=0;i<3;i++){                
                if (btn[i].value == "X" && btn[i+3].value == "X" && btn[i+6].value == "" ) {
                    return i+6;
                }else if (btn[i].value == "X" && btn[i+6].value == "X" && btn[i+3].value == "" ) {
                    return i+3;
                }else if (btn[i+3].value == "X" && btn[i+6].value == "X" && btn[i].value == "" ) {
                    return i;
                }
            }
            //verifica a diagonal 0
            if (btn[0].value == "X" && btn[4].value == "X" && btn[8].value == "" ) {
                return 8;
            }else if (btn[4].value == "X" && btn[8].value == "X" && btn[0].value == "" ) {
                return 0;
            }else if (btn[8].value == "X" && btn[0].value == "X" && btn[4].value == "" ) {
                return 4;
            }
            //verifica a diagonal 2
            if (btn[2].value == "X" && btn[4].value == "X" && btn[6].value == "" ) {
                return 6;
            }else if (btn[4].value == "X" && btn[6].value == "X" && btn[2].value == "" ) {
                return 2;
            }else if (btn[6].value == "X" && btn[2].value == "X" && btn[4].value == "" ) {
                return 4;
            }
        }
    }

    return aleatorios (0,8);
}

const verificarGanhador = () => {
    
    const quemGanhou = ()=>{
        let posicoes = [];
        //horizontal
        for (let i=0;i<9;i+=3){
            if (btn[i].value == jogador && btn[i].value == btn[i+1].value && btn[i+1].value == btn[i+2].value) {
                posicoes = [i,i+1,i+2];
            }
        }
        //vertical
        for (let i=0;i<3;i++){
            if (btn[i].value == jogador && btn[i].value == btn[i+3].value && btn[i+3].value == btn[i+6].value) {
                posicoes = [i,i+3,i+6];
            }
        }
        //diagonais
        if (btn[0].value == jogador && btn[0].value == btn[4].value && btn[4].value == btn[8].value) {
            posicoes = [0,4,8];
        }
        if (btn[2].value == jogador && btn[2].value == btn[4].value && btn[4].value == btn[6].value) {
            posicoes = [2,4,6];
        }
    
        return posicoes;
    }

    const ganhador = quemGanhou();
    if (ganhador.length == 3){
        for (let i=0; i<9;i++){
            if (i==ganhador[0]||i==ganhador[1]||i==ganhador[2]){
                btn[i].style.backgroundColor = "red";
            }
            btn[i].disabled = true;
        }
        parar = true;
    }

}

function aleatorios (min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min );
}