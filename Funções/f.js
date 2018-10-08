const txtMin = document.getElementById("minimo");
const txtMax = document.getElementById("maximo");
const btnFat = document.getElementById("fatorial");
const btnQuadrado = document.getElementById("quadrado");
const txtResultado = document.getElementById("resultado");

// function fatorial (a){
//     let fat = 1;
//     for (let i=1; i<=a; i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = function (a){
//     let fat = 1;
//     for (let i=1; i<=a; i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = a => {
//     let fat = 1;
//     for (let i=1; i<=a; i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = function (a){
//     if (a <= 1) {
//         return 1;
//     }else{
//         return a * fatorial (a - 1) ;
//     }
// }

const fatorial = a => a <=2 ? a : a * fatorial (a - 1);


btnFat.addEventListener('click',function(){
    min = parseInt (txtMin.value);
    max = parseInt (txtMax.value);
    if (isNaN (min)){
        if (isNaN (max) ){
            alert ("Preencha pelo menos um campo!!!");
        }else {
            txtResultado.value = max + " --> " + fatorial (max);
        }
    }else{
        if (isNaN (max)){
            txtResultado.value = min + " --> " + fatorial (min);
        }else {
            txtResultado.value = "";
            for (let num=min; num<=max; num++){
                txtResultado.value += num + " --> " + fatorial (num) + "\n";
            }
        }
    }

})

const verificarPreenchimento = function () {
    min = parseInt (txtMin.value);
    max = parseInt (txtMax.value);
    if (isNaN (min)){
        if (isNaN (max) ){
            return []
        }else {
            return [max]
        }
    }else{
        if (isNaN (max)){
            return [min]
        }else {
            return [min,max]
        }
    }
}

btnQuadrado.addEventListener('click',function(){
    alert (verificarPreenchimento[0])
    switch (verificarPreenchimento.length) {
        case 0:
            alert ("Preencha os valores");
            break;
        case 1:
            alert (verificarPreenchimento[0]**2);
            break;
        case 2:
            for (let num=verificarPreenchimento[0]; num<=verificarPreenchimento[1]; num++){
                alert ("varios");
            }
            break
    }
})

