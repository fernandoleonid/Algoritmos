const numeros = [1,2,3,9,8,7,51,100];

const clientes =[
   { id: 1, nome: 'Fernando',  salario: 2000.00,  cidade: 'São Roque'  },
   { id: 2, nome: 'Ana', salario: 1500.00,  cidade: 'Jandira'  },
   { id: 3, nome: 'Pedro', salario: 3000.00, cidade: 'Itapevi' },
   { id: 4, nome: 'Marcos', salario: 1000.00, cidade: 'Jandira'},
   { id: 5, nome: 'Cintia', salario: 990.00, cidade: 'Jandira' },
   { id: 6, nome: 'Nicolas', salario: 2000.00, cidade: 'São Roque'}
]


// Problema:
//Criar um novo array com os valores de numeros multiplicados por 7

//Solução imperativa
// const numerosX7 = [];
// for (i=0; i<=numeros.length-1; i++){
//    numerosX7.push (numeros[i] * 7);
// }

//Solução declarativa - MAP
//MAP: percorre o array inteiro e retorna um novo array do mesmo tamanho
//Parâmetros:  1º --> elemento (valor) da array
//             2º --> indice do array
//             3º --> array

//const numerosX7 = numeros.map ( function (valor) { return valor * 7} );
const valorMultilicadosPor7 = valor => valor * 7
const numerosX7 = numeros.map (valorMultilicadosPor7);

// console.log(numeros);
// console.log(numerosX7);

// //Imperativa
// const salariosMesOutubro = [];
// for (let i=0; i <= clientes.length - 1; i++){
//    salariosMesOutubro.push({nome: clientes[i].nome, salario: clientes[i].salario + 100.00});
// }

// for (let i=0; i<= salariosMesOutubro.length-1; i++){
//    console.log(salariosMesOutubro[i]);
// }

//declarativa
const salarioMais100 = cliente => ({nome: cliente.nome, salario: cliente.salario + 100})
const salariosMesOutubro = clientes.map (salarioMais100);


salariosMesOutubro.map (e => console.log(e));
