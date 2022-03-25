function cubo(n) {
    let array = new Array();

    for (let i = 0; i < n; i++) {
        array.push(i*i*i);
    }
    console.log(array);
    return array;
}

let input = prompt("Inserisci un numero: ");

alert(cubo(input));