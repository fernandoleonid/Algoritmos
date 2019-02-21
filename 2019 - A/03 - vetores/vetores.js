const testeVetores = () => {
   const numeros = [548,1024,65536,999,"fernando","senai"];

   //exibir array inteiro
   console.log( numeros);

   //adiciona um elemento no final do array
   numeros.push(113);
   console.log( numeros);

   //adiciona um elemento no inicio do array
   numeros.unshift(23);
   console.log(numeros);

   //exclui o último elemento
   numeros.pop();
   console.log(numeros);

   //exclui o primeiro elemento
   numeros.shift();
   console.log(numeros);

   //modifica o array
   numeros.splice(1,0,888);
   console.log(numeros);

   // retorna o índice do elemento
   const indice = numeros.indexOf("fernandos");
   console.log("índice: ", indice);

   // exclui o elemento pelo índice encontrado
   numeros.splice(indice,1);
   console.log(numeros);

   //atribui o tamanho do array
   const tamanho = numeros.length;
   console.log("Tamanho:", tamanho);

   //exibir cada elemento do array
   for (let i=0; i<tamanho; i++ ){
      console.log(numeros[i]);
   }
}

testeVetores();