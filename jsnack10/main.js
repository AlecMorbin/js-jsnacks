let input = prompt("Inserisci un numero di quattro cifre");

function sommaCifre(input) {
    let somma=0;
    for (let i = 0; i < input.length; i++) {
        somma += parseInt( input.charAt(i) );
    }
    return somma;
}

alert(sommaCifre(input));