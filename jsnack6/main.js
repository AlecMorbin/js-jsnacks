let randomPC = Math.floor( ( Math.random() * 10 ) );
console.log("debug PC "+randomPC);
let input;
let flag = false;
do {
    input = prompt("Inserisci un numero: ");
    input = parseInt(input);
    console.log("debug g1 "+input)
    if (input == randomPC) {
        flag = true;
    } else {
        alert("Hai Perso riprova");
    }
}
while(flag == false);

alert('Hai vinto!');