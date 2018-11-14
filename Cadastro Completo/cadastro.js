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

let codigo = 2;

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


// const teste2 = document.getElementById('estado');

// console.log(teste2.value);
// console.log(teste2.options);

// const url = 'https://viacep.com.br/ws/18135300/json/';
// fetch (url)
//    .then(res => res.json())
//    .then(dados => console.log(dados.bairro))

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



mostrarBD = () => {
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

limparCampos= ()=>{
   const campos = Array.from(document.querySelectorAll("input[type='text'], select" ));
   campos.map (tag => tag.value = "");
   Array.from(rdoSexo).map (opt => opt.checked = false);
}

cadastrarAluno = () => {
   
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

   mostrarBD();
}

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

atualizarNome = () => {

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

deletarNome = () => {
   const id = prompt ('Digite o id para deletar');
   bd.splice(id,1);
   exibirBD();
};


cancelarAtualizacao = () => {
   mudarEstado("normal");
   limparCampos(); 
};

atualizarCancelar = () => {
   if (btnAtualizar.textContent == "Cancelar"){
      cancelarAtualizacao();
   }else{
      atualizarNome();
   };
};

mostrarBD();
//Eventos
btnCadastrar.addEventListener('click',cadastrarAluno);
btnAtualizar.addEventListener('click',atualizarCancelar);
btnDeletar.addEventListener('click',deletarNome);