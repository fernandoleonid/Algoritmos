//botões de acesseço
const btncadastrar = document.getElementById("cadastrar");
const btnatualizar = document.getElementById("atualizar");
const btnexcluir = document.getElementById("deletar");

//caixas de texto
const txtNome = document.getElementById('nome');
const rdoSexo = document.getElementsByName('sexo');
const txtEmail = document.getElementById('email');
const txtCelular = document.getElementById('celular');
const txtEnd = document.getElementById('endereco');
const txtNumero = document.getElementById('numero');
const txtBairro = document.getElementById('bairro');
const txtCidade = document.getElementById('cidade');
const cmbEstado = document.getElementById('estado');
const txtCep = document.getElementById('cep');

// variaveis globais
let codigo = 2;
let indiceAtual = -1;//indice não encontrado

const url = 'https://viacep.com.br/ws/18135300/json/';
fetch (url)
   .then(res => res.json())
   .then(dado => {
      txtBairro.value = dado.Bairro
   } );
   

// Arry bo banco fiquiticio


const banco = [
    {   id:1,
        nome:"David",
        sexo:"m",
        email:"David@hotmail.com",
        celular: "11971657461",
        end: "Av,. são Menoel",
        numero: 21,
        Bairro:"jd.villaça",
        cidade:"Jandira",
        uf: "SP",
        cep:"18175740"
    },
    {   id:2,
        nome:"Ana",
        sexo:"f",
        email:"AnaSilva@hotmail.com",
        celular: "119715648792",
        end: "Av,. são Jorge",
        numero: 68,
        Bairro:"jd.Vila velha",
        cidade:"Osasco",
        uf: "MG",
        cep:"18175980",
    },
    {   id:3,
        nome:"Edivaldo",
        sexo:"m",
        email:"Edivaldo@hotmail.com",
        celular: "119718548792",
        end: "Av,. Antonio",
        numero: 46,
        Bairro:"jd.Folha velha",
        cidade:"Osasco",
        uf: "RJ",
        cep:"1828980",
    }
];

//FUNÇÕES

const emailValido = (email) => {
   const er = /[0-9a-z._-]+@[0-9a-z]+([.][a-z]+)+/;

   return er.test (email);
};

const celularValido = (celular) => {
   const er = /[(][0-9]{2}[)] ?9[0-9]{4}-[0-9]{4}/;
   return er.test(celular);
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

   if (!celularValido(txtCelular.value)){
      txtCelular.classList.add ("erro");
      semErro = false;
   };

   return semErro;
};

cadastrarAluno = () => {

   if (verificarCampos()) {
      codigo++;

      const novoAluno = 
         {
            id:codigo,
            nome:txtNome.value,
            sexo:rdoSexo[0].checked ? "m" : "f",
            email:txtEmail.value,
            celular: txtCelular.value,
            end: txtEnd.value,
            numero: txtNumero.value,
            Bairro: txtBairro.value,
            cidade:txtCidade.value,
            uf: cmbEstado.value,
            cep: txtCep.value
         }

      banco.push(novoAluno);
      exibirBD();
      limparCampos();
   } else{
      alert ("Preencha os campos em destaque!")
   };
};

const preencherFormulario = () =>{

    const codigo = parseInt(prompt("Digite um id para atualizar o cadastro."));
    indiceAtual = banco.findIndex(aluno => aluno.id == codigo);

    if (indiceAtual == -1) {
       alert ("Registro não encontrado!");
    } else {
      const aluno = banco[indiceAtual];
      const iSexo = aluno.sexo == 'm' ? 0 : 1;
      cmbEstado.selectedIndex = ['SP','RJ','MG','ES'].indexOf(banco[indiceAtual].uf);

      txtNome.value = aluno.nome;
      txtBairro.value = aluno.Bairro;
      txtCidade.value = aluno.cidade;
      txtNumero.value = aluno.numero;
      txtEnd.value = aluno.end;
      txtEmail.value = aluno.email;
      rdoSexo[iSexo].checked = true;
      txtCelular.value = aluno.celular;
      txtCep.value = aluno.cep;
      
      mudarEstado("edição");
    };
};


const mudarEstado = (estado) =>{
    if(estado == "normal"){
        btnexcluir.style.display = "inline";
        btncadastrar.textContent = "Cadastrar Aluno";
        btnatualizar.textContent = "Atualizar Aluno";
    }else{
        btnexcluir.style.display = "none";
        btncadastrar.textContent = "Salvar";
        btnatualizar.textContent = "Cancelar";
    }
}

const cancelarAtualizacao = () => {
   mudarEstado ("normal");
   limparCampos ();
}

const atualizarCancelar = () =>{
    if(btnatualizar.textContent == "Cancelar"){
        cancelarAtualizacao();
    }else{
        preencherFormulario();
    }
}
 
/* Excluir nome do vetor*/
const excluirAluno = () => {
   const codigo = prompt("Digite um código para excluir");
   indiceExcluir = banco.findIndex(aluno => aluno.id == codigo);
   if(indiceExcluir == -1 ){
        alert ("Registro não encontrado!")
   }else{
      banco.splice(indiceExcluir, 1); 
      exibirBD();
   };
};


const limparCampos = ()=>{
    
    const elementos = Array.from(document.querySelectorAll('input[type=text], select'));
    elementos.map(e => e.value="");
    Array.from(rdoSexo).map(e => e.checked = false);
}


const mostrarAluno = (Aluno) => {
    txtNome.value = banco[Aluno].nome;
    txtEmail.value=banco[Aluno].email;
    txtCelular.value=banco[Aluno].celular;
    txtCep.value=banco[Aluno].cep;
    txtNumero.value=banco[Aluno].numero;
    txtBairro.value=banco[Aluno].Bairro;
    txtCidade.value=banco[Aluno].cidade; 
    rdoSexo[0].checked ? "m" : "f";
    txtEnd.value=banco[Aluno].end;

}

/* colocar dados no banco */
const exibirBD = () =>{  
   const tdResult = document.getElementById("bd");
      //Remover todas as linhas da tabela
      while(tdResult.firstChild){
        tdResult.removeChild(tdResult.firstChild);
      };
   banco.map((aluno) => tdResult.insertAdjacentHTML('beforeend',`
        <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.sexo}</td>
            <td>${aluno.email}</td>
            <td>${aluno.celular}</td>
        </tr>`)
    );

}

const atualizarAluno = () => {
    const aluno = banco[indiceAtual];
    aluno.nome = txtNome.value;
    aluno.sexo = rdoSexo[0].checked ? "m" : "f";
    aluno.email = txtEmail.value;
    aluno.Bairro = txtBairro.value;
    aluno.celular = txtCelular.value;
    aluno.cidade = txtCidade.value;
    aluno.numero = txtNumero.value;
    aluno.end = txtEnd.value;
    aluno.uf = estado.value;
    aluno.cep = cep.value;
    mudarEstado("normal");
    limparCampos();
    exibirBD();
}

const cadastrarSalvar = ()=>{
    if(cadastrar.textContent == "Salvar"){
        atualizarAluno();
    }else{
        cadastrarAluno();
    };
};

const removerErro = (elem) => {
   elem.classList.remove ("erro");
};
const mascNome = () =>{
   let texto = txtNome.value;

   texto = texto.replace(/[^a-zA-Z À-ÿ]/,"");

   txtNome.value = texto;
};

const mascCelular = () => {
   let texto = txtCelular.value;

   texto = texto.replace(/[^0-9]/g,"");
   texto = texto.replace(/(^.)/,"($1");
   texto = texto.replace(/^(.{3})/,"$1) ");
   texto = texto.replace (/^(.{9})/,"$1-");

   txtCelular.value = texto;
};

exibirBD();

/*Eventos*/
btncadastrar.addEventListener("click", cadastrarSalvar);
btnatualizar.addEventListener("click", atualizarCancelar);
btnexcluir.addEventListener("click", excluirAluno);
txtNome.addEventListener("change", () => removerErro (txtNome));
txtEmail.addEventListener("change", () => removerErro (txtEmail));
txtCelular.addEventListener("change", () => removerErro (txtCelular));
txtNome.addEventListener("keyup",mascNome);
txtCelular.addEventListener("keyup",mascCelular);