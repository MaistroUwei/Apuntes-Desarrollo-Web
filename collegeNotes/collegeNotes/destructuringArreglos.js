// Gadgeter / Emiliano Acevedo



/* 
El destructuring FUNCIONA en ARREGLOS y OBJETOS, nos ayuda a ahorranos unas
lineas de codigo a la vez que lo hacemos mas legible.
*/

let arreglo = ["Juan", "Miguel", "Walter"];

/* 
Supongamos que del anterior arreglo queremos guardar los primeros
elementos en 2 variables diferentes, en otros lenguajes hariamos algo
similar a esto

const nombre1 = arreglo[0];
const nombre2 = arreglo[1];

console.log("Nombre 1: " + nombre1); // Salida: Nombre 1: Juan
console.log("Nombre 2: " + nombre2); // Salida: Nombre 2: Miguel
*/

// En JavaScript lo podemos hacer de la siguiente manera

// const [nombre1, nombre2] = arreglo;

// console.log("Nombre 1: " + nombre1); // Salida: Nombre 1: Juan
// console.log("Nombre 2: " + nombre2); // Salida: Nombre 2: Miguel

// Ambas variables seran constantes

// Que pasa si las variables que quiero crear superan el tamanio del arreglo?

let arreglo2 = ["Uva", "Fresa"];

// const [fruta1, fruta2, fruta3] = arreglo2;

// console.log("Fruta 1: " + fruta1); // Salida: Fruta 1: Uva
// console.log("Fruta 2: " + fruta2); // Salida: Fruta 2: Fresa
// console.log("Fruta 3: " + fruta3); // Salida: Fruta 3: undefined

// Como podemos ver, la variable fruta3 es undefined

// Que pasa si me quiero saltar uno de los valores del arreglo

let arreglo3 = ["Jaguar", "Tigre", "Elefante"];

// const [animal1, , animal2] = arreglo3;

// console.log("Animal 1: " + animal1); // Salida: Animal 1: Jaguar
// console.log("Animal 2: " + animal2); // Salida: Animal 2: Elefante

// El destructuring tambien lo podemos realizar con cadenas de texto
const [a, b, c] = "xyz";
console.log(a, b, c); // Salida: x y z
