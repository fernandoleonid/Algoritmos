
const listarHerois = () => {
   const privateKey = '3da5108fcffe42e52fd4a86d63f61cfb0074c47a';
   const publicKey  = '077af09c8bf8503d3b9865be5d7f8aec';
   const ts = Date.now();
   const hash = md5(ts + privateKey + publicKey);
   const opt = document.querySelector("#opt").value
   const URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${opt}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

   var marvel = fetch(URL)
    .then ( response => response.json () )
    .then ( response => response.data.results.map( heroi => infoHeroi ( heroi ) ) )
    .then ( response => slideShow ( response ) )
   //  .catch( err => console.error(err) )
    
   const infoHeroi = heroi => {
      return {
         nome: heroi.name,
         imagem: `${heroi.thumbnail.path}/portrait_uncanny.${heroi.thumbnail.extension}`,
         descricao: heroi.description
      };
   }

};
document.querySelector ("#btn").addEventListener("click", listarHerois);
document.querySelector ("#opt").addEventListener("keypress", e => e.key == "Enter" ? listarHerois() : "") ;
