let array = ["Gatsby","Hugh Harmon","Norman Scott","Scott Ware","Edgar George","Reginald Kidd","David Grimes","Taylor Burch","Joe George","Collin Moses"];

let input = prompt("Inserisci il tuo nome: ");


let flag = false;
for (let i = 0; i < array.length; i++) {
    if(array[i] == input)
    {
        flag = true;
        break;
    }    
}

if (flag == true) {
    alert("Puoi partecipare!");
} else {
    alert("Non puoi partecipare!");
}