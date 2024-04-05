//Ejercicio 1: Operaciones básicas con Arrays
//En este ejercicio, comenzaremos creando un array vacío llamado ‘miArray’. A continuación, deberás agregar los números 1, 2 y 3. Después, añade el número 0 al principio del array. Elimina el último elemento del array. Para evaluar el progreso, muestra la longitud actual del array. Por último, convierte el array en una cadena de texto separada por comas y presenta el resultado.

const miArray = [];

let agregarMiArray = miArray.push(1, 2, 3);
console.log(miArray);

let agregarAlPrincio = miArray.unshift(0);
console.log(miArray);

let eliminaUtimo = miArray.pop();
console.log(miArray);

console.log(miArray.length);

console.log(miArray.join(" * "));
console.log(miArray);

//Ejercicio 2: Manipulación de Arrays
//Crea un nuevo array llamado ‘nuevoArray’ con los elementos del array original. Luego, elimina el primer elemento del array original. Posteriormente, agrega el número 4 al final del array original. Realiza la concatenación de ‘nuevoArray’ con el array original y muestra el resultado como una cadena de texto.

const nuevoArray = [...miArray];
console.log(nuevoArray);

console.log(miArray.shift());
console.log(miArray);

nuevoArray.push(4);
console.log(nuevoArray);

const arrayTotal = miArray.concat(nuevoArray);
console.log(arrayTotal);
console.log(arrayTotal.join(" / "));

//Ejercicio 3: Modificación de Arrays
//Crea un array llamado frutas con al menos 4 elementos. Elimina los dos primeros elementos del array y agrega dos nuevas frutas al principio del mismo. Muestra el array resultante.

const frutas = ["manzana", "banana", "frutilla", "pera"];
frutas.splice(0, 2);
console.log(frutas);

frutas.splice(0, 0, "kiwi", "sandia");
console.log(frutas);

//Ejercicio 4: Eliminación por Índice
//Crea un array llamado elementos con al menos 7 elementos. Elimina los elementos en los índices 2 y 4 del array y muestra el array resultant

const elemento = [
  "tenedor",
  "cuchara",
  "cuchillo",
  "plato",
  "olla",
  "salero",
  "azucarera",
];
elemento.splice(2, 1);
elemento.splice(3, 1);
console.log(elemento);

//Ejercicios Bucles

//Bucles for

//Ejercicio 5: Suma de Números Pares
//Utilizando un bucle for, calcula la suma de los primeros 5 números pares y muestra el resultado.

let paresTotal = 0;

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
  paresTotal += i;
}

console.log(paresTotal);

//Ejercicio 6: Imprimir Números Decrecientes
//Usando un bucle for, imprime en la consola los números del 10 al 1 en orden decreciente.

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//Bucles while

//Ejercicio 7: Contador Ascendente con Condiciones
//Usando un bucle while, imprime los números del 1 al 20, pero solo aquellos que sean múltiplos de 3.

let i = 0;

while (i <= 15) {
  i += 3;
  console.log(i);
}

//Ejercicio 8: Adivina el Número

//Crea un juego en el que el usuario tiene que adivinar un número entre 1 y 10 utilizando un bucle while. Proporciona pistas al usuario si el número es demasiado alto o bajo.

let x = 1;
let numero;
while (x <= 10) {
  numero = prompt("Elige un número del 1 al 10");

  if (numero < 1 || numero > 10) {
    alert("Número fuera del rango. Debe ser del 1 al 10.");
  } else if (numero <= 5) {
    alert("El número elegido es muy pequeño.");
  } else if (numero == 6) {
    alert(
      "Estás cerca, pero un poco más grande. Al dividir por 2, da un número par."
    );
  } else if (numero == 7) {
    alert(
      "Estás cerca, pero un poco más grande. Al dividir por 2, da un número par."
    );
  } else if (numero >= 9) {
    alert("Te pasaste, elige un número más pequeño.");
  } else if (numero == 8) {
    alert("¡Muy bien, has ganado!");
    break;
  }

  x++;
}

//Bucles do-while

//Ejercicio 9: Menú de Opciones
//Usando un bucle do-while, crea un menú que le dé al usuario opciones para elegir entre diferentes operaciones (por ejemplo, suma, resta, salir). El bucle debe ejecutarse hasta que el usuario elija salir.

let operacion;
do {
  operacion = prompt("¿Qué operación desea realizar: suma, resta, salir");
  if (operacion === "suma") {
    alert("Realizando operación de suma");
    alert("¿Desea hacer otra operación?");
  } else if (operacion === "resta") {
    alert("Realizando operación de resta");
    alert("¿Desea hacer otra operación?");
  } else if (operacion === "salir") {
    alert("Nos vemos");
    break;
  }
} while (operacion !== "salir");

//Bucles for-of

//Ejercicio 10: Iteración sobre un Array
//Crea un array de nombres y utiliza un bucle for-of para imprimir cada nombre en la consola.

let personas = ["Pedro", "Juan", "Maria", "Ana", "Julieta"];

for (let persona of personas) {
  console.log(persona);
}

//Ejercicios Arrays + Bucles

//Ejercicio 11: Números Pares
//Crea un array llamado ‘números’ con al menos 6 números.
//Crea un nuevo array llamado pares que contenga solo los números pares de ‘números’.
//Muestra el array original y el array de números pares.

const numeros = [4, 8, 9, 11, 6];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}
console.log(pares);

//Ejercicio 12: Inversión de Palabras

//Crea un array llamado palabras con al menos 5 palabras.
//Invierte el orden de las palabras en el array.
//Muestra tanto el array original como el array invertido.

const palabras = ["hola", "botella", "casa", "piedra", "auto"];

const palabrasAlRe = palabras.reverse();

console.log(palabras);
const nuevasPalabras = [];
for (let i = palabras.length - 1; i >= 0; i--) {
  nuevasPalabras.push(palabras[i]);
}
console.log(nuevasPalabras);
