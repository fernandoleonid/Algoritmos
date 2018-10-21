const numeros = [8,71,23,2,18,17,200];

const clientes =[
   {  id: 1, nome: 'Fernando',idade: 41,salario: 1200.00,cidade: 'São Roque' },
   {
      id: 2,
      nome: 'Ana',
      idade: 15,
      salario: 10000.00,
      cidade: 'Jandira'
   },
   {
      id: 3,
      nome: 'Cintia',
      idade: 55,
      salario: 9000.00,
      cidade: 'Jandira'
   },
   {
      id: 4,
      nome: 'Nicolas',
      idade: 18,
      salario: 954.00,
      cidade: 'Itapevi'
   },
   {
      id: 5,
      nome: 'Daniel',
      idade: 35,
      salario: 2000.00,
      cidade: 'Jandira'
   }
]


//Problema: Criar um novo vetor adicionando mais 5 ao 
//          ao vetor original.

// Solução Imperativa
// const ultimoIndice = numeros.length;
// const numerosMais5 = [];
// for (let i=0; i< ultimoIndice ; i++ ){
//    numerosMais5.push(numeros[i] + 5);
// }

// Solução declarativa
// MAP - Percorre todo o vetor e retorna um vetor do mesmo tamanho
//       modificado ou não.
//       1º Elemento (valor) do vetor
//       2º Índice do vetor
//       3º Vetor

//const valorMais5 = function (valor) { return valor + 5};
const valorMais5 = (valor) => valor + 5;
const numerosMais5 = numeros.map (valorMais5);

//Problema: Aumentar R$ 100,00 no salario dos clientes
//Solução Declarativa
const salarioMais100 = (cliente) => ({nome: cliente.nome, salario: cliente.salario + 100}) ;

const clientesMais100 = clientes.map(salarioMais100);


//Problema: criar um novo vetor com somente os números maiores que 20

//Solução Imperativa

// const numerosMaioresQue20 = [];
// const fimNumeros = numeros.length
// for (let i=0;i<fimNumeros; i++){
//    if (numeros[i] > 20){
//       numerosMaioresQue20.push(numeros[i]);
//    }
// }

//Solução Declarativa
//filter - Filtra os elementos de um vetor e retorna um novo 
//       1º Elemento (valor) do vetor
//       2º Índice do vetor
//       3º Vetor

const numerosMaioresQue20 = numeros.filter(valor => valor > 20);
const numerosPares = numeros.filter (valor => valor%2 == 0);


//Problema: vetor os clientes da cidade de Jandira.

const clientesJandira = clientes.filter(cliente => cliente.cidade == 'Jandira');

//Problema: Somar todos os elementos do vetor(array);
//Solução imperativa

// const fimNumeros = numeros.length;
// let total = 0;
// for (let i=0;i<fimNumeros; i++){
//    total += numeros[i];
// }

//Solução declarativa
//reduce - retorna um único valor sobre o vetor;
//       1º Valor acumulado
//       2º valor do vetor
//       3º índice do vetor
//       4º vetor

const total = numeros.reduce( (acc,valor) => acc + valor );

//Problema: calcular o total que a empresa pagará de salários 

const totalSalarios = clientes.reduce((total, cliente)=> total + cliente.salario, 0);


//saída

//console.log(numeros);
console.log(total);
console.log(totalSalarios)