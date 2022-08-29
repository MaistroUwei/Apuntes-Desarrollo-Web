// Gadgeter / Emiliano Acevedo

let user = {};

user = {
    address: {}
}
// Si intentamos imprimir un atributo que no existe, obtendremos undefined, es decir, su valor no esta definido
// console.log(user.address.street); // Salida: undefined
// console.log(user.address) // Salida: {}

user = {
    address: {
        street: "Random Steet Value"
    },
};

/* Ni colony ni municipality existe, si intentamos acceder SOLO a colony
obtenemos undefined, pero si intentamos .colony.municipality, obtendremos un error*/
// console.log("Municipality", user.address.colony.municipality) // Salida: ERROR

/*Para evitar errores, podemos usar el OPTIONAL CHAINING que pregunta lo siguiente:
SI EXISTE colony, ACCEDE A municipality*/
console.log("Municipality", user.address.colony?.municipality); // Salida: undefined

user = {
    address: {
        street: "Random Steet Value",
        colony: {
            municipality: "1"
        }
    },
};

// En esta ocasion, el atributo municipality dentro de colony si existe
console.log("Municipality", user.address.colony?.municipality); // Salida: 1