const $ = (elemento) => document.querySelector(elemento);

const $fatorial = $("#fatorial");
const $fibo = $("#Fibonacci");


// Recursividade e ternário
const fatorial = ( num ) => num == 1 ? 1: num * fatorial (num -1);

const fibo = ( num ) => num <= 2 ? 1 : fibo(num-1) + fibo (num-2);

const qtdDivisores = (num) => {
   let cont = 0;
   for (let i=1; i<=num; i++){
      if ( num % i == 0 ) {
         cont++;
      }
   }
   return cont;
}

const ePrimo = (num) => qtdDivisores (num) == 2;


const primo = (termo) => {
   let cont = 0;
   let num = 1;
   while (cont < termo){
      num++;
      if ( ePrimo(num) ){
         cont++;
      }
   }
   return num;
}
const pares = ( num ) => num * 2;

const calcular = (f) => {

   const minimo = parseInt($("#minimo").value);
   const maximo = parseInt($("#maximo").value);
   const $resultado = $("#resultado");

   $resultado.value = "";

   for (let cont=minimo; cont<=maximo; cont++){
      $resultado.value += `${cont} - ${f(cont)} \n`;
   }
}

$fatorial.addEventListener("click", () => calcular(fatorial));
$fibo.addEventListener("click",() => calcular (fibo));
$("#primo").addEventListener("click", () => calcular (primo));
$("#pares").addEventListener("click", () => calcular(pares));