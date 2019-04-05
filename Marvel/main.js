const limparConteiner = div => {
   const $conteinerHeroi = document.querySelector(".conteiner-heroi")
   while ($conteinerHeroi.firstChild) {
      $conteinerHeroi.removeChild($conteinerHeroi.firstChild);
   }
}

const listarHerois = () => {
   const privateKey = '3da5108fcffe42e52fd4a86d63f61cfb0074c47a';
   const publicKey  = '077af09c8bf8503d3b9865be5d7f8aec';
   const ts = Date.now();
   const hash = md5(ts + privateKey + publicKey);
   const opt = document.querySelector("#opt").value
   const URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${opt}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

   limparConteiner()

   var marvel = fetch(URL)
    .then(response => response.json())
    .then(response => response.data.results.map( heroi => exibirHeroi(heroi)));
};

const exibirHeroi = e => {
   const $conteinerHeroi = document.querySelector(".conteiner-heroi")
   const nome = e.name;
   const descricao = e.description;
   const imagem = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`

   const heroi = document.createElement("div");
   heroi.innerHTML  = `
      <div class"titulo">${nome}</div>
      <div class="imagem">
        <img src="${imagem}"> </img>
      </div>
      <div class="descricao">${descricao}</div>
   `;
   
   $conteinerHeroi.insertAdjacentElement('beforeend', heroi)

}

document.querySelector ("#btn").addEventListener("click", listarHerois);