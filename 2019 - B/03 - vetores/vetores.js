const numeros = ["Ana","Pedro","Marta","Maria","Marlene","Marcelo","Uriel","Ariel"];
//remove o elemento de indice 4 
numeros.splice(4,1);
//remove 3 elementos a partir do indice 4
numeros.splice(4,3);
//adiciona o 999 depois do elemento de indice 4
numeros.splice(4,1,999)

console.log(numeros);

//remove o ultimo elemento do array
numeros.pop();

//remove o primeiro elemento
numeros.shift();

//adiciona um novo elemento no fim do array
numeros.push(1024);

//adiciona um novo elemento no início do array
numeros.unshift (950);

indice = numeros.indexOf("Maria");

numeros.splice(indice,1);

const tamanho = numeros.length;
//Exibi o array inteiro
for (let i=0; i<tamanho; i++){
   console.log (numeros[i]);
}


