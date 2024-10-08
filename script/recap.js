console.log('Foglio JS collegato correttamente')

// VARIABILI
let thisIsAVariable = 'Stefano'
// TIPI DI DATO "PRIMITIVI"
// stringhe, numeri, booleani, undefined, null

console.log('thisIsAVariable', thisIsAVariable) // 'Stefano'

// le variabili create con "let" sono ri-assegnabili
thisIsAVariable = 'EPICODE'
console.log('thisIsAVariable', thisIsAVariable) // 'EPICODE'

// keyword "const": crea delle "costanti", ovvero delle variabili NON ri-assegnabili
// ad un nuovo valore
const newVariable = 'Via Roma 1'
// newVariable = 'Corso Italia 100'

// OPERATORI MATEMATICI
// + - * / %
// servono per lavorare con i NUMERI, ma l'operatore + lavora anche con le stringhe!

let myName = 'Stefano'
let mySurname = 'Casasola'

let nameSurname = myName + ' ' + mySurname

// % -> l'operatore modulo torna il RESTO di una DIVISIONE!
// comodo spesso per stabilire se un numero è perfettamente divisibile per un altro

let n1 = 40
console.log('Verifica che il numero n1 è pari', n1 % 2 === 0) // il resto è 0

let n2 = 77
console.log('Verifica che il numero n2 è pari', n2 % 2 === 0) // il resto è 1

// OPERATORI DI COMPARAZIONE
// < <= > >= === !== !
// una COMPARAZIONE torna un booleano!

console.log(3 < 5) // true
console.log(6 === 7) // false
console.log(4 !== 5) // true
console.log(8 <= 9) // true
console.log(56 >= 56) // true

let comparazione = 6 !== 6 // false
console.log('Verifica che 6 sia diverso da 6', comparazione) // false

// È possibile CONCATENARE multiple operazioni logiche tra di loro,
// tramite gli operatori AND (&&) OR (||) NOT(!)

console.log(
  'Inverto comparazione, ovvero che 6 sia diverso da 6',
  !comparazione
) // true

// AND è un operatore logico che collega più espressioni logiche insieme

// true && true -> true
// false && true -> false
// true && false -> false
// false && false -> false

let belTempo = false
let hoIlCostumeDaBagno = true

let vadoAlMare = belTempo && hoIlCostumeDaBagno // false
console.log('Ho il costume, ma piove. Vado al mare?', vadoAlMare)

// OR è un operatore logico che collega più espressioni logiche insieme

// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// state cercando di passare un esame ma il professore ha un debole per chi si chiama
// "Mario" o per chi studia tantissimo
let oreDiStudioSufficienti = true
let tiChiamiMario = false

let esameCompletato = oreDiStudioSufficienti || tiChiamiMario // true

// TERNARY OPERATOR -> esegue condizionalmente un'assegnazione

let myAge = 16
// operatore ternario -> condizione ? se true : se false
let entroInDiscoteca = myAge >= 18 ? 'si' : 'no'
// in questo caso entroInDiscoteca ha assunto il valore "si"
console.log('entro in discoteca?', entroInDiscoteca)

// FINE RECAP! :)
