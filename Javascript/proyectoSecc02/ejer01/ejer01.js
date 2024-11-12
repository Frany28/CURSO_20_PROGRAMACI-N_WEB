/*  1. Crea un juego de piedra papel o tijera utilizando
  funciones y ciclos.

  El juego debe permitir al usuario seleccionar una opcion
  y la computadora seleccionara una opcion aleatoria.

  Las opciones son:
  - Piedra
  - Papel
  - Tijera

  Las reglas son:
  - La piedra aplasta la tijera
  - La tijera corta el papel
  - El papel envuelve la piedra

  El juego debe de imprimir quien gano y si el usuario
  desea seguir jugando.

  El juego debe de terminar cuando el usuario seleccione
  que no desea seguir jugando.

  Ademas debes de tener un contador que indique cuantas
  partidas se han jugado, cuantas ha ganado el usuario
  y cuantas la computadora.

  Puedes utilizar la funcion prompt() para obtener la
  seleccion del usuario.*/

//VER PE
/**
 * Juego de Piedra, Papel o Tijera
 * @function juego - Función principal para jugar a piedra papel o tijera
 */

/**
 * @var {number} jugadas - Contador de partidas jugadas
 * @var {number} contVicJug - Contador de victorias del jugador
 * @var {number} contVicComp - Contador de victorias de la computadora
 * @var {array} opciones - Opciones del juego
 */

let jugadas = 0;
let contVicJug = 0;
let contVicComp = 0;
let opciones = ["Piedra", "Papel", "Tijera"];
let opcionJug;

/**
 * @function victoria - Muestra un mensaje de victoria y actualiza los contadores
 * @param {number} npc - Índice de la opción de la computadora
 */
function victoria(npc) {
  contVicJug++;
  jugadas++;
  alert(`¡Ganaste! ${opcionJug} vence a ${opciones[npc]}`);
  historial();
}

/**
 * @function derrota - Muestra un mensaje de derrota y actualiza los contadores
 * @param {number} npc - Índice de la opción de la computadora
 */
function derrota(npc) {
  contVicComp++;
  jugadas++;
  alert(`¡Lástima! ${opciones[npc]} vence a ${opcionJug}`);
  historial();
}

/**
 * @function obtenerOpcionUsuario - Obtiene la opción elegida por el usuario
 * @returns {string} - Opción elegida por el usuario
 */
function obtenerOpcionUsuario() {
  do {
    opcionJug = prompt("Elige piedra, papel o tijera").toLowerCase();
    if (!["piedra", "papel", "tijera"].includes(opcionJug)) {
      alert("Opción inválida. Por favor, elige entre piedra, papel o tijera.");
    }
  } while (!["piedra", "papel", "tijera"].includes(opcionJug));
  return opcionJug;
}

/**
 * @function historial - Muestra el historial de partidas jugadas, victorias del jugador y victorias de la computadora
 */
function historial() {
  alert(
    `Partidas jugadas: ${jugadas}\nPartidas ganadas: ${contVicJug}\nPartidas perdidas: ${contVicComp}`
  );
}

/**
 * @function jugar - Inicia el juego y realiza los procesos de comprobación de la respuesta del usuario
 */
function jugar() {
  let seguir;
  alert("Bienvenido al juego de Piedra, Papel o Tijera");
  do {
    let npc = Math.floor(Math.random() * 3);
    obtenerOpcionUsuario();
    alert(`La computadora eligió ${opciones[npc]}`);
    if (opcionJug === opciones[npc].toLowerCase()) {
      alert(`Empate, ambos eligieron ${opciones[npc]}`);
    } else if (
      (opcionJug === "piedra" && opciones[npc] === "Tijera") ||
      (opcionJug === "tijera" && opciones[npc] === "Papel") ||
      (opcionJug === "papel" && opciones[npc] === "Piedra")
    ) {
      victoria(npc);
    } else {
      derrota(npc);
    }

    seguir = prompt("¿Deseas seguir jugando? (S/N)").toLowerCase();
    if (seguir !== "s" && seguir !== "n") {
      alert("Por favor, introduce S o N");
    } else if (seguir === "n") {
      alert("Gracias por jugar");
    }
  } while (seguir === "s");
}

// Ejecuta el juego
jugar();

/*
  VER.POO
 * Clase Juego
 * @class Juego - Clase para jugar a piedra papel o tijera


class Juego {
  
   * @param {number} jugadas - Contador de partidas jugadas
   * @param {number} contVicJug - Contador de victorias del jugador
   * @param {number} contVicComp - Contador de victorias de la computadora
   * @param {array} opciones - Opciones del juego
   *
  
  constructor() {
    this.jugadas = 0;
    this.contVicJug = 0;
    this.contVicComp = 0;
    this.opciones = ["Piedra", "Papel", "Tijera"];
  }


   * @method victoria - Muestra un mensaje de victoria y actualiza los contadores
   * @param {number} npc - Indice de la opcion de la computadora
  
  victoria(npc) {
    this.contVicJug++;
    this.jugadas++;
    alert(`¡Ganaste! ${this.opcionJug} vence a ${this.opciones[npc]}`);
    this.historial();
  }

   * @method derrota - Muestra un mensaje de derrota y actualiza los contadores
   * @param {number} npc - Indice de la opcion de la computadora
   * 
  derrota(npc) {
    this.contVicComp++;
    this.jugadas++;
    alert(`¡Lástima! ${this.opciones[npc]} vence a ${this.opcionJug}`);
    this.historial();
  }


   * @method obtenerOpcionUsuario - Obtiene la opcion elegida por el usuario
   * @returns {string} - Opcion elegida por el usuario
  
  obtenerOpcionUsuario() {
    do {
      this.opcionJug = prompt("Elige piedra, papel o tijera").toLowerCase();
      if (!["piedra", "papel", "tijera"].includes(this.opcionJug)) {
        alert(
          "Opción inválida. Por favor, elige entre piedra, papel o tijera."
        );
      }
    } while (!["piedra", "papel", "tijera"].includes(this.opcionJug));
  }

  
   * @method historial - Muestra el historial de partidas jugadas, victorias del jugador y victorias de la computadora
  
  historial() {
    alert(
      `Partidas jugadas: ${this.jugadas}\nPartidas ganadas: ${this.contVicJug}\nPartidas perdidas: ${this.contVicComp}`
    );
  }

  
   * @method jugar - Inicia el juego y realiza los procesos de comprobación de la respuesta del usuario
  
  jugar() {
    let seguir;
    alert("Bienvenido al juego de Piedra, Papel o Tijera");
    do {
      let npc = Math.floor(Math.random() * 3);
      this.obtenerOpcionUsuario();
      alert(`La computadora eligio ${this.opciones[npc]}`);
      if (this.opcionJug === this.opciones[npc].toLowerCase()) {
        alert(`Empate, ambos eligieron ${this.opciones[npc]}`);
      } else if (
        (this.opcionJug === "piedra" && this.opciones[npc] === "Tijera") ||
        (this.opcionJug === "tijera" && this.opciones[npc] === "Papel") ||
        (this.opcionJug === "papel" && this.opciones[npc] === "Piedra")
      ) {
        this.victoria(npc);
      } else {
        this.derrota(npc);
      }

      seguir = prompt("¿Deseas seguir jugando? (S/N)").toLowerCase();
      if (seguir !== "s" && seguir !== "n") {
        alert("Por favor, introduce S o N");
      } else if (seguir === "n") {
        alert("Gracias por jugar");
      }
    } while (seguir === "s");
  }
}

let juego = new Juego();
juego.jugar();*/
