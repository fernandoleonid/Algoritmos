/*
    - Função é chamada no arquivo HTML
    - Forma antiga de trabalhar com eventos
    - Desaconselhável
    - mistura exibição (HTML) e comportamento (JS),
        não segue as praticas do SoC,
        não separar responsabilidade.
*/

function evento01 () {
    alert ("Olá Mundo 01!!!");
}


/*
    - Função chamada no arquivo JS
    - Forma antiga de trabalhar com eventos
    - Desaconselhável
    - Segue as boas praticas do SoC,
        separar as responsabilidade
    - Uma função por evento
*/
function evento02 () {
    alert ("Olá Mundo 02!!!");
}

const btn02 = document.getElementById("b02");

btn02.onclick = evento02;

/*
 - Segue SoC
 - Varias funções por evento
 - Podemos criar eventos
 - Verificar suporte dos navegadores

*/

function evento03() {
    alert ("Olá mundo 03!!!");
}

const btn03 = document.getElementById("b03");

btn03.addEventListener ('click', evento03);

/*
 - Isolamento da função (closure)
*/

const btn04 = document.getElementById("b04");

btn04.addEventListener('click',function (){
    alert ("Olá Mundo 04!!!");
})

