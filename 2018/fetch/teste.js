// const url = 'https://viacep.com.br/ws/18135300/json/';
// fetch (url)
//    .then(res => res.json())
//    .then(dados => console.log(dados.bairro))

const url='http://127.0.0.1:5001/novo/'
fetch(url, {
   method: 'post',
   mode: 'no-cors',
   headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
   },
   body: 'nome=Maria&data_nacimento=19990609&matricula=123&cfp=29619819802'
   // JSON.stringify(
   // body: new FormData({
   //    nome: "Maria",
   //    data_nacimento: "19990609",
   //    matricula: "125",
   //    cpf: "29619819802"
   // })
})
.then(function (data) {  
 console.log('Request success: ', data);  
})  
.catch(function (error) {  
 console.log('Request failure: ', error);  
});   