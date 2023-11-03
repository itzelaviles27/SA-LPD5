/**
 * Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por 
input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola 
o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y
 volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o 
DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por
 consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio,
 pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
*/
let numSecreto = 11;
let numEquivocados = [];

function numeroUsuario(numUsuario) {
  if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 100) {
    console.log("Ingresa un número del 1-100");
  } else if (numSecreto == numUsuario) {
    console.log("Felicidades, adivinaste el número secreto");
    return true;
  } else {
    numEquivocados.push(numUsuario);
    console.log(`Ups, el número secreto es incorrecto, vuelve a intentarlo.`);
    return false;
  }
}

let intentos = [];

while (true) {
  let intentoUsuario = prompt('Ingrese el Número');
  let intento = parseFloat(intentoUsuario);

  if (numeroUsuario(intento)) {
    break;
  }

  intentos.push(intento);
}

console.log(`Números incorrectos ingresados: ${numEquivocados}`);


