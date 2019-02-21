const $ = (el) => document.querySelector(el);
const $listaCadastro = $("#listaCadastro");

const bd = ["Ana","José","Maria"];


const exibirBD = () => {

   const ultimoIndice = bd.length - 1;
   $listaCadastro.innerHTML = "";
   for (let i=0; i <=ultimoIndice;i++){
      $listaCadastro.innerHTML += `${bd[i]} <br>`;
   }
}

const limparFormulario = () => {
   $("#nome").value = "";
}

const adicionarBD = () => {
   const novoNome = $("#nome").value;
   bd.push (novoNome);
   exibirBD();
   limparFormulario();
}

const excluirCadastro = () => {
   const nome = prompt ("Digite um nome para exluir");
   const indice = bd.indexOf(nome);
   if ( indice == -1) {
      alert ("Nome não cadastrado!")
   }else{
      bd.splice(indice,1);
      exibirBD();
   }
}

const atualizarCadastro = () => {
   const nome = prompt ("Digite um nome para atualizar");
   const indice = bd.indexOf(nome);
   if ( indice == -1) {
      alert ("Nome não cadastrado!");
   }else{
      const nomeAtualizado = prompt("Digite o novo nome:")
      bd.splice(indice,1,nomeAtualizado);
      exibirBD();
   }  
}


exibirBD ();

$("#adicionar").addEventListener("click",adicionarBD);
$("#excluir").addEventListener("click",excluirCadastro);
$("#atualizar").addEventListener("click",atualizarCadastro);