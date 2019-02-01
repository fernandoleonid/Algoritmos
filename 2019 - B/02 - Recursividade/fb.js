const $fatorial = document.querySelector("#fatorial");

const calcularFatorial = () => {

   const minimo = document.querySelector("#minimo").value;
   const maximo = document.querySelector("#maximo").value;
   const $resultado = document.querySelector("#resultado");

   for (let i=minimo; i<= maximo; i++){
      $resultado.innerText = i;
   }

}



$fatorial.addEventListener("click",calcularFatorial)