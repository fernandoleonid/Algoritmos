const txtMin = document.getElementById('minimo');
const txtMax = document.getElementById('maximo');
const txtResultado = document.getElementById('resultado');
const btnFatorial = document.getElementById('fatorial');
const btnFibo = document.getElementById('fibonacci');
const btnPrimo = document.getElementById('primo');

btnFatorial.addEventListener ('click',function(){
    calculos(fatorial);
})

btnFibo.addEventListener('click',function(){
    calculos(fibo);
})

btnPrimo.addEventListener('click',function(){
    calculos(primo);
})

const calculos = function(f){

    const min = parseInt(txtMin.value);
    const max = parseInt(txtMax.value);

    if (isNaN(min) && isNaN(max)){
        alert('Preencha os campos!');
    }else if (isNaN(min)){
        txtResultado.value =  f(max);
    }else if (isNaN(max)){
        txtResultado.value =  f(min);
    }else{
        txtResultado.value = "";
        for (let i=min;i<=max;i++){
            txtResultado.value += i + " --> " + f(i) + "\n";
        }
    }
}

const fibo = (n) => n <= 2 ? n-1 : fibo (n-2) + fibo(n-1);

const fatorial = valor => valor == 1 ? 1 : valor * fatorial (valor - 1);

const ePrimo = (num, cont=2) => cont>=num || num%cont==0 ?  cont>=num : ePrimo(num, cont+1);

const primo = (termo,num=1,cont=1) =>{

    if (cont==termo && ePrimo(num)){
        return  num;
    }
    if (ePrimo(num)) {
        return primo (termo , num+1, cont+1);
    }else{
        return primo (termo, num+1, cont);
    }
}

// const primo = (termo) =>{
//     let i = 1;
//     let num = 0;
//     while (i <= termo){
//         console.log (i)
//         num++;
//         if (ePrimo(num)) {
//             i++;
//         }
//     }
//     return num;
// }




// function ePrimo(num) {
//     for (var j = 2; j < num ; j++){
//         if (num % j == 0){
//             return false;
//         }
//     }
//     return true;
// }

// ePrimo = (num, cont=2) => {

//     if (cont>=num || num%cont==0){
//         return cont>=num;
//     }else{
//         return  ePrimo(num, cont+1);
//     }

//     // if (cont>=num){
//     //     console.log (cont + " --- " + num);
//     //     return true;
//     // }else{
//     //     if (num%cont==0){
//     //         return false;
//     //     }else{
//     //         return ePrimo(num, cont+1);
//     //     }
//     // }
   
// }

// const ePrimo = (n) => {

//     const qtdDivisores = (n,cont=1) => {
//         if (n == cont){
//             return 1;
//         }else{
//             if ((n % cont) == 0){
//                 return 1 + qtdDivisores(n,cont + 1);
//             }else{
//                 return 0 + qtdDivisores(n,cont + 1);
//             }
//         }
//     }


//     return qtdDivisores(n) <= 2
// }

// const fibo = function(n){
//     let ant = 0;
//     let at = 1;
//     for (let i=1; i<n; i++){
//         let prox = ant + at;
//         ant = at;
//         at = prox;
//     }
//     return ant;
// }

// const fibo2 = function (n){
//     const proxFibo = (ant,at,cont)=>{
//         if (cont==1){
//             return ant;
//         }else{
//             return proxFibo(at,ant+at,cont-1);
//         }
//     }

//     return proxFibo(0,1,n);
// }



// function fatorial (valor){
//     let fat = 1;
//     for (let i=1;i<=valor;i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = function (valor){
//     let fat = 1;
//     for (let i=1;i<=valor;i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = (valor) => {
//     let fat = 1;
//     for (let i=1;i<=valor;i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = function (valor){
//     if (valor == 1){
//         return 1; 
//     }else{
//         return valor * fatorial (valor - 1);
//     }
// }

