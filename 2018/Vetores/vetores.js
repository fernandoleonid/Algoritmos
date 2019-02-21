const btnVetores = document.getElementById("vetores");

btnVetores.addEventListener('click',function(){
    
    const nomes = ["fernando", "maria", "marta","Artur"];
    
    //acessar o elemento pelo indice
    console.log (nomes[1]);

    //tamanho do array
    console.log (nomes.length);

    //adiciona um elemento no final do array
    nomes[nomes.length] = "joão"

    //adiciona um elemento no final do array 
    nomes.push ( "Nicolas");
    console.log (nomes);

    //adiciona um elemento no inicio do array 
    nomes.unshift("Marcos");
    console.log (nomes);

    //remove o ultimo elemento do array
    nomes.pop ();
    console.log (nomes);

    //remove o primeiro elemento do array
    nomes.shift();
    console.log (nomes);

    //remove no indice indicado e a quantidade de elementos
    nomes.splice(3,1);
    console.log (nomes);

    //procura e retorna o indice
    console.log ( nomes.indexOf ("maria") );

    //popular/adicionar varios elementos em um array
    let cont = 0;
    const A = [];

    while (cont < 100){
        let num = Math.floor((Math.random() * 10 + 1));
        A.push (num + " ---> " + "Aprovado");
        cont++;
    }
    console.log (A)




} );
