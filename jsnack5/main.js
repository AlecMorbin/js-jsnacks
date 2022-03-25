let array = new Array();
let number = 0;
console.log(array.length);
for (let i = 0; i < 6; i++) {
    number = prompt("Inserisci un numero:");
    number = parseInt(number);
    console.log(number);
    console.log(typeof number);

    if (number%2 > 0 ) {
        array.push(number);
    }
}

alert(array);
console.log(array);