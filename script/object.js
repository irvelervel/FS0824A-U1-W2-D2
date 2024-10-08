// OGGETTI
// Un oggetto, in tutti i linguaggi di programmazione, rappresenta la modellazione
// in codice di un vero e proprio oggetto del mondo reale.
// Si tratta di un tipo di dato COMPLESSO, ovvero una collezione di coppie chiave:valore
// Queste coppie chiave:valore vengono solitamente definite "proprietà"

const test = {} // già un oggetto valido! però è vuoto :(

// negli oggetti l'operatore di assegnazione sono i :, non più =
const smartphone = {
  brand: 'Apple',
  model: 'iPhone 16',
  capacity: 128,
  newModel: true,
  color: 'Yellow',
  'is-unlocked': true,
  screen: {
    resolutionX: 1179,
    resolutionY: 2556,
    technology: 'oled',
  },
}

// const brand = 'Samsung' // possiamo anche definire altre variabili con il nome
// di una delle proprietà dell'oggeto

// un oggetto può contenere INFINITE coppie chiave:valore
// la chiave tipicamente non va inserita tra '' (a meno che non abbia un nome particolare)
// il valore dopo i : può essere una stringa, un numero, un booleano, un altro oggetto etc.

console.log('SMARTPHONE', smartphone)

// MODALITÀ DI ESPLORAZIONE DI OGGETTI (leggere le proprietà degli oggetti)
// 1) DOT NOTATION
// Potete esplorare le proprietà di un oggetto indicando nomeOggetto.nomeProprietà
// Potete anche con la stessa tecnica esplorare oggetti dentro oggetti
// (es.smartphone.screen.technology)
console.log(
  'Ho uno smartphone di marca ' +
    smartphone.brand + // "Apple"
    ', di colore ' +
    smartphone.color // "Yellow"
)

console.log(
  'Il mio nuovo smartphone ha una risoluzione di ' +
    smartphone.screen.resolutionY + // navigazione dentro oggetti annidati
    'x' +
    smartphone.screen.resolutionX // navigazione dentro oggetti annidati
)

// 2) SQUARE BRACKETS NOTATION
// serve quando il nome della proprietà ha caratteri strani

console.log(smartphone['is-unlocked']) // true
console.log(smartphone['model']) // funziona anche con le altre proprietà, però
// solitamente è più facile da utilizzare il punto

let property = 'capacity'

// !! BRAINFUCK ALERT !!
console.log(smartphone[property]) // vado a LEGGERE IL VALORE di property, e lo uso
// come proprietà di smartphone

// AGGIUNGERE UNA PROPRIETÀ AD UN OGGETTO ESISTENTE
smartphone.carrier = 'Tim' // aggiunto una NUOVA proprietà!
console.log('SMARTPHONE DOPO AGGIUNTA CARRIER', smartphone)

smartphone.color = 'Green' // modificate proprietà esistenti
// un oggetto NON può avere più di una volta la stessa chiave! si vanno a sovrascrivere

// eliminare proprietà
delete smartphone.newModel // ho ELIMINATO la proprietà newModel dentro smartphone
console.log('SMARTPHONE FINALE', smartphone)

// smartphone = 'ciao' // questo non si può fare perchè smartphone è una const!
