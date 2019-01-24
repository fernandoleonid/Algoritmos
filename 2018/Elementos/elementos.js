const btnAcesso = document.getElementById("acesso");

btnAcesso.addEventListener("click",() => {
     
    alert ("Acesso pelo nome do ID -- " + nome.value);
    alert ("ACesso pelo objeto window -- " + window['nome'].value);
    alert ("acesso pelo metodo getElementById -- " + document.getElementById("nome").value);

    
    btnAcesso.value = "fernando"
    btnAcesso.style = "width:100; height:100; background-color:red;"

})