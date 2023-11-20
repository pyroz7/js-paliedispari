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


//CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI E UN NUMERO DA 1 A 5

let pariDispari = prompt("Pari o Dispari");
let scegliNumero = prompt("Scegli un numero da 1 a 5");

//NUMERO RANDOM PER PC

let numberPc = Math.random(1,5);
let number = console.log(numberPc);

//SOMMIAMO I NUMERI

let sumNumber = (scegliNumero + numberPc) ;

//CREIAMO UNA FUNZIONE PER COMPLETARE 


 