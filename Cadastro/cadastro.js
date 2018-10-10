const btnCadastrar = document.getElementById('cadastrar');
const btnAtualizar = document.getElementById('atualizar');
let palco = document.getElementById('palco');
let nomes = [];

cadastraNome = function () {
  let novoNome = prompt('Qual o nome da pessoa?');
  nomes.push(novoNome);
  render();
}

btnCadastrar.addEventListener('click',cadastraNome)

btnAtualizar.addEventListener('click',atualizarNome);


function render() {
  palco.innerHTML = '<strong>Tamanho da nossa lista de nomes:</strong> ' + nomes.length;
  palco.innerHTML += '<br>';
  nomes.forEach(function (nome, index) {
      palco.innerHTML += '<strong>' + index + '</strong> ' + nome;
      palco.innerHTML += '<br>';
  });
}

professor2 = aluno => 'profissional'

alert (professor2());

function cadastraNome2(event) {
  let novoNome = prompt('Qual o nome da pessoa?');
  nomes.push(novoNome);
  render();
}
function atualizarNome() {
  let posicao = prompt('Qual é a posição que você quer atualizar?');
  let nomeAtualizado = prompt('Qual o novo valor do nome?');
  nomes[posicao] = nomeAtualizado;
  render();
}