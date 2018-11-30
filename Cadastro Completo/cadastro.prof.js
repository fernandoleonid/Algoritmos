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
let codigo = 3;
let indiceAtualizar = -1;
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
   uf: "MG",
   cep: "18135300",
},
{
   codigo:3,
   nome:"Maria",
   sexo:"f",
   email: "maria@gmail.com",
   celular: "11123456789",
   end: "Av. Pedro Lucas",
   numero: 202,
   Bairro: "Centro",
   Cidade: "Jandira",
   uf: "ES",
   cep: "13125401",
}];

// Consumir uma API pública 
const url = 'https://viacep.com.br/ws/18135300/json/';
fetch (url)
   .then(res => res.json())
   // .then(dados => console.log(dados));
   .then(dados => preencheComApi(dados));

const preencheComApi = (infCep) => {
      txtBairro.value = infCep.bairro;
      txtCidade.value = infCep.localidade;
   }
// Fim


// const url='http://127.0.0.1:5001/novo/'
// fetch(url, {
//    method: 'post',
//    mode: 'no-cors',
//    headers: {
//     //'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
//     "Content-type": "application/json; charset=UTF-8"
//    },
//    //body: 'nome=Maria&data_nacimento=19990609&matricula=123&cfp=29619819802'
//    //JSON.stringify(
//    body: JSON.stringify({
//       'nome': "Maria",
//       'data_nacimento': "19990609",
//       'matricula': "125",
//       'cpf': "29619819802"
//    })
// })
// .then(function (data) {  
//  console.log('Request success: ', data);  
// })  
// .catch(function (error) {  
//  console.log('Request failure: ', error);  
// });

limparCampos = () =>{
   const campos = Array.from(document.querySelectorAll('input[type=text],select'));
   campos.map (e => e.value="");
}
estadoBotoes = (estado) => {
   
   if (estado == 'edição'){
      btnCadastrar.textContent = 'Salvar';
      btnAtualizar.style.display = 'none';
      btnDeletar.textContent = 'Cancelar';
   }else{
      btnCadastrar.textContent = 'Cadastrar Nome';
      btnAtualizar.style.display = 'inline-block';
      btnDeletar.textContent = 'Deletar nome';
   };
};
verificarCampos = () =>{
   
   let verificador = true;
   
   if (!txtNome.value){
      txtNome.classList.add('erro');
      txtNome.placeholder = "Erro: Digite seu nome completo!"
      verificador = false;
   };
   if (!txtEmail.value){
      txtEmail.classList.add('erro');
      txtEmail.placeholder = "Erro: Digite seu email!"
      verificador = false;
   };
   if (!txtCelular.value){
      txtCelular.classList.add('erro');
      txtCelular.placeholder = "Erro: Digite seu telefone!"
      verificador = false;
   };

   return verificador;
}

exibirBD = () => {
   const tb = document.getElementById('bd');
   const max = tb.rows.length;
   for (let i=1; i<max;i++){ tb.deleteRow(1);};

   bd.map((aluno) => tb.insertAdjacentHTML('beforeend',`
      <tr>
         <td>${aluno.codigo}</td>
         <td>${aluno.nome}</td>
         <td>${aluno.sexo}</td>
         <td>${aluno.email}</td>
         <td>${aluno.celular}</td>
      </tr>`));
}


salvarAtualizacao = () => {
   const aluno = bd[indiceAtualizar];
   aluno.nome = txtNome.value;
   aluno.sexo = rdoSexo[0].checked ? "m": "f";
   aluno.email = txtEmail.value;
   aluno.celular = txtCelular.value;
   aluno.end = txtEnd.value;
   aluno.numero = txtNumero.value;
   aluno.Bairro = txtBairro.value;
   aluno.Cidade = txtCidade.value;
   aluno.uf = cmbEstado.value;
   aluno.cep = txtCep.value;
   exibirBD();
   estadoBotoes('normal');
   limparCampos();

}
cadastrarAluno = () => {
   
   if (verificarCampos()) {
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

   exibirBD();
   } else {
      alert ("Verifique os campos em destaque!!!");
   };
};
salvar = () => {
   if (btnCadastrar.innerHTML == 'Salvar'){
      salvarAtualizacao();
   }else{
      cadastrarAluno();
   };
};
preencherFormulario = (indice) => {
   
   const aluno = bd[indice];
   const indiceSexo = aluno.sexo == "m" ? 0 : 1 // encontra o Índice
   const UFs = ['SP','RJ','MG','ES'];// encontra o Índice
   const indiceUF = UFs.indexOf(aluno.uf);
   
   txtNome.value =  aluno.nome; 
   rdoSexo[indiceSexo].checked = true;
   txtEmail.value = aluno.email;
   txtCelular.value = aluno.celular;
   txtEnd.value = aluno.end;
   txtNumero.value = aluno.numero;
   txtBairro.value = aluno.Bairro;
   txtCidade.value = aluno.Cidade;
   cmbEstado.selectedIndex = indiceUF;
   txtCep.value = aluno.cep;
}


atualizarNome = () => {

   const codigo = prompt ('Digite o código para atualizar');
   indiceAtualizar = bd.findIndex(aluno => aluno.codigo == codigo);
   //Verifica a existência do código, caso não exista sai da função
   if (indiceAtualizar != -1) {
      preencherFormulario (indiceAtualizar);
      estadoBotoes ('edição');
      exibirBD();
   }else{
      alert ("Código não encontrado!!");
   }
}

deletarNome = () => {
   
   const codigo = prompt ('Digite o codigo para excluir o aluno do cadastro!');
   const indice = bd.findIndex (aluno => aluno.codigo == codigo);
   if (indice == -1){
      alert ("Código não existente!")
   }
   else{
      bd.splice(indice,1);
      exibirBD();
   };
   
}


exibirBD();

removerErro = (txt) => {
   txt.classList.remove('erro');
   txt.placeholder = "";
 }
 deletarCancelar = () => {
    if (btnDeletar.textContent == 'Cancelar'){
       estadoBotoes('normal');
       limparCampos();
    }else{
       deletarNome();
    }
 }
//Eventos
btnCadastrar.addEventListener('click',salvar);
btnAtualizar.addEventListener('click',atualizarNome);
btnDeletar.addEventListener('click',deletarCancelar);
txtNome.addEventListener('change', () => removerErro(txtNome));
txtEmail.addEventListener('change', () => removerErro(txtEmail));
txtCelular.addEventListener('change', () => removerErro(txtCelular));
