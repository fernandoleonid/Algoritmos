const numeros = [8,71,23,2,18,17,200];

const alunos = [
   {nome:"Jose",idade:"50",cidade:"Jandira",nota:"85",cel:"98914-1234"},
   {nome:"Ana",idade:"15",cidade:"Barueri",nota:"15",cel:"94578-1234"},
   {nome:"Marta",idade:"20",cidade:"Jandira", nota:"65",cel:"94788-4157"},
   {nome:"Andre",idade:"10",cidade:"Itapevi",nota:"25",cel:"91111-9999"},
   {nome:"Murilo",idade:"90",cidade:"Itapevi",nota:"50",cel:"92222-3333"},
   {nome:"Julia",idade:"13",cidade:"Barueri",nota:"5",cel:"95555-6666"},
   {nome:"Maria",idade:"6",cidade:"Jandira",nota:"60",cel:"97412-9874"}
]

alunos[4].cidade = "Jandira";
console.log ("#######################")
console.table ( alunos );
console.log ("#######################")


const alunosCidade = (cidade) => alunos.filter((aluno) => aluno.cidade == cidade);

const alunosItapevi = alunosCidade("Itapevi");

const alunosMaiores18 = alunos.filter( (aluno) => aluno.idade >= 18);
const alunosMenores18 = alunos.filter( (aluno) => aluno.idade < 18);
const alunosCel = alunos.map( (aluno) => ( {nome:aluno.nome,celular:aluno.cel} ) );
const alunosJandiraCel = alunos.filter( (aluno) => aluno.cidade == "Jandira")
                         .map( aluno => ({nome:aluno.nome,celular:aluno.cel}));

const compose = (...functions) => ini => 
   functions.reduceRight((value, func) => func(value), ini);
const pipe = (...functions) => ini => 
   functions.reduce((value, func) => func(value), ini);

// const f1 = (r,c) => r.filter( aluno => aluno.cidade == "Jandira")
// const f2 = (r) => r.map( aluno => ({nome:aluno.nome,celular:aluno.cel}))

const f1 = a => a + 100 ;
const f2 = a => a / 2;

const alunosJCel = pipe(f1,f2);

console.log ("###############################")
console.log (alunosJCel(10));


// alunosJandiraCelular = ()

const qtdAlunos = alunos.length;
const mediaEscola = alunos.reduce( (soma,aluno) => soma + parseInt(aluno.nota),0 ) / qtdAlunos;

const alunosBarueri = alunos.filter( (aluno) => aluno.cidade == "Barueri");

const mediaBarueri = alunosBarueri.reduce( (soma, aluno) => soma + aluno.nota, 0) / alunosBarueri.length;




console.table(alunosItapevi);
console.table(alunosMaiores18);
console.table(alunosMenores18);
console.table(alunosCel);
console.table(alunosJandiraCel);
console.log ("Média da escola:" , mediaEscola);


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


console.log(numeros);
console.log ( maioresQue20I() );
console.log (maioresQue20D);
console.log (numerosPares);
console.log (numerosImpares);
console.log (somaNumeros());
console.log ( somaNumerosD);