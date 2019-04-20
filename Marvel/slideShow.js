const estrutura = () => {
   const $conteiner = document.querySelector ( ".conteiner-slide" );
   const $anterior = document.createElement("div");
   const $slide = document.createElement ("div");
   const $proximo = document.createElement("div");

   $anterior.id = "anterior";
   $anterior.innerText = "«";
   $slide.classList.add ("conteiner-heroi");
   $proximo.id = "proximo";
   $proximo.innerText = "»";

   $conteiner.insertAdjacentElement('beforeend', $anterior);
   $conteiner.insertAdjacentElement('beforeend', $slide);
   $conteiner.insertAdjacentElement('beforeend', $proximo);
}

const slideShow = imagens => {


   const $conteinerHeroi = document.querySelector(".conteiner-heroi")
   while ($conteinerHeroi.firstChild) {
      $conteinerHeroi.removeChild($conteinerHeroi.firstChild);
   }
 
   imagens.map ( e => {
      const heroi = document.createElement("div");
      heroi.innerHTML  = `
         <div class="titulo">${e.nome}</div>
         <div class="imagem">
            <img src="${e.imagem}"> </img>
         </div>
         <div class="descricao">${e.descricao}</div>
      `;

      $conteinerHeroi.insertAdjacentElement('beforeend', heroi);
   })   

}

const proximo = () =>{
   const larguraDiv = 75;
   const $imagens = document.querySelectorAll(".conteiner-heroi > div");
   const margem = $imagens[0].style.marginLeft.replace(/vw/,"");
   const ultimoSlide = ($imagens.length - 1) * -larguraDiv;
   
   if ( margem == "" ) {
      $imagens[0].style.marginLeft = `-${larguraDiv}vw`;
   } else if ( margem == ultimoSlide ) {
      $imagens[0].style.marginLeft = '0vw';
   } else {
      $imagens[0].style.marginLeft = `${margem - larguraDiv}vw`;
   } 
}
const anterior = () =>{
   const larguraDiv = 75;
   const $imagens = document.querySelectorAll(".conteiner-heroi > div");
   const margem = $imagens[0].style.marginLeft.replace(/vw/,"");
   const ultimoSlide = ($imagens.length - 1) * larguraDiv;

   if ( margem == "" ) {
      $imagens[0].style.marginLeft = `-${ultimoSlide}vw`;
   } else if ( margem == 0 ) {
      $imagens[0].style.marginLeft = `-${ultimoSlide}vw`;
   } else {
      $imagens[0].style.marginLeft = `${+margem + larguraDiv}vw`;
   } 
}

estrutura();

document.querySelector("#proximo").addEventListener("click" , proximo);
document.querySelector("#anterior").addEventListener("click" , anterior);