function sommaNumeri(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }
    return somma;
}

function mediaAritmetica(array) {
    return sommaNumeri(array) / array.length;
}

let array = new Array();
for (let i = 0; i < 10; i++) {
    array.push( parseInt( prompt("inserisci un numero" ) ) );
}

alert(mediaAritmetica(array));
console.log(mediaAritmetica(array));