/* 2. Crea un juego de adivinar un numero aleatorio
  entre 1 y 100.

  El juego debe de permitir al usuario ingresar un numero
  y la computadora debe de generar un numero aleatorio
  entre 1 y 100.

  El juego debe de imprimir si el numero ingresado por
  el usuario es mayor, menor o igual al numero generado
  por la computadora.

  El juego debe de terminar cuando el usuario adivine
  el numero.

  Ademas debes de tener un contador que se reste uno cada
  vez que el usuario ingrese un numero.

  El usuario debe de tener un maximo de 6 intentos para
  adivinar el numero. */

//Ver.PE

let numeroAleatorio;
let intentos;
let adivinado;

/**
 * @function generarNumeroAleatorio - Genera un número aleatorio entre 1 y 100
 * @returns {number} - Devuelve un número aleatorio entre 1 y 100
 */
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * @function obtenerNumeroUsuario - Obtiene un número ingresado por el usuario
 * @returns {number} - Devuelve un número ingresado por el usuario
 */
function obtenerNumeroUsuario() {
  let numero = 0;
  do {
    numero = prompt("Ingrese un número entre 1 y 100:");
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
    } else if (numero < 1 || numero > 100) {
      alert("El número debe estar entre 1 y 100.");
    }
  } while (isNaN(numero) || numero < 1 || numero > 100);
  return Number(numero);
}

/**
 * @function jugar - Inicia el juego de adivinar un número aleatorio
 */
function jugar() {
  alert("Juego de adivinar un número aleatorio entre 1 y 100");
  numeroAleatorio = generarNumeroAleatorio();
  intentos = 6;
  adivinado = false;

  while (intentos > 0 && !adivinado) {
    let numeroUsuario = obtenerNumeroUsuario();

    if (numeroUsuario > numeroAleatorio) {
      intentos--;
      if (intentos === 0) {
        alert(
          `Lo siento, has agotado tus intentos. El número era ${numeroAleatorio}.`
        );
      } else {
        alert(
          `Ups!, el número es menor al que ingresaste. Te quedan ${intentos} intentos.`
        );
      }
    } else if (numeroUsuario < numeroAleatorio) {
      intentos--;
      if (intentos === 0) {
        alert(
          `Lo siento, has agotado tus intentos. El número era ${numeroAleatorio}.`
        );
      } else {
        alert(
          `Ups!, el número es mayor al que ingresaste. Te quedan ${intentos} intentos.`
        );
      }
    } else {
      adivinado = true;
      alert(
        `¡Felicidades! Adivinaste el número en ${
          6 - intentos
        } intentos. ¡Serás el próximo Elon Musk! :D`
      );
    }
  }
}

// Llamada a la función para iniciar el juego
jugar();
