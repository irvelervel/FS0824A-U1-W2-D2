// ARRAYS
// un array è una collezione (lista) di valori

const test = [] // questo è un ARRAY VUOTO

const names = ['stefano', 'andrea', 'emanuele', 'giulia', 'loreta', 'mark']
const numbers = [0, 1000, 24, 67.89]
const booleans = [true, true, false, true]
const mixed = ['martino', true, 23, false, 90] // poco usati :(
const smartphones = [
  {
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
  },
  {
    brand: 'Samsung',
    model: 'S24',
  },
  {
    brand: 'Xiaomi',
    model: 'Note 9 Pro Ultra',
  },
]

// un array non identifica i propri elementi tramite "nome"
// l'unica cosa che identifica gli elementi all'internod di un array è la loro POSIZIONE
// detta anche INDICE dell'array

// le posizioni degli array in JS partono da ZERO (0)
const firstSmartphone = smartphones[0] // il primo oggetto smartphone nell'array
const secondSmartphone = smartphones[1] // Samsung S24
const thirdSmartphone = smartphones[2] // Xiaomi

console.log(smartphones[0].brand) // "Apple"
console.log(smartphones[2].model) // 'Note 9 Pro Ultra'

// RECAP: gli oggetti il 99% si esplorano con la DOT NOTATION (.) mentre gli array
// si esplorano grazie all'INDICE (la posizione, che parte sempre da 0)

// il metodo toUpperCase() rende una stringa maiuscola!
// come recupero il nome "emanuele" dall'array names? è l'elemento con indice 2
// rendo poi maiuscola la stringa con .toUpperCase()
console.log(names[2].toUpperCase()) // "EMANUELE"

const complexArrayOfCars = [
  {
    name: 'Classe A',
    brand: 'Mercedes',
    colors: ['Midnight Black', 'Coral Blue', 'Light Orange'],
    interiors: {
      material: ['Leather', 'Plastic'],
      color: ['Black', 'Brown'],
    },
    engine: {
      liters: 1.5,
      hp: 180,
      manufacturer: {
        country: 'Germany',
        city: 'Berlin',
      },
    },
  },
  {
    name: 'Focus',
    brand: 'Ford',
    colors: ['Dark Black', 'Light Blue', 'Sparkling Orange'],
    interiors: {
      material: ['Leather', 'Plastic'],
      color: ['Gray', 'Brown'],
    },
    engine: {
      liters: 1.6,
      hp: 170,
      manufacturer: {
        country: 'USA',
        city: 'New York',
      },
    },
  },
]

console.log(complexArrayOfCars[1].brand) // "Ford"
console.log(complexArrayOfCars[0].colors[2]) // "Light Orange"
console.log(complexArrayOfCars[0].interiors.material[1]) // "Plastic"
console.log(complexArrayOfCars[1].engine.manufacturer.city) // "New York"

// per accedere agli elementi di un array si utilizza l'INDICE, che parte da 0
// OGNI array ha una LUNGHEZZA, che è determinata dal numero dei suoi elementi
// sapendo la lunghezza noi possiamo sempre trovare l'ULTIMO elemento di un array
// il primo elemento avrà sempre indice [0]
// l'ultimo elemento avrà sempre indice [lunghezza-1]
// la lunghezza è una proprietà che si chiama "length"

console.log(complexArrayOfCars.length) // 2
console.log(numbers.length) // 4

// aggiungere un elemento ad un array

// aggiungere IN FONDO
const emptyArray = [] // array vuoto
emptyArray.push('Sony') // l'elemento viene inserito ALLA FINE
emptyArray.push('LG') // l'elemento viene inserito ALLA FINE
emptyArray.push('Samsung') // l'elemento viene inserito ALLA FINE

// aggiungere IN CIMA
emptyArray.unshift('Philips') // l'elemento viene inserito IN CIMA

// elimino l'elemento in ULTIMA POSIZIONE
emptyArray.pop()

// elimino l'elemento in SECONDA POSIZIONE
emptyArray.splice(1, 1) // elimino all'indice 1 un elemento

console.log('emptyArray', emptyArray)
