let numero = 0; //Inizializzio subito a numero per sicurezza data la natura di Javascript
let somma = 0;
for (let i = 0; i < 10; i++) {
    numero = prompt("Inserisci un numero: ");
    somma += parseInt(numero);
}

alert(somma);

console.log(somma);