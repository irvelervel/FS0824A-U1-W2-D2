// LOGICA CONDIZIONALE
// blocco IF

// if(condizione){
//   codice da eseguire se la condizione si verifica
// }

// pushiamo un elemento dentro un array solo se l'array è vuoto
let myArray = ['Giulio']

if (myArray.length === 0) {
  // NON entro qui dentro!
  // questo blocco è stato IGNORATO
  myArray.push('Stefano')
}

console.log('myArray', myArray)

// questa è una condizione che verifica l'OPPOSTO...
// if (myArray.length !== 0) {
//     console.log('array NON vuoto!')
// }

// ... volendo è INTEGRATA in un blocco IF/ELSE

// voglio fare una torta
let amountOfSugar = 200

if (amountOfSugar >= 400) {
  console.log('FACCIO UNA TORTA!')
} else {
  // il blocco ELSE si verifica quando NON si entra nell'IF!
  // è la condizione OPPOSTA
  console.log('devo andare a comprare lo zucchero')
}

// NON SI VERIFICANO M A I INSIEME!

// ti faccio i complimenti se hai gli occhi azzurri o verdi!
let eyeColor = 'marroni'

if (eyeColor === 'verdi' || eyeColor === 'azzurri') {
  console.log('hai degli occhi ' + eyeColor + ' bellissimi!')
} else {
  console.log("oggi fa un po' freddino")
}

//
// come si calcola il più PICCOLO tra due numeri

let n1 = 4
let n2 = 9

let smallest

if (n1 < n2) {
  smallest = n1
} else {
  smallest = n2
}

console.log(smallest)

// VERSIONE COMPLESSA, !! EXPLODING BRAINS ALERT !!
// if (n1 < n2) {
//   // il più piccolo è n1
//   smallest = n1
// } else if (n2 < n1) {
//   // il più piccolo è n2
//   smallest = n2
// } else {
//   // i numeri sono uguali
// }

// if - else/if è un blocco con diverse condizioni
// verificate il primo if, se NON si verifica avete una seconda condizione da verifica (elseif)
// se anche quella non si verifica, finite nell'else finale
