const $resultado = document.getElementById("resultado");
const $calcular = document.getElementById("calcular");

const quadrado = function (num){
   return num * num;
}

function calcular (){
   const numero = document.getElementById("numero").value;
   $resultado.value = quadrado(numero);
}

// function quadrado (num){
//    return num * num;
// }




$calcular.addEventListener("click",calcular)