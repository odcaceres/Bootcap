// Metodos de cadena de taxto - parte 2
let input = "Escorpio";
db = "escorpio";

// toLowerCase - toUpperCase

console.log(input.toLowerCase());
console.log(db.toLowerCase());
console.log(input.toUpperCase());
console.log(db.toUpperCase());

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar dos cadenas de caracteres

let srt1 = "Hola soy la primera cadena.";
let srt2 = "Hola soy la segunda cadena";

console.log(srt1.concat(" ", srt2));
console.log(srt1 + " " + srt2);
console.log(`${srt1} ${srt2}`);

// Eliminar espacios al inicio y al final

let str3 = "    Hola soy un string con espacios al final.   ";
console.log(str3);
console.log(str3.length);
//trim()
console.log(str3.trim().length);

// Para eliminar espacios de principio
console.log(str3.trimStart().length);
// Para eliminar espacios al final
console.log(str3.trimEnd().length);

// Obtener el caracter que hay en cierta posición

let str4 = "Hola soy el string numero 4";

console.log(str4.charAt(5))
console.log(str4[5]);

// Obtener la posicón de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Gorka mi nombre es Gorka y mi apellido es Villar";
console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka"));
