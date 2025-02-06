"use strict";
let nombre = "juan";
//Tipos de datos
let apellido = "Perez";
let edad = 32;
let casado = false;
let fechaNacimiento = new Date();
let extra = "Cualquier cosa";
let sinDefinir = undefined;
let nulo = null;
//para declarar un arreglo se hace de la siguiente manera
let numeros = [1, 2, 3, 4, 5];
// otra forma de declarar un arreglo
let nombres = ["Juan", "Pedro", "Carlos"];
//Declarar un array con varios tipos de datos
let varios = [1, "Juan", true];
//Para declarar un objeto se hace de la siguiente manera
let persona = {
    nombre: "Juan",
    edad: 32,
};
//declarar una funcion que retotne un numero
function suma(a, b) {
    return a + b;
    //si una funcion no retorna nada se pone void
}
suma(1, 2);
//para declarar una clase se hace de la siguiente manera
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let juan = new Persona("Juan", 32);
let persona2 = {
    nombre: "Juan",
    edad: 32,
};
let persona3 = {
    nombre: "Pedro",
};
//Manejar elementos del DOM con TypeScript
//let elemento: HTMLElement = document.getElementById("elemento");
