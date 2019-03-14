const valores = [100,50,35,98,254,674,245];

const alunos = [
   {nome:"Fernando",nota:"100",cidade:"Jandira",cel:"97894-1234",idade:"42", i:0,a:9,p:5},
   {nome:"Ana",nota:"8",cidade:"Jandira",cel:"97894-1234",idade:"16",i:5,i:0},
   {nome:"Pedro",nota:"35",cidade:"Barueri",cel:"97894-1234",idade:"35",i:9,p:0},
   {nome:"Davi",nota:"50",cidade:"Itapevi",cel:"97894-1234",idade:"17"},
   {nome:"Igor",nota:"85",cidade:"Jandira",cel:"97894-1234",idade:"47"},
   {nome:"Jean",nota:"60",cidade:"Itapevi",cel:"97894-1234",idade:"8"},
   {nome:"Fabricio",nota:"10",cidade:"Barueri",cel:"97894-1234",idade:"3"},
   {nome:"Bruno",nota:"5",cidade:"Jandira",cel:"97894-1234",idade:"13"}
]

const filtroCidade = (cidade) => alunos.filter(aluno => aluno.cidade == cidade);


const alunosItapevi = filtroCidade("Itapevi");
const alunosMaiores18 = alunos.filter(aluno => aluno.idade >= 18);
const alunosMenores18 = alunos.filter(aluno => aluno.idade < 18);
const alunosCelular = alunos.map( aluno => ({nome:aluno.nome, celular:aluno.cel}) );
const qtdAlunos = alunos.length;
const mediaSala = alunos.reduce( ( soma, aluno) => soma + parseInt(aluno.nota) , 0 ) / qtdAlunos;

const alunosBarueri = filtroCidade("Barueri");
const qtdAlunosBarueri = alunosBarueri.length;
const mediaBarueri = alunosBarueri.reduce( ( soma, aluno) => soma + parseInt(aluno.nota) , 0 ) / qtdAlunosBarueri;

const notasMais10 = alunos.map( aluno => ( {nome:aluno.nome, nota:parseInt(aluno.nota) + 10} ) )
                          .filter ( aluno => aluno.nota < 50 );


console.table(alunos);
console.table(alunosItapevi);
console.table(alunosMaiores18);
console.table(alunosMenores18);
console.table(alunosCelular);
console.log ("Media da Sala:" ,mediaSala);
console.log ("Media da Barueri:" ,mediaBarueri);

console.table (notasMais10);

// Situação: Aumentar 10 para cada valor

// Solução Imperativa
const valoresMais10I = () => {

   const ultimoIndice = valores.length - 1;
   let aumento = [];
   for (let i=0; i<=ultimoIndice; i++){
      aumento.push(valores[i] + 10);
   }
   return aumento;
}

/* Solução Declarativa
   MAP - Percorre todo o vetor e retorna um vetor do mesmo
         tamanho modificado ou não
   PARÂMETROS:
      1º Elemento do vetor
      2º O índice do vetor
      3º Vetor         
*/

const valoresMais10D = valores.map( (valor) =>  valor + 10 );

// Situação 2: Criar um novo vetor com somente os elementos
//             maiores que 90

const valoresMaiores90I = () => {

   const ultimoIndice = valores.length - 1;
   const maiores90 = [];
   for (let i=0; i<=ultimoIndice; i++){
      if ( valores[i] > 90){
         maiores90.push(valores[i]);
      }
   }
   return maiores90;
}

/* FILTER - Cria um novo vetor com os elemento que estejam
            dentro de uma condição
            1º - Elemento do vetor
            2º - Índice do vetor
            3º - Vetor
*/

const valoresMaiores90D = valores.filter( (valor) => valor > 90 );
const valoresPares = valores.filter( (valor) => valor % 2 == 0);

// Situação 3 - Encontrar a soma de todos os valores do vetor.

/* REDUCE - Retorna um único valor
            1º - Valor acumulado
            2º - Elemento do vetor
            3º - Índice do vetor
            4º - Vetor
*/
const total = valores.reduce( ( soma, valor ) => soma + valor )

const totalValoresMenores100 = valores.filter( (valor) => valor < 100)
                                      .reduce( (soma, valor) => soma + valor );

                                 

console.log ("Vetor original: ", valores);
console.log ("Imperativo:", valoresMais10I());
console.log ("Declarativo:", valoresMais10D);
console.log ("Imperativo:", valoresMaiores90I());
console.log ("Declarativo:", valoresMaiores90D);
console.log ("Declarativo:", valoresPares);
console.log ("Total:", total );
console.log ("Total menores que 100:", totalValoresMenores100)