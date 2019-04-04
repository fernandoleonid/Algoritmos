const $novoAluno = document.querySelector("#novoAluno");
const $fechar = document.querySelector("#fechar");

const abrirModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.add ("exibirModal");
}

const fecharModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.remove("exibirModal");
}

$novoAluno.addEventListener("click", abrirModal);
$fechar.addEventListener("click", fecharModal);