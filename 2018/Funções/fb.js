const txtMin = document.getElementById("minimo");
const txtMax = document.getElementById("maximo");
const txtResultado = document.getElementById("resultado");
const btnFat = document.getElementById("fatorial");
const btnFibo = document.getElementById("fibonacci");
const btnPrimo = document.getElementById('primo');


btnFat.addEventListener ('click', function(){
    calculos(fatorial);
})

btnFibo.addEventListener ('click', function(){
    calculos(fibo);
})

btnPrimo.addEventListener ('click', function(){
    calculos(primo);
})

// function fatorial (num){
//     let fat = 1;
//     for (let i=1;i<=num;i++){
//         fat *= i;
//     }
//     return fat;
// }

const fatorial = function (num){

    let fat = 1;
    for (let i=1;i<=num;i++){
        fat *= i;
    }
    return fat;
}

// const fatorial = num => {
//     let fat = 1;
//     for (let i=1;i<=num;i++){
//         fat *= i;
//     }
//     return fat;
// }

// const fatorial = function (num){

//     return num == 1 ? 1 : num * fatorial (num-1);
// }


//const fatorial = num => num == 1 ? 1 : num * fatorial (num-1);

//const fibo = num  => num <= 2 ? num - 1 : (fibo(num - 2)) + (fibo(num - 1));

const fibo = function (num)  {

    if (fibo[num]){
        return fibo[num];
    }

    if (num <= 2 ){
        fibo[num] =  num -1;
        return fibo[num];
    } else{
        fibo[num] = (fibo(num - 2)) + (fibo(num - 1));
        return fibo[num];
    }
    
}

// const fibo = function(n){
//     let ant = 0;
//     let at = 1;
//     for (let i=1; i<n; i++){
//         let prox = ant + at;
//         ant = at;
//         at = prox;
//         console.log (i,ant,at,prox)
//     }
//     return ant;
// }

const calculos = function (f){

    const min = parseInt(txtMin.value);
    const max = parseInt(txtMax.value);

    if (isNaN(min) && isNaN(max)){
        alert ("Preencha os campos!");
    }else if (isNaN(min)){
        txtResultado.value = max + " --> " + f(max);
    }else if (isNaN(max)){
        txtResultado.value = min + " --> " + f(min);
    }else{
        txtResultado.value = "";
        for (let i=min;i<=max;i++){
            txtResultado.value += i + " --> " + f (i) + "\n";
        }
    }
}

const ePrimo = function (n){
//Verificar se o número é primo
// retorna true ou false
    if (n <= 3){
        return true;
    } else {
        for (let i=2; i<n; i++){
            if (n % i == 0 ) {
                return false;
            }
        }
        return true;
    }
}

const primo = (num) => {
    let cont = 1;
    let i = 0;
    while (cont <= num){
        i++
        if (ePrimo(i)){
            cont++ 
        }
    }
    return i;
}

