// 1. Susikurti objektą "Kvadratas".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
// Informaciją išvesti į <p> žymę.

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas.
"Use strict";
let kvadratas = {
    a: 0,
    b: 0,
    plotas: function(a,b) {
        this.a = a;
        this.b = b;
        let plotas = this.a * this.b;
        return plotas;
    },
    perimetras: function(a,b) {
        this.a = a;
        this.b = b;
        let perimetras = this.a + this.a + this.b + this.b;
        return perimetras;
    }
}

document.querySelector('#kurtiKvadrata').addEventListener('click', function() {
    let a = parseFloat(document.querySelector("#aKrastine").value);
    let b = parseFloat(document.querySelector("#bKrastine").value);
    document.querySelector('#plotas').append('Plotas: ' + kvadratas.plotas(a,b));
    document.querySelector('#perimetras').append('Perimetras: ' + kvadratas.perimetras(a,b));
});