const nomes = ["Celso","Paulo","Jéssica","Fernando","Ana","Maria","José","Andre","Marta","Cleyde","Artur","Nicolas","Cintia","Henrique","Pedro","Mariana","Marcelo","Marina","Nelson","Felipe"];
const profissoes = ["Professor","Programador","WEB Master","SysAdmin","DevOps",]

function aleatorios (min, max) {
    return Math.trunc( Math.random() * (max - min) + min );
}

btnEx01 = document.getElementById("ex01");
btnEx02 = document.getElementById("ex02");
btnEx03 = document.getElementById("ex03");
btnEx04 = document.getElementById("ex04");
btnEx05 = document.getElementById("ex05");
btnEx06 = document.getElementById("ex06");
btnEx07 = document.getElementById("ex07");
btnEx08 = document.getElementById("ex08");
btnEx09 = document.getElementById("ex09");
btnEx10 = document.getElementById("ex10");

tbResultados = document.getElementById("resultados");

btnEx01.addEventListener("click",function(){
    
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,100));
    }
    //processamento
    const B=[];
    for (let i=0; i<10; i++){
        B[i] = A[i] * 10;
    }
    //saída  
    let texto = "<tr> <th>Vetor A</th><th>Vetor B</th></tr>";
    for (let i=0; i<10; i++){
         texto += "<tr> <td>" + A[i] + "</td><td>" + B[i] + "</td></tr>";
    }
    tbResultados.innerHTML = texto;
})

btnEx02.addEventListener("click",function(){
    
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //processamento
    const B=[];
    for (let i=0; i<10; i++){
        B[i] = A[i] ** 2 ;
    }
    //saída  
    let texto = "<tr> <th>Vetor A</th><th>Vetor B</th></tr>";
    for (let i=0; i<10; i++){
         texto += "<tr> <td>" + A[i] + "</td><td>" + B[i] + "</td></tr>";
    }
    tbResultados.innerHTML = texto;
})

btnEx03.addEventListener("click",function(){
    
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //processamento
    const B=[];
    for (let i=0; i< 10; i++){
        B.unshift( A[i]);
    }
    //saída  
    let texto = "<tr> <th>Vetor A</th><th>Vetor B</th></tr>";
    for (let i=0; i<10; i++){
         texto += "<tr> <td>" + A[i] + "</td><td>" + B[i] + "</td></tr>";
    }
    tbResultados.innerHTML = texto;
})

btnEx04.addEventListener("click",function(){
    
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (aleatorios(1,10));
    }
    //processamento
    const B=[];
    for (let i=0; i< 10; i++){
        let cont = 0;
        for (let j=0; j<10; j++){
            if (A[i] == A[j]){
                cont++;
            }
        }
        if (cont == 1){
            B.push (A[i]);
        }
    }
    //saída  
    let texto = "<tr> <th>Vetor A</th><th>Vetor B</th></tr>";
    for (let i=0; i<10; i++){
        if ( i <= B.length -1 ){
            texto += "<tr> <td>" + A[i] + "</td><td>" + B[i] + "</td></tr>";
        }
        else{
            texto += "<tr> <td>" + A[i] + "</td><td></td></tr>";
        }
    }
    tbResultados.innerHTML = texto;

    
})

btnEx05.addEventListener("click",function(){
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (nomes[aleatorios(1,20)]);
    }
    //processamento
    const pos = prompt("Digite um valor:")
    alert(A[pos]);
    //saída  
    let texto = "<tr> <th>Vetor A</th></tr>";
    for (let i=0; i<10; i++){
        if (i == pos){
            texto += "<tr bgcolor=#e89f9d> <td>" + A[i] + "</td></tr>";
        }
        else{
            texto += "<tr> <td>" + A[i] + "</td></tr>";
        }
    }
    tbResultados.innerHTML = texto;

    
})

btnEx06.addEventListener("click",function(){
    //Entrada de dados
    const A = [];
    for (let i=0; i < 10; i++ ){
        A.push (nomes[aleatorios(1,20)].toUpperCase());
    }
    //processamento

    const nome = prompt("Digite um nome:")
    const pos = A.indexOf(nome.toUpperCase());
    
    alert (pos == -1 ? "Nome não cadastrado!":"Nome cadastrado!");
    
    //saída  
    let texto = "<tr> <th>Vetor A</th></tr>";
    for (let i=0; i<10; i++){
        if (i == pos){
            texto += "<tr bgcolor=#e89f9d> <td>" + A[i] + "</td></tr>";
        }
        else{
            texto += "<tr> <td>" + A[i] + "</td></tr>";
        }
    }
    tbResultados.innerHTML = texto;

    
})

btnEx07.addEventListener("click",function(){
    //Entrada de dados
    const A = [];
    const B = [];
    for (let i=0; i < 20; i++ ){
        A.push (nomes[aleatorios(0,nomes.length)]);
        B.push (profissoes[aleatorios(0,profissoes.length)]);
    }
    //processamento
    let cont = 0;
    for (let i=0; i < 20; i++){
        if (B[i] == "Professor"){
            cont++;
        }
    }
    //saída  
    let texto = "<tr><th>Vetor A</th> <th>Vetor B</th></tr>";
    for (let i=0; i<20; i++){
        if (B[i] == "Professor"){
            texto += "<tr bgcolor=#e89f9d><td>" + A[i] + "</td>  <td>" + B[i] + "</td></tr>";
        }
        else{
            texto += "<tr><td>" + A[i] + "</td>  <td>" + B[i] + "</td></tr>";
        }
    }
    texto += "<tr><th>Total de professores: </th> <th>"+ cont+ "</th></tr>";
    tbResultados.innerHTML = texto;
    //alert ("Total de Professor: " + cont);
})

btnEx08.addEventListener('click',function(){
    const A = [];
    const B = [];
    const C = [];
    let textoHTML = "<tr><th>Vetor A</th><th>Vetor B</th><th>Vetor C</th></tr>"
    let tbResultados = document.getElementById('resultados')
    let contB = 0;
    let contC = 0;
    let somaB = 0;
    let somaC = 0;

    for (let i=0; i<10; i++){
        A.push (aleatorios(1,50));
    }

    for (let i=0; i<10; i++){

        let resto = A[i] % 2;
 
        if (resto == 0 ){
            B.push (A[i]);
            somaB += A[i];
            contB ++
        }else{
            C.push (A[i]);
            somaC += A[i];
            contC++
        }
    }

    for (let i=0; i<10; i++){

        let textoB = i < B.length ? B[i] : "";

        let textoC = i < C.length ? C[i] : "";
          
        textoHTML += "<tr><td>" + A[i] + "</td><td>"+ textoB +"</td><td>"+ textoC +"</td></tr>"
    }

    textoHTML += "<tr bgcolor='#b8cdef'><td> Quantidade </td><td>"+ contB +"</td><td>"+ contC +"</td></tr>"
    textoHTML += "<tr bgcolor='#b8cdef'><td> Soma </td><td>"+ somaB +"</td><td>"+ somaC +"</td></tr>"

    tbResultados.innerHTML = textoHTML;
})

btnEx09.addEventListener('click',function(){
    const A = [];
    const B = [];
    const C = [];
    let textoHTML = "<tr><th>Vetor A</th><th>Vetor B</th><th>Vetor C</th></tr>"
    let tbResultados = document.getElementById('resultados')

    for (let i=0; i<10; i++){
        A.push (aleatorios(1,50));
    }

    for (let i=0; i<10; i++){
 
        A[i] % 2 == 0 ? B.push (A[i]) : C.push (A[i]);
    }

    for (let i=0; i<10; i++){

        let textoB = i < B.length ? B[i] : "";

        let textoC = i < C.length ? C[i] : "";
          
        textoHTML += "<tr><td>" + A[i] + "</td>"<td>"+ textoB +"</td><td>"+ textoC +"</td></tr>"
    }

    tbResultados.innerHTML = textoHTML;
})


btnEx10.addEventListener('click', function(){
    
    const numeros = [];
    tbResultados = document.getElementById('resultados');

    for (let i=0;i<100;i++){
        numeros.push (aleatorios(1,1000));
    }

    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    
    alert (menor + "\n" + maior)

    let texto = "<tr> <th>Vetor A</th></tr>";
    for (let i=0; i<100; i++){
        texto += "<tr> <td>" + numeros[i] + "</td></tr>";
    }
    tbResultados.innerHTML = texto;
})