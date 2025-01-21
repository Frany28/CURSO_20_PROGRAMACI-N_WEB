/**
 * Expresiones regulares
 * Son una herramienta que permite realizar validaciones de strings
 * Estructura de una expresión regular: /patrón/modificadores
 */

let texto = "Hola mundo";
let expresion = /mundo/;
console.log(expresion.test(texto));

let nombre = "Juan1";
let expresionNombre = /[A-Za-z]/;
console.log(expresionNombre.test(nombre));

let nombreCompleto = "Juan Pérez";
let expresionNombreCompleto = /[A-Za-záéíóú\s]/; //valores con acentos y espacios
console.log(expresionNombreCompleto.test(nombreCompleto));

let email = "hola@hola.com";

let expresionEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/; //validación de correos
console.log(expresionEmail.test(email));

let telefono = "123456789000";
let expresionTelefono = /\d{10}/; //minimo 10 digitos
console.log(expresionTelefono.test(telefono));

let fecha = "01/01/2021";
let expresionFecha = /\d{2,2}\/\d{2,2}\/\d{4,4}/; //dd/mm/aaaa
console.log(expresionFecha.test(fecha));

let email2 = "hola@hola.com";
let expresionEmail2 =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
console.log(expresionEmail2.test(email2));

//Contraseña con minimo una letra miniscula, mayuscula, un numero, un caracter especial y minimo 8 caracteres
let password = "Aa1@123456";
let expresionPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;
console.log(expresionPassword.test(password));

"hola" == "Hola";

let saludo = "Hola";
let saludoRegex = /hola/i; //i = insensible a mayusculas
console.log(saludoRegex.test(saludo));

/**
 * Importar y exportar módulos
 * Permite dividir el código en diferentes archivos
 * Exportar: Se exporta una variable, función o clase
 * Importar: Se importa una variable, función o clase
 */

let funcion = () => {
  console.log("Hola");
};

let data = "Hola";

//Node.js
export { funcion, data };

//Vanilla JS
module.exports = { funcion, data };

/**
 * 1)
 * Proyectos para la sección 3
 * Crea un formulario de registro que pidan los siguientes datos:
 * - Nombre
 * - Apellido
 * - Correo electrónico
 * - Contraseña
 * - Confirmar contraseña
 *
 * Validaciones:
 * - Nombre y apellido: Solo letras y espacios
 * - Correo electrónico: Debe tener un formato válido
 * - Contraseña: Mínimo una letra minúscula, una mayúscula, un número, un caracter especial (!$-_.,) y mínimo 8 caracteres
 * - Confirmar contraseña: Debe ser igual a la contraseña
 *
 * Debes crear una interfaz gráfica para el formulario y mostrar mensajes de error en caso de que el
 * usuario ingrese datos incorrectos.
 *
 * 2) Crea una lista de tareas en donde puedas agregar, eliminar, editar y marcar como completada una tarea
 * Debe de tener una interfaz gráfica
 *
 * 3) Crea un juego de piedra papel o tijera en donde puedas jugar contra la computadora,
 * que te muestre la cantidad de victorias, derrotas, empates y un historial de las ultimas
 * 5 partidas jugadas (debe mostrar que jugaste, que jugó la computadora)
 *
 * Fecha de entrega: 22 de noviembre
 */
