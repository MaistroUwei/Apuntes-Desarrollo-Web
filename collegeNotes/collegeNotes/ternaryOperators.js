// Gadgeter / Emiliano Acevedo


/*
Basicamente, el ternary Operator (Operador ternario) es una forma de hacer
un IF en UNA SOLA LINEA, osea, resumirlo.
*/

const edad = 18;

/*
if (edad >= 18) {
    console.log("+18");
} else {
    console.log("-18");
}

La forma de hacer el anterior condicional con operadores ternarios
es la siguiente:
*/

console.log("+18") ? edad >= 18 : console.log("-18"); // Salida: +18
/*
Lo podemos leer de la siguiente manera:

Imprime "+18" SI la edad es mayor o igual a 18, SI NO, imprime "-18"
*/

// Podemos anexar varios operadores ternarios, pero no es muy legible, por lo que no es recomendable...
const age = 18;
let message =
  age < 3
    ? "Hello there you small one"
    : age < 18
    ? "Hello"
    : age < 100
    ? "Ohh wow"
    : "Error not valid age";
