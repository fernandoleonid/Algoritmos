const abrirModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.add ("exibirModal");   
}

const fecharModal = () => {
   const $modal = document.querySelector(".conteiner-modal");
   $modal.classList.remove ("exibirModal");   
}

document.getElementById("novoAluno").addEventListener("click", abrirModal);
document.getElementById("fechar").addEventListener("click", fecharModal);