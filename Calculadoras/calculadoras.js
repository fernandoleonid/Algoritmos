function numeros(n){
    const txtTela = document.getElementById("tela")
    txtTela.innerHTML += n;
}

const teclas = [];

for (let i=0;i<10;i++){
    teclas[i] = document.getElementById("n"+i);
    teclas[i].addEventListener('click',function(){
        numeros(i);
    });
}


document.addEventListener('keydown',function(e){

    teclas[e.key].dispatchEvent(new Event('click'));
})