let parola1 = prompt("Inserisci una parola: ");
let parola2 = prompt("Inserisci una parola: ");

if (parola1.length > parola2.length) {
    alert(parola1);
} else if (parola1.length < parola2.length){
    alert(parola2);
} else {
    alert("Hanno la stessa lunghezza!");
}