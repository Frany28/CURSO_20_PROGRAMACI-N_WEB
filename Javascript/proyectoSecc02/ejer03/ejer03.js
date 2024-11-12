/*3. Crea un programa orientado a objetos que sea un gestor
  de tareas.

  El programa debe de tener las siguientes clases:
  - Tarea
    - Propiedades: nombre, descripcion, fecha, completada

  - ListaTareas
    - Propiedades: tareas (array de tareas)
    - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea), 
    ver tareas()

  El programa debe de permitir al usuario agregar tareas,
  completar tareas y eliminar tareas. Ademas debe de permitir
  al usuario ver todas las tareas. 

  El programa debe de tener un menu que permita al usuario
  seleccionar una opcion.

  El programa debe de terminar cuando el usuario seleccione
  salir.

  debes usar alert() y prompt() para interactuar con el usuario.*/

/**
 * Clase Tarea
 * @class Tarea - Clase para representar una tarea
 */
class Tarea {
  /**
   * @param {string} nombre - Nombre de la tarea
   * @param {string} descripcion - Descripcion de la tarea
   * @param {string} fecha - Fecha de la tarea
   * @param {boolean} completada - Indica si la tarea esta completada
   */
  constructor(nombre, descripcion, fecha) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completada = false;
  }
}

/**
 * Clase ListaTareas
 * @class ListaTareas - Clase para representar una lista de tareas
 */
class ListaTareas {
  /**
   * @param {Tarea[]} tareas - Array de tareas
   */
  constructor() {
    this.tareas = [];
  }
  /**
   * @method aggTarea - Agrega una tarea a la lista de tareas
   */
  aggTarea(tarea) {
    this.tareas.push(tarea);
  }

  /**
   * @method compTarea - Completa una tarea de la lista de tareas
   */
  compTarea(tareaNombre) {
    const tarea = this.tareas.find((i) => i.nombre === tareaNombre);
    if (tarea) {
      tarea.completada = true;
      alert("Tarea completada.");
    } else {
      alert("Tarea no encontrada.");
    }
  }
  /**
   * @method elimTarea - Elimina una tarea de la lista de tareas
   */
  elimTarea(tareaNombre) {
    const index = this.tareas.findIndex((j) => j.nombre === tareaNombre);
    if (index !== -1) {
      this.tareas.splice(index, 1);
      alert("Tarea eliminada.");
    } else {
      alert("Tarea no encontrada.");
    }
  }

  /**
   * @method verTareas - Muestra todas las tareas de la lista de tareas
   */
  verTareas() {
    if (this.tareas.length === 0) {
      alert("No hay tareas en la lista.");
    } else {
      for (const tarea of this.tareas) {
        alert(
          `Nombre: ${tarea.nombre} \nDescripcion: ${tarea.descripcion} \nFecha: ${tarea.fecha} \nCompletada: ${tarea.completada}`
        );
      }
    }
  }
}

const listaTareas = new ListaTareas();

/**
 * @function menuTareas - Muestra el menu de tareas
 */
function menuTareas() {
  alert("Bienvenido al gestor de tareas más confiable del mundo 🌎");
  let op;

  do {
    op = prompt(
      "¿Qué desea hacer? \n 1. Agregar tarea \n 2. Completar tarea \n 3. Eliminar tarea \n 4. Ver tareas \n 5. Salir"
    );

    switch (op) {
      case "1":
        const nombre = prompt("Nombre de la tarea:");
        const descripcion = prompt("Descripción de la tarea:");
        const fecha = prompt("Fecha de la tarea (dd/mm/yyyy):");
        const tarea = new Tarea(nombre, descripcion, fecha);
        listaTareas.aggTarea(tarea);
        break;
      case "2":
        const tareaCompletar = prompt("Nombre de la tarea a completar:");
        listaTareas.compTarea(tareaCompletar);
        break;
      case "3":
        const tareaEliminar = prompt("Nombre de la tarea a eliminar:");
        listaTareas.elimTarea(tareaEliminar);
        break;
      case "4":
        listaTareas.verTareas();
        break;
      case "5":
        alert("Gracias por usar el gestor de tareas, ¡hasta pronto!");
        break;
      default:
        alert("Opción no válida, debes escribir un número del 1 al 5.");
    }
  } while (op !== "5");
}

menuTareas();
