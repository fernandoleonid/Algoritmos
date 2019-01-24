//variáveis globais
const txtNome = document.getElementById('nome');
const rdoSexo = document.getElementsByName('sexo');
const txtEmail = document.getElementById('email');
const txtCelular = document.getElementById('celular');
const txtEnd = document.getElementById('endereco');
const txtNumero = document.getElementById('numero');
const txtBairro = document.getElementById('bairro');
const txtCidade = document.getElementById('cidade');
const cmbEstado = document.getElementById('estado');
const txtCep  = document.getElementById('cep');

const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
const btnDeletar = document.getElementById('deletar');

// variável simula o campo numeração automatica com chave primaria do BD.
let codigo = 2;

// Indice do aluno para atualizar
let indiceAluno = -1;

const bd = [{
   codigo:1,
   nome:"Fernando",
   sexo:"m",
   email: "fernandoleonid@gmail.com",
   celular: "11971657461",
   end: "Av. São Manoel",
   numero: 21,
   Bairro: "Jd. Villaça",
   Cidade: "São Roque",
   uf: "SP",
   cep: "18135300",
},
{
   codigo:2,
   nome:"Maria",
   sexo:"f",
   email: "maria@gmail.com",
   celular: "11123456789",
   end: "Av. Pedro Lucas",
   numero: 202,
   Bairro: "Centro",
   Cidade: "Jandira",
   uf: "SP",
   cep: "13125401",
}];


const cep = "06622160"

const url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
   .then(res => res.json())
   .then(dado => console.log(dado.bairro));


const mostrarBD = () => {
   const tb = document.getElementById('bd');
   
   //Apaga os dados da tabela
   while (tb.firstChild){
      tb.removeChild(tb.firstChild);
   }

   //*Insere os dados do banco de dados na tabela.
   bd.map((aluno) => tb.insertAdjacentHTML("beforeend", `
      <tr>
         <td>${aluno.codigo}</td>
         <td>${aluno.nome}</td>
         <td>${aluno.sexo}</td>
         <td>${aluno.email}</td>
         <td>${aluno.celular}</td>
      </tr>`));
}

const limparCampos = () => {
   const campos = Array.from(document.querySelectorAll("input[type='text'], select" ));
   campos.map (tag => tag.value = "");
   Array.from(rdoSexo).map (opt => opt.checked = false);
};

const emailValido = (email) => {
   
   const er = /^([a-z][a-z0-9._-]+@([a-z0-9]+[.])([a-z]+[.]?)+)[a-z]$/
   console.log (er.test(email));
   return er.test(email);

}

const verificarCampos = () => {
   
   let semErro = true;
   if (txtNome.value.trim() == ""){
      txtNome.classList.add ("erro");
      semErro = false;
   };
   if (!emailValido(txtEmail.value)){
      txtEmail.classList.add ("erro");
      semErro = false;
   };
   if (txtCelular.value.trim() == ""){
      txtCelular.classList.add ("erro");
      semErro = false;
   };

   return semErro;
};

const cadastrarAluno = () => {
   
   if (verificarCampos()){
      codigo++;
      const novoAluno = {
         codigo:codigo,
         nome:txtNome.value,
         sexo:rdoSexo[0].checked ? "m":"f",
         email: txtEmail.value,
         celular: txtCelular.value,
         end:txtEnd.value,
         numero: txtNumero.value,
         Bairro: txtBairro.value,
         Cidade: txtCidade.value,
         uf: cmbEstado.value,
         cep: txtCep.value,
      }
      
      bd.push (novoAluno);
      limparCampos();
      mostrarBD();
   }else{
      alert ("Verifique os campos em destaque!");
   }
}


const atualizarAluno = () =>{

   const codigo = bd[indiceAluno].codigo;
   bd.splice (indiceAluno,1, {
      codigo: codigo,
      nome:txtNome.value,
      sexo:rdoSexo[0].checked ? "m":"f",
      email: txtEmail.value,
      celular: txtCelular.value,
      end:txtEnd.value,
      numero: txtNumero.value,
      Bairro: txtBairro.value,
      Cidade: txtCidade.value,
      uf: cmbEstado.value,
      cep: txtCep.value
   });

   mudarEstado("normal");
   limparCampos();
   mostrarBD();
};

const cadastrarSalvar = () => {
   if (btnCadastrar.textContent == "Salvar"){
      atualizarAluno();
   }else{
      cadastrarAluno();
   };
};

const mudarEstado = (estado) =>{
   if (estado == "normal"){
      btnDeletar.style.display = "inline";
      btnCadastrar.textContent = "Cadastrar Aluno";
      btnAtualizar.textContent = "Atualizar Aluno";
   }else{
      btnDeletar.style.display = "none";
      btnCadastrar.textContent = "Salvar";
      btnAtualizar.textContent = "Cancelar";
   }
}

const atualizarNome = () => {

   const codigo = prompt ('Digite o código para modificar');

   preencherCampos = (i) => {
      const iSexo = bd[i].sexo == 'm'? 0 : 1;
      const iEstado = ["SP","RJ","MG","ES"].indexOf(bd[i].uf);
   
      txtNome.value = bd[i].nome;
      rdoSexo[iSexo].checked = true;
      txtEmail.value = bd[i].email;
      txtCelular.value = bd[i].celular;
      txtEnd.value = bd[i].end;
      txtNumero.value = bd[i].numero;
      txtBairro.value = bd[i].Bairro;
      txtCidade.value = bd[i].Cidade;
      cmbEstado.selectedIndex = iEstado;
      txtCep.value = bd[i].value; 

   }


   indiceAluno = bd.findIndex(aluno => aluno.codigo == codigo);

   if (indiceAluno == -1){
      alert ("Aluno não encontrado");
   }else{
      preencherCampos(indiceAluno);
      mostrarBD();
      mudarEstado("edição");
   }
   
}

const deletarNome = () => {
   const codigo = prompt ('Digite o código para deletar');
   const indiceDeletar = bd.findIndex(aluno => aluno.codigo == codigo);
   bd.splice(indiceDeletar,1);
   mostrarBD();
};


const cancelarAtualizacao = () => {
   mudarEstado("normal");
   limparCampos(); 
};

const atualizarCancelar = () => {
   if (btnAtualizar.textContent == "Cancelar"){
      cancelarAtualizacao();
   }else{
      atualizarNome();
   };
};

const removerErro = (elemento) => {
   
   elemento.classList.remove ("erro");

}

const mascNome = () => {

   let texto = txtNome.value;

   texto = texto.replace(/[^a-zA-Z À-ÿ]/g,"");

   txtNome.value = texto;
}


const mascCelular = () => {
   
   txtCelular.maxLength = "14";

   let texto = txtCelular.value

   texto = texto.replace(/[^0-9]/g,"");
   texto = texto.replace(/(.)/,"($1");
   texto = texto.replace(/(...)/,"$1)");
   texto = texto.replace(/(.{9})/,"$1-")

   txtCelular.value = texto;   
}

const mascCep = () => {

   txtCep.maxLength = 9;
   let texto = txtCep.value;

   texto = texto.replace(/[^0-9]/g,"");
   texto = texto.replace(/(.{5})/,"$1-");

   txtCep.value = texto;   
}

mostrarBD();
//Eventos
btnCadastrar.addEventListener('click',cadastrarSalvar);
btnAtualizar.addEventListener('click',atualizarCancelar);
btnDeletar.addEventListener('click',deletarNome);
txtNome.addEventListener("change",() => removerErro(txtNome));
txtEmail.addEventListener("change",() => removerErro(txtEmail));
txtCelular.addEventListener("change",() => removerErro(txtCelular));
txtNome.addEventListener("keyup",mascNome);
txtCelular.addEventListener("keypress",mascCelular);
txtCep.addEventListener("keypress",mascCep);

