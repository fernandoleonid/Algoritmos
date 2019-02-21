const $ = (el) => document.querySelector(el);

const $fatorial = $("#fatorial");
const $fibo = $("#fibonacci");
const $primo = $("#primo");

const fatorial = (num) => num == 1 ? 1 : num * fatorial (num-1);

const fibo = (num) => num <= 2 ? 1 : fibo(num-1) + fibo(num-2);

const ePrimo = (num) => {
   
   const qtdDivisores = (num) => {
      let cont = 0   
      for (let i=num; i>=1;i--){
         if ( num % i == 0){
            cont++;
         }
      }
      return cont;
   }

   return qtdDivisores(num) == 2;
}
const primo = (termo) => {

   let cont = 0;
   let num = 0;
   while (cont < termo){
      num++
      if (ePrimo(num)){
         cont++
      }
   }
   return num;
}


const exibirResultado = (fn) => {

   const minimo = parseInt($("#minimo").value);
   const maximo = parseInt($("#maximo").value);
   const $resultado = $("#resultado");
   $resultado.value = "";
   for (let cont=minimo; cont<=maximo; cont++){
      
      $resultado.value += `${cont} - ${fn(cont)}\n`;

   }
}

$fatorial.addEventListener ("click",() => exibirResultado(fatorial));
$fibo.addEventListener ("click", () => exibirResultado(fibo));
$primo.addEventListener("click", () => exibirResultado(primo) );