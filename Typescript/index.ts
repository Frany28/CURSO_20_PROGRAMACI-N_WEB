let nombre = "juan";
//Tipos de datos
let apellido: string = "Perez";
let edad: number = 32;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();
let extra: any = "Cualquier cosa";
let sinDefinir: undefined = undefined;
let nulo: null = null;

//para declarar un arreglo se hace de la siguiente manera
let numeros: number[] = [1, 2, 3, 4, 5];
// otra forma de declarar un arreglo
let nombres: Array<string> = ["Juan", "Pedro", "Carlos"];
//Declarar un array con varios tipos de datos
let varios: Array<any> = [1, "Juan", true];

//Para declarar un objeto se hace de la siguiente manera
let persona: { nombre: string; edad: number } = {
  nombre: "Juan",
  edad: 32,
};

//declarar una funcion que retotne un numero
function suma(a: number, b: number): number {
  return a + b;
  //si una funcion no retorna nada se pone void
}

suma(1, 2);

//para declarar una clase se hace de la siguiente manera
class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let juan = new Persona("Juan", 32);

//para declarar una interfaz se hace de la siguiente manera
/*Las interfaces son un tipo de dato que se utiliza para definir la estructura de un objeto,
es decir, las propiedades y métodos que debe tener un objeto para que sea válido. */

//Interfaz con parametros opcionales
interface IPersona {
  nombre: string;
  edad?: number; //el signo de interrogacion indica que el parametro es opcional
}

let persona2: IPersona = {
  nombre: "Juan",
  edad: 32,
};

let persona3: IPersona = {
  nombre: "Pedro",
};

//Manejar elementos del DOM con TypeScript
//let elemento: HTMLElement = document.getElementById("elemento");
