//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA

let parolaUtente = prompt("Inserisci parola"); 
 
//CREARE UNA FUNZIONE PER VERIFICARE SE LA PAROLA è PALINDROMA

let parolaReverse = reverseParola(parolaUtente);

if(parolaUtente== parolaReverse){
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")

}

function reverseParola(str) {
    let strReverse = str.split("").reverse().join("");
    return strReverse;
}
 