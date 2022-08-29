// Gadgeter / Emiliano Acevedo



const user = {
  userName: "Luis",
  userLastName: "Haro",
};

/*
Digamos que queremos guardar el "userName" de un objeto en una variable,
normalmente hariamos algo asi en JavaScript

const userName = user.userName;
console.log("Nombre del usuario:", userName); // Nombre del usuario: Luis

ATENCION: la variable "const userName" es DIFERENTE de el atributo
userName de user, osea el user.userName, razon por la que "const userName = user.userName"
es totalmente valido, es importante para entender lo que sigue.
*/

// Usando destructuring con objetos, podemos escribirlo de la siguiente manera

/*
Lo podemos leer de la siguiente manera: Del objeto "user", extrae el
atributo "userName", y guardalo en una variable del mismo nombre.
*/

// const {userName} = user;
// console.log("Nombre del usuario:", userName); // Nombre del usuario: Luis

// Que pasa si pedimos un atributo que no exite? Regresa undefined
// const {userPhone} = user;
// console.log("Celular del usuario:", userPhone); // Celular del usuario: undefined

const user2 = {
  userName: "Luis",
  userLastName: "Haro",
  userPhone: 999999999,
};

// Podemos pedir varios atributos a la vez, como puedes ver, el orden no importa, igual funciona
// const {userName, userPhone, userLastName} = user2;
// console.log("Datos del usuario:", userName, userLastName, userPhone); // Salida: Datos del usuario: Luis Haro 999999999

// Podemos cambiarle el nombre al atributo a la hora de guardarlo en una variable
// const {userName: nombre, userLastName: apellido, userPhone: celular} = user2;
// console.log("Datos del usuario:", nombre, apellido, celular); // Salida: Datos del usuario: Luis Haro 999999999

// Podemos asignar un valor por defecto en caso de que el atributo no exista
// const {userName, address = "Calle-Reforma"} = user2;
// console.log("Datos del usuario:", userName, address); // Salida: Luis Calle-Reforma
// Si bien "address" no existe, como le estamos dando un valor por defecto, NO vale undefined al final

/* SPREAD OPERATOR, nos permite extraer todos los elementos de un objeto de golpe 
por decirlo de alguna manera...

Ejemplo, estamos diciendo que en "user3" se agregen
todos los elementos de user2
*/
const user3 = {
  ...user2,
  nationality: "Mex",
};

// console.log(user3);
/*
SALIDA: 
{
    userName: 'Luis',
    userLastName: 'Haro',
    userPhone: 999999999,
    nationality: 'Mex'
}
*/

// El SPREAD OPERATOR tambien lo podemos usar en destructuring de objetos
const { nationality, ...rest } = user3;
// console.log("Nacionalidad:", nationality); // Salida: Nacionalidad: Mex
// console.log("Resto el objeto:", rest); // Salida: Resto el objeto: { userName: 'Luis', userLastName: 'Haro', userPhone: 999999999 }

const item = {
  itemName: "Casa",
  itemDescription: {
    size: 14,
    color: "red",
  },
};

/* 
Podemos combinar todo lo anterior para extraer objetos de manera MUY ESPECIFICA...

Del atributo "itemDescription" del objeto "item", queremos extraer el "size"
y el color al que renombraremos su variable como "colorcito".
*/
const {
  itemDescription: { size, color: colorcito },
} = item;
// console.log("Size:", size); // Salida: Size: 14
// console.log("Colorcito:", colorcito); // Salida: Colorcito: red

/*
Incluso podemos usar el destructuring de objetos para pasar argumentos a una funcion...

Abajo creo una arrow funcion sencilla, que 
VA A EXTRAER del objeto que le pase el atributo "itemName"
*/
const miFuncion = ({ itemName }) => {
  console.log("El nombre del item es:", itemName);
};

// Mando a llamar la funcion
// miFuncion(item); // Salida: El nombre del item es: Casa

/* 
Si ahora mando como argumento el objeto user2 que NO tiene el atributo "itemName",
simplemente sera undefined
*/
miFuncion(user2); // Salida: undefined
