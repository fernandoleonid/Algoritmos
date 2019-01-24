const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
const btnDeletar = document.getElementById('deletar');
const table = document.getElementById('bd');
const bd = [{id:1,nome:'Fernando'},{id:2,nome:'Ana'}];

const cadastrarAluno = () => {
   const nome = prompt('Digite o nome para o novo cadastro.');
   const novoId = bd[bd.length-1].id + 1;
   const novoAluno = {id:novoId , nome: nome}
   bd.push (novoAluno);
   exibirBD();
}

const atualizarCadastro = () => {
   const id = prompt('Digite o ID para atualizar.');
   const novoNome = prompt('Digite o nome para atualizar o cadastro.');
   const indice = bd.filter(aluno => aluno.id == id).keys;
   alert (indice);
   bd[id] = novoNome;
   exibirBD();
}

const deletarAluno = () => {
   const id = prompt('Digite o ID para deletar.');
   bd.splice (id,1);
   exibirBD();
}

const exibirBD = () => {
   table.innerHTML = "<tr><th>Código</th><th>Nome</th></tr>";
   bd.map ((aluno) => table.innerHTML += "<tr><td>" +  aluno.id +"</td><td>" + aluno.nome + "</td></tr>");
}

exibirBD();

//Eventos
btnCadastrar.addEventListener('click',cadastrarAluno);
btnAtualizar.addEventListener('click',atualizarCadastro);
btnDeletar.addEventListener('click',deletarAluno);

