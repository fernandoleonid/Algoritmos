const $modal = document.querySelector( ".conteiner-modal" );
const $novo = document.querySelector ( "#novo" );
const $fechar = document.querySelector ( "#fechar" );
const $salvar = document.querySelector ( "#salvar" );
const $nome = document.querySelector ( "#nome" );
const $email = document.querySelector ( "#email" );
const $celular = document.querySelector ( "#celular" );
const $endereco = document.querySelector ( "#endereco" );
const $numero = document.querySelector ( "#numero" );
const $bairro = document.querySelector ( "#bairro" );
const $cidade = document.querySelector ( "#cidade" );
const $estado = document.querySelector ( "#estado" );
const $cep = document.querySelector ( "#cep" );

const pipe = (...fns) => arg => fns.reduce( ( val, fn ) => fn ( val ), arg );



const limitarCaracteres = () => {
   $nome.maxLength = 60;
   $email.maxLength = 60;
   $celular.maxLength = 14;
   $endereco.maxLength = 60;
   $numero.maxLength = 4;
   $bairro.maxLength = 40;
   $cidade.maxLength = 40;
   $estado.maxLength = 2;
   $cep.maxLength = 9;   
}

const filtrarTexto = texto => texto.replace(/[^A-Za-zÀ-ÿ ]/g,"");

const filtrarNumero = texto => texto.replace(/[^0-9]/g,"");

const filtrarEmail = texto => texto.replace(/[^@-Za-z0-9_.-]/g,"");

const filtrarEndereco = texto => texto.replace (/[^A-Za-zÀ-ÿ0-9. ]/g,"" );

const abrirModal = (el) => el.classList.add("exibirModal");

const fecharModal = (el) => el.classList.remove("exibirModal");

const maiuscula = texto => texto.toUpperCase().trim();

const addHifenCep = numeros => numeros.replace (/(.{5})(.)/,"$1-$2");

const mascaraEstado = pipe(filtrarTexto,maiuscula);

const mascaraCep = pipe(filtrarNumero,addHifenCep)

const validarCampos = () => {

   const $campos = Array.from( document.querySelectorAll ("input") );
   
   const camposVazios = $campos.filter( campo => campo.value == false );

   camposVazios.map( campos => campos.classList.add("erroCampo") );

   return camposVazios.length == 0;

}

const removerErro = (campo) => campo.classList.remove("erroCampo");

const salvarAluno = () => {
   if (validarCampos()){
      salvarDados();
      exibirDados();
      limparCampos();
   }else{
      alert("Verifique os campos!!!")
   }
}

const mascaraCelular = texto => filtrarNumero(texto)
                              .replace(/(.)/,"($1")
                              .replace(/(.{3})(.)/,"$1)$2")
                              .replace(/(.{9})(.)/,"$1-$2");

const preencherCampos = endereco => {
   $endereco.value = endereco.logradouro;
   $bairro.value = endereco.bairro;
   $cidade.value = endereco.localidade;
   $estado.value = endereco.uf;
}

const encontrarEndereco = cep => {

   if ( cep.length == 9 ) {

      const url = `https://viacep.com.br/ws/${cep}/json/`
      const viacep = fetch (url)
               .then ( response => response.json() )
               .then ( response => preencherCampos(response) );

   }
}
limitarCaracteres()

$novo.addEventListener ("click", () => abrirModal($modal));
$fechar.addEventListener ("click", () => fecharModal($modal));
$salvar.addEventListener ("click", salvarAluno);
$nome.addEventListener("keyup", () => $nome.value = filtrarTexto($nome.value));
$email.addEventListener("keyup", () => $email.value = filtrarEmail($email.value));
$numero.addEventListener("keyup", () => $numero.value = filtrarNumero($numero.value));
$endereco.addEventListener("keyup", () => $endereco.value = filtrarEndereco($numero.value) );
$bairro.addEventListener("keyup", () => $bairro.value = filtrarTexto($bairro.value));
$cidade.addEventListener("keyup", () => $cidade.value = filtrarTexto($cidade.value));
$estado.addEventListener("keyup", () => $estado.value = mascaraEstado($estado.value));
$celular.addEventListener("keyup", () => $celular.value = mascaraCelular($celular.value));
$cep.addEventListener("keyup", () => $cep.value = mascaraCep($cep.value));
$cep.addEventListener("keyup", () => encontrarEndereco($cep.value));