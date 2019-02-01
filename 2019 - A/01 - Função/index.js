const $resultado = document.querySelector("#resultado");
const $quadrado = document.querySelector("#quadrado");
const $cubo = document.querySelector("#cubo");

}
function calcularCubo(num){
   return num * num * num;
}

const calcularQuadrado = function (num){
   return num * num;
}

function  exibirQuadrado (){
   const numero = document.querySelector("#numero").value;
   $resultado.value = calcularQuadrado(numero);
}

function exibirCubo (){
   const numero = document.querySelector("#numero").value;
   $resultado.value = calcularCubo(numero);

$quadrado.addEventListener("click",exibirQuadrado);
$cubo.addEventListener("click",exibirCubo);

