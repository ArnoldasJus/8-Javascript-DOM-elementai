// 1. Sukurkite funkciją, kurią iškvietus, masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.
"use strict";
let masyvas = [];

function papildymas(){
    let naujiDuomenys = document.querySelector('#masyvoPapildymas').value;
    masyvas.push(naujiDuomenys);
    return masyvas;
}

document.querySelector('#pildytiMasyva').addEventListener('click', function() {
    papildymas();

    for(let i=0; i<masyvas.length; i++) {
        document.querySelector('#masyvas').innerHTML += '<div>' + masyvas[i] + '</div>';
    }

    document.querySelector('#masyvoPapildymas').value = '';
});

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