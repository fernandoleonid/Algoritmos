const $resultado = document.getElementById("resultado");
const $quadrado = document.getElementById("quadrado");
const $cubo = document.getElementById("cubo");

// 4 - Arrow function reducido (quando existe somente uma linha de código)
const quadrado = (num) =>  num * num;
const cubo = (num) => num * num * num; 

// // 3 - Arrow function (sem a palavra function)
// const quadrado = (num) => {
//    return num * num;
// }

// //2 - A váriável quadrado recebe uma função anônima
// const quadrado = function (num){
//    return num * num;
// }

//1 - Função classica
// function quadrado (num){
//    return num * num;
// }

const calcularQuadrado = () => {
   const numero = document.getElementById("numero").value;
   $resultado.value = quadrado(numero);
}

const calcularCubo = () => {
   const numero = document.getElementById("numero").value;
   $resultado.value = cubo(numero);
}


$quadrado.addEventListener("click",calcularQuadrado)
$cubo.addEventListener("click", calcularCubo)