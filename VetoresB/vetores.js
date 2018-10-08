const nomes = ["Flavio","Clara","Celso","Paulo","Jéssica","Fernando","Ana","Maria","José","Andre","Marta","Cleyde","Artur","Nicolas","Cintia","Henrique","Pedro","Mariana","Marcelo","Marina","Nelson","Felipe"];
const profissoes = ["Professor","Programador","WEB Master","SysAdmin","DevOps",]
const btnEx01 = document.getElementById("Ex01");
const btnEx02 = document.getElementById("Ex02");
const btnEx03 = document.getElementById("Ex03");
const btnEx04 = document.getElementById("Ex04");
const btnEx05 = document.getElementById("Ex05");
const btnEx06 = document.getElementById("Ex06");
const btnEx07 = document.getElementById("Ex07");
const btnEx08 = document.getElementById("Ex08");
const btnEx09 = document.getElementById("Ex09");
const btnEx10 = document.getElementById("Ex10");

//função cria numeros aleatorios
function aleatorios (min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min );
}

btnEx01.addEventListener("click",function(){
    
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //Processamento
    const B = [];
    for (let i=0; i < 10; i++){
        B.push (A[i]*10);
    }
    //saída de dados
    const tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th><th>Vetor B</th></tr>"
    for (let i=0; i < 10; i++){
        textoTabela += "<tr><td>" + A[i] + "</td><td>" + B[i] +"</td></tr>";
    }
    
    tbResultados.innerHTML = textoTabela
  
});

btnEx02.addEventListener("click",function(){
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //Processamento
    const B = [];
    for (let i=0; i < 10; i++){
        B.push (A[i]**2);
    }
    //saída de dados
    let tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th><th>Vetor B</th></tr>"
    for (let i=0; i < 10; i++){
        textoTabela += "<tr><td>" + A[i] + "</td><td>" + B[i] +"</td></tr>";
    }
       
    tbResultados.innerHTML = textoTabela
  
});

btnEx03.addEventListener("click",function(){
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //Processamento
    const B = [];
    for (let i=9; i >= 0; i--){
        B.push (A[i]);
    }
    //saída de dados
    let tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th><th>Vetor B</th></tr>"
    for (let i=0; i < 10; i++){
        textoTabela += "<tr><td>" + A[i] + "</td><td>" + B[i] +"</td></tr>";
    }
       
    tbResultados.innerHTML = textoTabela
  
});

btnEx04.addEventListener('click',function(){
    const A = [];
    for (let i=0;i<10;i++){
        A.push (aleatorios(1,7));
    }

    const B = [];
    for (let i=0;i<10;i++){
        let cont = 0;
        for (let j=0;j<10;j++){
            if (A[i] == A[j] ){
                cont++;
            }
        }
        if (cont == 1){
            B.push(A[i]);
        }
    }

    let tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th><th>Vetor B</th></tr>"
    for (let i=0; i < 10; i++){
        if (i <= B.length -1 ) {
            textoTabela += "<tr><td>" + A[i] + "</td><td>" + B[i] +"</td></tr>";
        }
        else{
            textoTabela += "<tr><td>" + A[i] + "</td><td></td></tr>";
        }
    }
       
    tbResultados.innerHTML = textoTabela;


});

btnEx05.addEventListener('click',function(){
    const A=[];
    for (let i=0;i<10;i++){
        A.push (nomes[aleatorios(0,13)]);
    }

    let pos = -1;
    while (pos < 0 || pos > 9){
        pos = prompt("Digite um número entre 0 e 9:");
    }

    alert(A[pos]);

    let tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th></tr>"
    for (let i=0; i < 10; i++){
        if (i == pos){
            textoTabela += "<tr bgcolor='#e88f63'><td>" + A[i] + "</td></tr>";
        }
        else{
            textoTabela += "<tr><td>" + A[i] + "</td></tr>";
        }     
    }
    
    tbResultados.innerHTML = textoTabela

});

btnEx06.addEventListener('click',function(){
    const A=[];
    for (let i=0;i<10;i++){
        A.push (nomes[aleatorios(0,13)].toUpperCase() );
    }

    const nome = prompt("Digite um nome:");
    const pos = A.indexOf(nome.toUpperCase());

    if (pos == -1){
        alert ("Nome não cadastrado!!!")
    }

    let tbResultados = document.getElementById("resultados")
    let textoTabela = "<tr><th>Vetor A</th></tr>"
    for (let i=0; i < 10; i++){
        if (i == pos){
            textoTabela += "<tr bgcolor='#e88f63'><td>" + A[i] + "</td></tr>";
        }
        else{
            textoTabela += "<tr><td>" + A[i] + "</td></tr>";
        }     
    }
    
    tbResultados.innerHTML = textoTabela

});

btnEx07.addEventListener('click',function(){
    const nome = [];
    const profissao = [];
    let qtdProfessores = 0;
    const tbResultados = document.getElementById("resultados");
    let textoTabela = "<tr><th>Nomes</th> <th>Profissões</th></tr>"

    for (let i=0; i<20; i++){
        nome.push (nomes[aleatorios(0,nomes.length-1)]);
        profissao.push (profissoes[aleatorios(0,profissoes.length-1)]);
    }

    for (let i=0; i<20; i++){
        if (profissao[i] == "Professor"){
            qtdProfessores++; 
        }
    }

    for (let i=0; i<20; i++){
        textoTabela += "<tr><td>" + nome[i] + "</td> <td>"+ profissao[i] +"</td></tr>"    
    }
    
    textoTabela += "<tr><td> Total de professores: </td> <td>"+ qtdProfessores +"</td></tr>"

    tbResultados.innerHTML = textoTabela; 

});


btnEx08.addEventListener('click',function(){
    const valores = [];
    const pares = [];
    const impares = [];
    let texto = "<tr><th>Valores</th><th>Pares</th><th>Ímpares</th></tr>"
    const tbResultados = document.getElementById('resultados');
    let somaP = 0;
    let somaI = 0;

    for (let i=0;i<10;i++){
        valores.push (aleatorios(1,100));
    }

    for (let i=0;i<10;i++){
        const resto = valores[i] % 2;
        if ( resto == 0 ){
            pares.push (valores[i]);
            somaP += valores[i];
        }else{
            impares.push (valores[i]);
            somaI += valores[i];
        }
    }

    for (let i=0;i<10;i++){
 
        let textoP = i < pares.length ? pares[i] : "";

        let textoI = i < impares.length ? impares[i] : "";

        texto += "<tr><td>" + valores[i] + "</td><td>" + textoP + "</td><td>" + textoI + "</td></tr>"
    }

    texto += "<tr bgcolor='#bacff2'><td> Total: </td><td>" + pares.length + "</td><td>" + impares.length + "</td></tr>"
    texto += "<tr bgcolor='#bacff2'><td> Soma: </td><td>" + somaP + "</td><td>" + somaI + "</td></tr>"
    tbResultados.innerHTML = texto;
})

btnEx09.addEventListener('click',function(){
    const valores = [];
    const pares = [];
    const impares = [];
    let texto = "<tr><th>Valores</th><th>Pares</th><th>Ímpares</th></tr>"
    const tbResultados = document.getElementById('resultados');

    for (let i=0;i<10;i++){
        valores.push (aleatorios(1,100));
    }

    for (let i=0;i<10;i++){
        const resto = valores[i] % 2;
        if ( resto == 0 ){
            pares.push (valores[i]);
        }else{
            impares.push (valores[i]);
        }
    }

    for (let i=0;i<10;i++){
 
        let textoP = i < pares.length ? pares[i] : "";

        let textoI = i < impares.length ? impares[i] : "";

        texto += "<tr><td>" + valores[i] + "</td><td>" + textoP + "</td><td>" + textoI + "</td></tr>"
    }

    tbResultados.innerHTML = texto;
})

btnEx10.addEventListener ('click',function(){
    const numeros = [];

    for (let i=0;i<100;i++){
        numeros.push (aleatorios(1,9999));
    }

    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);


    alert ("O menor número é: " + minimo + "\nO maior número é: " + maximo);
   

})

