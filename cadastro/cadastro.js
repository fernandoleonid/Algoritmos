"use strict"

const banco = [
   {
      codigo:"1",
      nome:"Fernando",
      email: "fernando@gmail.com",
      celular: "11971657461",
      endereco: "Av. São Manoel",
      numero: "211",
      bairro: "Jd. Villaça",
      cidade: "São Roque",
      estado: "SP",
      cep: "18135300"
   },
   {
      codigo: "2",
      nome:"leonid",
      email: "leonid@gmail.com",
      celular: "1133333333",
      endereco: "Av. São Manoel",
      numero: "333",
      bairro: "Jd. Villaça",
      cidade: "Osasco",
      estado: "SP",
      cep: "55555555"
   }
]

const lerBD = () => {
   return banco;
}

const adicionarRS = (registro) => {
   if (registro.hasOwnProperty("nome")) {
      const codigos  = banco.map(registro => registro.codigo);
      const novoCodigo =Math.max (...codigos) + 1;
      registro.codigo = novoCodigo.toString();
      banco.push(registro);
      return true;
   }else{
      return false;
   }
}

const removerRS = (codigo) => {
   if (codigo) {
      const indice = banco.findIndex(registro => registro.codigo == codigo);
      banco.splice (indice,1);
      return true;
   }else{
      return false;
   }
}

const atualizarRS = (codigo,novoRS) => {
   if (codigo) {
      const indice = banco.findIndex(registro => registro.codigo == codigo);
      novoRS.codigo = codigo;
      banco.splice (indice,1,novoRS);
      return true;
   }else{
      return false;
   }
}

const lerRS = (codigo) => {
   if (codigo) {
      const rs = banco.filter(registro => registro.codigo == codigo);
      return rs ;
   }else{
      return false;
   }
}

const eventos = () => {
   document.querySelector("#novo")
           .addEventListener("click",cadastrarAluno);

   document.querySelector("#fechar")
           .addEventListener("click",fecharModal);

   document.querySelector("#salvar")
           .addEventListener("click",salvarNovoAluno);

      document.querySelector("#registros")
           .addEventListener("click", evento => editarExcluir (evento.target));
}

const abrirModal = () => {
   const modal = document.querySelector(".conteiner-modal");
   modal.classList.add ("exibirModal");
}

const fecharModal = () => {
   const modal = document.querySelector(".conteiner-modal");
   modal.classList.remove ("exibirModal");
}

const limparTabela =() => {
   const $registros = document.querySelector("#registros");
   while ($registros.firstChild) {
      $registros.removeChild($registros.firstChild);
    }
}

const limparFormulario = () => {
   const $campos = Array.from(document.querySelectorAll("input[type='text']"));
   $campos.map(campo => campo.value = "");
}

const carregarTabela = () => {
   const $registros = document.querySelector("#registros");
   limparTabela();
   lerBD().map(registro => {
      const $tr = document.createElement("tr");
      $tr.innerHTML += `
            <td>${registro.codigo}</td>
            <td>${registro.nome}</td>
            <td>${registro.email}</td>
            <td>${registro.celular}</td>
            <td>${registro.cidade}</td>
            <td class=acoes>
            <button class=botao id=editar codigo=${registro.codigo}>editar</button>
            <button class=botao id=excluir codigo=${registro.codigo}>excluir</button>
           </td>
             `
      $registros.insertBefore($tr,null);
   });
}

const cadastrarAluno = () => abrirModal();

const editarExcluir = (elemento) => {
   
   switch (elemento.id) {
      case "editar":
         abrirModal();
         break;
      case "excluir":
         alert (`Deseja excluir o elemento ${elemento.getAttribute("codigo")}?`)
         break;
   }   
};

const salvarNovoAluno = () => {
   const alunoNovo = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      celular: document.querySelector("#celular").value, 
      endereco: document.querySelector("#endereco").value, 
      numero: document.querySelector("#numero").value, 
      bairro: document.querySelector("#bairro").value, 
      cidade: document.querySelector("#cidade").value, 
      estado: document.querySelector("#estado").value, 
      cep: document.querySelector("#cep").value
   }

   adicionarRS(alunoNovo);
   fecharModal();
   carregarTabela();
   limparFormulario();
}

eventos ();
carregarTabela();