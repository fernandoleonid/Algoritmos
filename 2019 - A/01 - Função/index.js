const $resultado = document.querySelector("#resultado");
const $quadrado = document.querySelector("#quadrado");
const $cubo = document.querySelector("#cubo");


const calcularCubo = (num) =>  num * num * num;

const calcularQuadrado = (num) => num * num;


const exibirQuadrado = () => {
   const numero = document.querySelector("#numero").value;
   $resultado.value = calcularQuadrado(numero);
}

const exibirCubo =  () => {
   const numero = document.querySelector("#numero").value;
   $resultado.value = calcularCubo(numero);
}

$quadrado.addEventListener("click",exibirQuadrado);
$cubo.addEventListener("click",exibirCubo);