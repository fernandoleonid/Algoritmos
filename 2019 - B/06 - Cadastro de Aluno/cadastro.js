const $novoAluno = document.querySelector( "#novo" );
const $fechar = document.querySelector( "#fechar" );
const $salvar = document.querySelector( "#salvar");
const $nome = document.querySelector( "#nome" );
const $cidade = document.querySelector( "#cidade" );
const $numero =  document.querySelector( "#numero");
const $cep = document.querySelector( "#cep" );
const $email = document.querySelector( "#email" );
const $celular = document.querySelector( "#celular");
const $endereco = document.querySelector( "#endereco");
const $bairro = document.querySelector( "#bairro");
const $estado = document.querySelector( "#estado");

const limitarCaracteres = () => {
   $nome.maxLength = 60;
   $email.maxLength = 60;
   $celular.maxLength = 16;
   $endereco.maxLength = 30;
   $numero.maxLength = 4;
   $bairro.maxLength = 20;
   $cidade.maxLength = 20;
   $estado.maxLength = 2;
   $cep.maxLength = 9;
}

const abrirModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.add ("exibirModal");
}

const fecharModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.remove ("exibirModal");
}

const camposOK = () => {

   const $campos = Array.from(document.querySelectorAll("input[type=text]"));
   
   const tamanho = $campos.filter( (campo) => campo.value == false ).length
   
   return tamanho == 0;

}


const salvarNovoAluno = () => {
   if (camposOK()){ ;
      adicionarNovoAluno();
      limparCampos();
   } else {
      alert ("Verifique os campos!!!")
   }
}

const maiusculo = texto => texto.toUpperCase();
const filtrarTexto = texto => texto.replace (/[^A-Za-z À-ÿ]/g, "");
const filtrarNumero = texto => texto.replace (/[^0-9]/g,"");
const filtrarAlfaNumerico = texto => texto.replace(/[^A-Za-z À-ÿ0-9.-]/g,"")

const mascaraNome = texto => filtrarTexto(maiusculo(texto));

const mascaraEstado = texto => filtrarTexto(maiusculo(texto));

const mascaraEmail = texto => texto.replace (/[^A-Za-z0-9_@.-]/g, "");

const mascaraCelular = texto => texto.replace(/[^0-9]/g,"")
                                    .replace(/(.)/,"($1")
                                    .replace(/(.{3})(.)/,"$1) $2")
                                    .replace(/(.{6})(.)/,"$1 $2")
                                    .replace(/(.{11})(.)/,"$1-$2");
   

const addHifenCep = texto => texto.replace(/(.{5})(.)/,"$1-$2");

const mascaraCep = texto => addHifenCep(filtrarNumero(texto));

const preencherCampos = endereco => {
   $endereco.value = endereco.logradouro;
   $bairro.value = endereco.bairro;
   $cidade.value = endereco.localidade;
   $estado.value = endereco.uf;

}

const encontrarEndereco = cep => {

   if ( $cep.value.length == 9 ){

      const url = `https://viacep.com.br/ws/${cep}/json/`
      const viacep = fetch(url)
                     .then ( response => response.json())
                     .then ( response => preencherCampos (response))
   }
}
limitarCaracteres()

$novoAluno.addEventListener ( "click", abrirModal );
$fechar.addEventListener( "click", fecharModal );
$salvar.addEventListener( "click", salvarNovoAluno );

$nome.addEventListener("keyup", () => $nome.value = mascaraNome($nome.value));
$endereco.addEventListener( "keyup", () => $endereco.value = filtrarAlfaNumerico($endereco.value) );
$bairro.addEventListener( "keyup", () => $bairro.value = filtrarAlfaNumerico($bairro.value) );
$cidade.addEventListener( "keyup", () => $cidade.value = filtrarAlfaNumerico($cidade.value) );
$numero.addEventListener( "keyup", () => somenteNumero($numero) );
$cep.addEventListener( "keyup", () => $cep.value = mascaraCep($cep.value) );
$celular.addEventListener( "keyup", () => mascaraCelular ($celular));
$estado.addEventListener("keyup", () => $estado.value = mascaraEstado($estado.value));
$email.addEventListener("keyup", () => $email.value = mascaraEmail($email.value));
$cep.addEventListener("keyup", () => encontrarEndereco($cep.value));