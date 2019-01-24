const btnR = document.getElementById("vermelho");
const btnY = document.getElementById("amarelo");
const btnG = document.getElementById("verde");
const btnA = document.getElementById("automatico");


btnR.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/vermelho.png"
    clearInterval(auto);
});

btnY.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/amarelo.png"
    clearInterval(auto);
});

btnG.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/verde.png"
    clearInterval(auto);
});

let auto = null

btnA.addEventListener ('click',function () {
    /*let num = 0;
    auto = setInterval (function(){

            if (num == 0){
                document.getElementById("img").src = "./img/vermelho.png";
                num = 1;
            }else if (num == 1) {
                document.getElementById("img").src = "./img/amarelo.png";
                num = 2;
            }else {
                document.getElementById("img").src = "./img/verde.png";
                num = 0;
            }

        },1000, ); */
    let i = 0;
    auto = setInterval(function(){   
        const cores = ["vermelho.png","amarelo.png","verde.png"];
        document.getElementById("img").src = "./img/" + cores[i];
        i = i >= 2 ?  0 : ++i;
    },1000)
    
});
