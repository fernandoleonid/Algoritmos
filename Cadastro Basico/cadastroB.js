const tabela = document.getElementById('bd');
const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
const btnDeletar = document.getElementById('deletar');
let codigo = 6;

const bd = [
   {codigo:1, nome:"Fernando",cidade:"São Roque"},
   {codigo:5, nome:"Ana",cidade: "Jandira"},
   {codigo:6, nome: "Maria", cidade: "Itapevi"}
];

const cadastrarNome = () => {
   codigo++;
   const nome = prompt("Digite seu nome para o cadastro.");
   if (nome){
      const cidade = prompt("Digite sua cidade para o cadastro.");
      if (cidade){
         const novoAluno = {
            codigo: codigo,
            nome: nome,
            cidade: cidade
         };

         bd.push(novoAluno);
         mostrarBD();
      };
   };
};

const atualizarNome = () => {
   const codigo = prompt("Digite o código para atualizar o cadastro.");
   const novoNome = prompt("Digite seu nome para atualizar o cadastro.");
   const novaCidade = prompt("Digite sua cidade para atualizar o  cadastro.");
   const i = bd.findIndex(aluno => aluno.codigo == codigo);

   bd[i].nome = novoNome || bd[i].nome; 

   bd[i].cidade = novaCidade || bd[i].cidade;

   mostrarBD();
}

const deletarNome = () => {
   const codigo = prompt ("Digite o código para atualizar.");
   if (codigo){
      const i = bd.findIndex(aluno => aluno.codigo == codigo);
      if (i != -1){
         bd.splice(i,1);
         mostrarBD();
      }
   }
}

const mostrarBD = () => {
   
   tabela.innerHTML = "<tr><th>Código</th><th>Nome</th><th>Cidade</th></tr>";
   //bd.map((aluno) => tabela.innerHTML += "<tr><td>" + aluno.codigo + "</td><td>" + aluno.nome + "</td><td>" + aluno.cidade + "</td></tr>" );
   bd.map((aluno) => tabela.innerHTML += 
      `<tr>
         <td>${aluno.codigo}</td>
         <td>${aluno.nome}</td>
         <td>${aluno.cidade}</td>
      </tr>`
   );

 }

mostrarBD ()

//Eventos
btnCadastrar.addEventListener('click', cadastrarNome);
btnAtualizar.addEventListener('click', atualizarNome);
btnDeletar.addEventListener('click', deletarNome);



