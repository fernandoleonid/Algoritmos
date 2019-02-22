const $ = (el) => document.querySelector(el);
const bd = [];

const limparFormulario = () =>{
   $("#nome").value = "";
}

const exibirCadastro = () => {
   const $tabelaCadastro = $("#tabelaCadastro");
   const ultimoIndice = bd.length - 1
   $tabelaCadastro.innerHTML = "";
   for (let i=0; i<=ultimoIndice; i++){
      $tabelaCadastro.innerHTML += `${i} - ${bd[i]} <br>`;
   }
}

const adicionarAluno = ()  => {

   const nome = $("#nome").value;
   if (nome == "" ){
      alert("Digite um nome para cadastrar!")
   }else{
      bd.push(nome);
      limparFormulario();
      exibirCadastro();
   }
}

const excluirAluno = () => {
   const nome = prompt("Digite um nome para exluir!");
   const indice = bd.indexOf(nome);
   const inexistente = -1;

   if ( indice == inexistente ) {
      alert ("Aluno não encontrado")
   }else{
      bd.splice(indice,1);
   }

   exibirCadastro();
}

const atualizarAluno = () => {
   const nome = prompt("Digite um nome para atualizar!");
   if (nome){
      const nomeAtualizado = prompt ("Digite o novo nome!");
      if (nomeAtualizado){
         const indice = bd.indexOf(nome);
         const inexistente = -1;

         if ( indice == inexistente ) {
            alert ("Aluno não encontrado")
         }else{
            bd.splice(indice,1,nomeAtualizado);
         }
         exibirCadastro();
      }
   }
}

$("#adicionar").addEventListener("click",adicionarAluno);
$("#excluir").addEventListener("click",excluirAluno);
$("#atualizar").addEventListener("click",atualizarAluno)


