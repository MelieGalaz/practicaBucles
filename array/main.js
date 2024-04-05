// Estructuras de datos: Arrays
// Ejercicios
// Todo ejercicio que incluya emojis puede ser sustituido con strings

// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

// obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2
const array = [5, 7, 99, 34, 54, 2, 12];

const obtenerNumeroMenor = () => {
  let numero = array.sort((a, b) => a - b)[0];
  return numero;
};

console.log(obtenerNumeroMenor(array));

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// sumarNumeros([5, 7, 10, 12, 24]) // 58

const sumarNumeros = (numeros) => {
  let suma = 0;
  for (numero of numeros) {
    suma += numero;
  }
  return suma;
};
console.log(sumarNumeros([5, 7, 10, 12, 24]));

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

const contiene = (numero, numeros) => {
  return numeros.includes(numero);
};

console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

const invertirCaso = (string) => {
  let resultado = "";
  for (const caracter of string) {
    if (caracter === caracter.toUpperCase()) {
      resultado += caracter.toLowerCase();
    } else {
      resultado += caracter.toUpperCase();
    }
  }
  return resultado;
};

console.log(invertirCaso("jAvAsCrIpT"));

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true

const gano = (tragamonedas) => {
  const primerosCinco = tragamonedas.slice(0, 5);
  return primerosCinco.every((simbolo) => simbolo === primerosCinco[0]);
};
console.log(gano(["💫", "💫", "💫", "💫", "💫"]));

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Sam']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo'])

const estanJuntos = (personajes) => {
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i] === "Sam" && personajes[i + 1] === "Frodo") {
      return true;
    }
    if (personajes[i] === "Frodo" && personajes[i + 1] === "Sam") {
      return true;
    }
  }
  return false;
};

console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); // true

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'

// const separar = (string) => {
//   let perros = "";
//   let gatos = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "🐶") {
//       perros += "🐶";
//     } else if (string[i] === "🐱") {
//       gatos += "🐱";
//     }
//   }
//   return perros + gatos;
// };

// console.log(separar("🐶🐱🐶🐱🐱🐶🐶"));

function separar1(emojis) {
  const perros = emojis.match(/🐶/g) || [];
  const gatos = emojis.match(/🐱/g) || [];
  return perros.join("") + gatos.join("");
}

console.log(separar1("🐶🐱🐶🐱🐱🐶🐶"));
