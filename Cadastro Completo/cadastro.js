//variáveis globais
const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
const btnDeletar = document.getElementById('deletar');
const bd = [{
   codigo:1,
   nome:"fernando",
   sexo:"m",
   email: "fernandoleonid@gmail.com",
   celular: "11971657461",
   end: "Av. São Manoel",
   num: 21,
   Bairro: "Jd. Villaça",
   Cidade: "São Roque",
   uf: "SP",
   cep: "18135300",
   obs: "Nada a declarar"
},{
   codigo:1,
   nome:"fernando",
   sexo:"m",
   email: "fernandoleonid@gmail.com",
   celular: "11971657461",
   end: "Av. São Manoel",
   num: 21,
   Bairro: "Jd. Villaça",
   Cidade: "São Roque",
   uf: "SP",
   cep: "18135300",
   obs: "Nada a declarar"
}];


const teste2 = document.getElementById('estado');

console.log(teste2.value);
console.log(teste2.options);

// const url = 'https://viacep.com.br/ws/18135300/json/';
// fetch (url)
//    .then(res => res.json())
//    .then(dados => console.log(dados.bairro))

const url='http://127.0.0.1:5001/novo/'
fetch(url, {
   method: 'post',
   mode: 'no-cors',
   headers: {
    //'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    "Content-type": "application/json; charset=UTF-8"
   },
   //body: 'nome=Maria&data_nacimento=19990609&matricula=123&cfp=29619819802'
   //JSON.stringify(
   body: JSON.stringify({
      'nome': "Maria",
      'data_nacimento': "19990609",
      'matricula': "125",
      'cpf': "29619819802"
   })
})
.then(function (data) {  
 console.log('Request success: ', data);  
})  
.catch(function (error) {  
 console.log('Request failure: ', error);  
});   

carregarTabela = () => {
   const tb = document.getElementById('bd');
   tb.innerHTML = "<tr><th>Código</th><th>Nome</th><th>Sexo</th><th>E-mail</th><th>Celular</th></tr>";
   bd.map((usuarios,i) => 
      tb.innerHTML += `<tr>
                        <td>  ${usuarios.codigo}  </td>
                        <td>  ${usuarios.nome} </td>
                        <td>  ${usuarios.sexo}  </td>
                        <td>  ${usuarios.celular}  </td>
                        <td>  ${usuarios.end}  </td>
                      </tr>`);
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


carregarTabela();

//Eventos
btnCadastrar.addEventListener('click',cadastrarNome);
btnAtualizar.addEventListener('click',atualizarNome);
btnDeletar.addEventListener('click',deletarNome);