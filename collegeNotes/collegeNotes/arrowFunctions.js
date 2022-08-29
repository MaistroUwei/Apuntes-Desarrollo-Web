// Gadgeter / Emiliano Acevedo

/* 
Las arrow functions son otra forma de escribir funciones en JavaScript
una funcion de toda la vida se veria algo asi:

function suma(a, b) {
    return a + b;
}

*/

// Mientras que una arrow function, se ve asi

const nombreFuncion = (parametros) => {
    // Lo que realiza la funcion
    console.log(parametros + " >w<");
};

// Y las mandamos a llamar como siempre
nombreFuncion("Esto es una arrow function"); // Salida: Esto es una arrow function >w<

/* 
Son realmente muy utiles, ya que de esta manera podemos pasar funciones
COMO ARGUMENTOS, SIN MANDARLAS A LLAMAR, algo que tendremos que hacer constantemente.
*/
