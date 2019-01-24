const numeros = [20,1,500,23,80,100,13,250];

const funcionarios = [
   {  id: 1,nome: 'Fernando',idade: 42,salario: 1200.00, cidade: 'São Roque' },
   {
      id: 2,
      nome: 'Ana',
      idade: 16,
      salario: 990.00,
      cidade: 'Itapevi'
   },
   {
      id:3,
      nome: 'Felipe',
      idade: 20,
      salario: 10000.00,
      cidade: 'Barueri'
   },
   {
      id:4,
      nome: 'Cintia',
      idade: 60,
      salario: 2500.00,
      cidade: 'Jandira'
   },
   {
      id:5,
      nome: 'Nelson',
      idade: 35,
      salario: 5300.00,
      cidade: 'Itapevi'
   }
];

//Problema: Criar um novo vetor somando 2 a cada elemento do vetor orginal.

//Solução Imperativa
// let numerosMais2 = [];
// let ultimoIndice = numeros.length
// for (let i=0; i<ultimoIndice; i++){
//    numerosMais2.push (numeros[i] + 2);
// }

//Solução declarativa
// MAP - Percorre todo o vetor e retorna um vetor do mesmo tamanho.
//       1º Elemento do vetor (valor, conteúdo)
//       2º Índice do vetor 
//       3º Vetor

//const numerosMais2 = numeros.map(function(valor) { return valor})
const valorMais2 = (valor) => valor + 2;
const numerosMais2 = numeros.map(valorMais2);


//Problema: Aumentar o salário em R$ 100,00 

//Solução: Imperativa
const nomesFuncionarios = [];
for (let i=0; i<funcionarios.length; i++){
   nomesFuncionarios.push({nome:funcionarios[i].nome, salario:funcionarios[i].salario + 100})
}


//Solução: Declarativa
// const salarioMais100 = (funcionario) => ({nome: funcionario.nome, salario: funcionario.salario + 100});

// const nomesFuncionarios = funcionarios.map(salarioMais100);



//Problema: Criar um novo vetor com os números menores que 90
//Solução Imperativa

// const menores90 = [];
// for (let i=0; i< numeros.length; i++){
//    if (numeros[i] <90){
//       menores90.push (numeros[i]);
//    }
// }

//Solução: Declarativa
// Filter - Retorna um vetor dependendo de uma condição
//          1º Elemento do vetor (valor)
//          2º Índice do vetor
//          3º Vetor

const menores90 = numeros.filter((valor) => valor <90 );

const fItapevi = funcionarios.filter((funcionario) => funcionario.cidade == 'Itapevi' );

//Problema: Somar todos os valores do vetor

//Solução: Imperativa

// let total = 0;
// for (let i=0;i<numeros.length; i++){
//    total += numeros[i];
// }

//Solução: Declarativa
// reduce - retorna um valor único
//          1º valor acumulado
//          2º Elemento do vetor (valor)
//          3º Índice do vetor
//          4º Vetor

const total = numeros.reduce ((acc, valor) => acc + valor);


const r = numeros.map((valor)=> valor + 1000)
                 .filter((valor)=> valor > 1090)
                 .reduce((total,valor)=> total + valor)


console.log(r);
