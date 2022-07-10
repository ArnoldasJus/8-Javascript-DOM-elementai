// 1. Sukurkite funkciją, kurią iškvietus, masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.
"use strict";
let masyvas = [20,30,50];

function papildymas(){
    let naujiDuomenys = document.querySelector('#masyvoPapildymas').value;
    masyvas.push(naujiDuomenys);
    // return masyvas;
}

document.querySelector('#pildytiMasyva').addEventListener('click', function() {
    papildymas();
    console.log(masyvas);
});
