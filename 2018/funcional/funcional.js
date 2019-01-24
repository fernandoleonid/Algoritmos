
let a = Array.from(Array(100).keys());

const preencherTextArea = (vet, txt) =>{
    vet.map (e => txt.value += e + "\n")
}

const m7 = a.map(e  => e * 7);
const p = a.filter(e => e % 2 == 0);
const s = a.reduce((acum,e) => acum + e );

preencherTextArea(a,document.getElementById('numeros'));
preencherTextArea(m7,document.getElementById("mult7"));
preencherTextArea(p,document.getElementById("pares"));

document.getElementById('soma').value = s;