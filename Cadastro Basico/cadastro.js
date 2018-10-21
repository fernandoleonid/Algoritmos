//variáveis globais
const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
const btnDeletar = document.getElementById('deletar');
const bd = [];

carregarTabela = () => {
   const tb = document.getElementById('bd')
   tb.innerHTML = "<tr><td>Índice</td><td>Nome</td></tr>";
   bd.map((nome,i) => tb.innerHTML += "<tr><td>" + i + "</td><td>" + nome + "</td>"+  "</tr>");
}

cadastrarNome = () => {
   const nome = prompt("Digite um nome para o cadastro!");
   bd.push(nome);
   carregarTabela();
}

atualizarNome = () => {

   const id = prompt ('Digite o id para modificar');
   const nome = prompt("Digite um nome para para alterar!");
   bd[id] = nome;

   carregarTabela();
}

deletarNome = () => {
   const id = prompt ('Digite o id para deletar');
   bd.splice(id,1);
   carregarTabela();
}

//Eventos
btnCadastrar.addEventListener('click',cadastrarNome);
btnAtualizar.addEventListener('click',atualizarNome);
btnDeletar.addEventListener('click',deletarNome);