//ES6
//Arow functions o funciones flecha

const sumar = (a, b) => a + b;

console.log(sumar(10, 20));
//Funciones flecha (Arrow functions) tambien son conocidas como funciones anonimas
//Son una forma de escribir funciones de manera mas corta y pueden ser
//asignadas a una variable

//spreead operator
let numeros = [1, 2, 3, 4, 5];
let otrosNumeros = [6, 7, 8, 9, 10];

let todosLosNumeros = [...numeros, ...otrosNumeros];

// funciona con objetos y arrays
let persona = {
  nombre: "Juan",
  edad: 20,
};

//spread operator agregando propiedades al objeto y conservando los valores anteriores
//no es recomendable usarlo para objetos muy anidados
persona = { ...persona, trabajo: "programador" };
persona.trabajo = "programador";

//Map te permite recorrer un array y ejecutar
//una funcion para cada elemento siempre espera una funcion y un array
numeros.map((numero, indice) => console.log(numero * 2, indice));
//el indice te muestra la posición

//Operador terniario
let resultado = 10 > 5 ? "verdadero" : "falso";
let resultado2 = 10 > 15 && 2 < 1 ? "verdadero" : "falso";
console.log(2 > 1 ? "verdadero" : "falso");

//Destructuracion de objetos
/*
la destructuracion de objetos consiste en
extraer las propiedades de un objeto y
asignarlas a variables individuales
*/
let numeros5 = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = numeros5;
console.log(a, b, c, d, e);

let persona2 = {
  nombre: "Juan",
  edad: 20,
  trabajo: "programador",
};
let { nombre } = persona2;
//let nombre = persona2.nombre;
console.log(nombre);

//Destructuracion de arrays
const colors = ["red", "green", "blue"];
let [color1, color2, color3] = colors;
console.log(color1);

//Destructuracion en funciones
function introducMe({ nombre: name }) {
  console.log(`Hola ${name}, soy el desarrollador de este sitio`);
}

introducMe(persona2);

/*
ejercicios para practicar
Crear una funcion que reciba dos numeros y devuelva la suma de ambos
crear una funcion que reciba un array de 5 numeros y devuelva la suma de todos los numeros
*/

const sumar2 = (a, b) => console.log(a + b);

a = 10;
b = 20;

sumar2(a, b);

//suma de array con reduce
arrayNum = [1, 2, 3, 4, 5];

const sumarArray = arrayNum.reduce((valAnt, valAct) => valAnt + valAct);

console.log(sumarArray);

//DOM Document Object Model
//se encarga de gestionar el HTML

//ejemplo de uso
//crear un div
//propiedades intricicas
const newDiv = document.createElement("div");

//propiedades de un elemento del DOOM manipuladas con JS

/*introducir un div directo del javascript al html
newDiv.innerHTML = "<h1>Esto es un div</h1>";
newDiv.className = "Container";
//Ponerle nombre a la clase div
newDiv.id = "newDiv";
//agregar el estilo de color al texto
newDiv.style.color = "red";
//cambiar el texto del div
newDiv.innerText = "Esto es un div";
//agregar al body el div
document.body.appendChild(newDiv);*/

//traer un elemento por el nombre del tag
const h1 = document.querySelector("h1");
h1.innerHTML = "Esto es un h1";
h1.className = "Title";

/* Otras formas
const h1s = document.querySelectorAll("h1");

const h1s2 = document.getElementsByTagName("h1");*/

//todos los elementos que tenga esta clase
const button = document.getElementsByClassName("Button");

button[0].innerText = "Esto es un boton";

//por id

const container = document.getElementById("principal");

container.className = "Container";

//Por querySelector
const button2 = document.querySelector("#principal");

//todos los elementos de una clase
const buttons = document.querySelectorAll(".Button");
buttons.forEach((button) => {
  button.innerText = "Esto es un boton nuevo";
});

//eventos
/**
 * Manera en la que nosotramos comunicados con el html
 * controlar los cambios y que ocurre en la pagina un ejemplo es el click
 * del boton o hacer hover sobre un elemento basicamente todo es un evento
 */

//ejemplo
const goodButton = document.querySelector(".Button");
//al hacer click en el boton se ejecuta la funcion
goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno");
});
