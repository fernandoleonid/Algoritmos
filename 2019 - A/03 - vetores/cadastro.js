const $ = (el) => document.querySelector(el);
const bd = [];

const limparFormulario = () =>{
   $("#nome").value = "";
}

const exibirCadastro = () => {
   alert (bd);
}

const adicionarAluno = ()  => {

   const nome = $("#nome").value;
   bd.push(nome);
   limparFormulario();
   exibirCadastro();
}

$("#adicionar").addEventListener("click",adicionarAluno);



( ) => { }


