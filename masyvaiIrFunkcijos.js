// 1. Sukurkite funkciją, kurią iškvietus, masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.
"use strict";
let masyvas = [];

function papildymas(){
    let naujiDuomenys = document.querySelector('#masyvoPapildymas').value;
    masyvas.push(naujiDuomenys);
    return masyvas;

    // document.querySelector("#rezultatas").innerHtml = masyvas;
}

document.querySelector('#pildytiMasyva').addEventListener('click', function() {
    papildymas();

    for(let i=0; i<masyvas.length; i++) {
        document.querySelector('#masyvas').innerHTML += '<div>' + masyvas[i] + '</div>';
    }

    document.querySelector('#masyvoPapildymas').value = '';

    // let elementas;
    // elementas = document.querySelector("#elementas").value;

    // masyvas.push(elementas);
    // console.log(masyvas);
});

// document.querySelector('#pildytiMasyva').addEventListener('click', masyvoPildymas);

// 2. Pasinaudodami ciklu, sukurkite funkciją, kuri traukia kvadratinę šaknį iš skaičiaus.
let rezultatas;

function sakniesTraukimas(){
    let naujiDuomenys = document.querySelector('#masyvoPapildymas').value;
    rezultatas = Math.sqrt(naujiDuomenys);
}

document.querySelector('#trauktiSakni').addEventListener('click', function() {
    sakniesTraukimas();
    document.querySelector('#masyvoPapildymas').value = rezultatas;
});

// 3. Sukurkite funkciją, kuri mygtuko paspaudimu, sukuria div elementą su klase "elementas-{index}". {index} = elemento numeris

let naujasElementas = document.querySelector('#elementaiSuKlase');
let i = 1;

function kurtiElementa() {
    naujasElementas.innerHTML += '<div>Hello world!</div>';
    naujasElementas.setAttribute("class", "elementas-"+i);
    i++;
}

document.querySelector('#elementoSukurimas').addEventListener('click', function() {
    kurtiElementa();
});