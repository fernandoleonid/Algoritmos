const numeros = [8,71,23,2,18,17,200];

// Situação: Criar um novo vetor números adicionando
//          5 ano vetor original.

// Solução Imperativa
const acrescenta5 = () =>{
   const ultimoIndice = numeros.length - 1;
   const numerosMais5 = [];
   for (let i=0; i<=ultimoIndice;i++){
      numerosMais5.push(numeros[i]+5);
   }
   return numerosMais5;
}

/* Solução declarativa
MAP - Percorre todo o vetor e retorna um vetor do
         mesmo tamanho modificado ou não
   Parâmetros:
      1º Elemento do vetor
      2º Índice do vetor
      3º Vetor
*/
const valorMais5 = (valor) => valor + 5;
const numerosMais5 = numeros.map(valorMais5);

// Situação: Criar um novo vetor com somente elementos
//          maiores que 20

// Solução Imperativa
const maioresQue20I = () => {
   const numerosMaioresQue20 = [];
   const ultimoIndice = numeros.length - 1;
   for (let i=0 ;i<=ultimoIndice; i++){
      if (numeros[i]>20){
         numerosMaioresQue20.push(numeros[i]);
      }
   }
   return numerosMaioresQue20;
}

/* Solução Declarativa
FILTER - Cria um novo vetor com os elementos que estejam
         dentro de um condição
   Parâmetros:
      1º Elemento do vetor
      2º Índice do vetor
      3º Vetor

*/
const maioresQue20D = numeros.filter((valor) => valor > 20);
const numerosPares = numeros.filter((valor) => valor % 2 == 0);
const numerosImpares = numeros.filter((valor) => valor % 2 == 1);


// Situação: Somar todos os valores do vetor

// Solução Imperativa

const somaNumeros = () => {
   let soma = 0;
   const ultimoIndice = numeros.length -1 ;
   for (let i=0; i<=ultimoIndice; i++){
      soma += numeros[i];
   }
   return soma;
}

/* Solução Declarativa
REDUCE - Retorna um único valor
   Parâmetros:
      1º Valor acumulado
      2º Elemento do vetor
      3º Índice do vetor
      4º Vetor   
*/

const somaNumerosD = numeros.reduce((soma,valor) => soma + valor);


// console.log(numeros);
// console.log ( maioresQue20I() );
// console.log (maioresQue20D);
// console.log (numerosPares);
// console.log (numerosImpares);
// console.log (somaNumeros());
// console.log ( somaNumerosD);