// Métodos mas utilizados con cadenas de caracteres
// Cómo obtener la longuitud de un string

let str = "Hola soy un string";

console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice()  substring()  substr()
let slice_str = str.slice(0,10);
console.log(slice_str);

let substring_str = str.substring(0,10);
console.log(substring_str);

let substr_str = str.substr(0,10);
console.log(substr_str);

// Reemplazar parte de un contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka";
console.log(cadena);

// Al utilizar string solo reemplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel'));

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(textoLargo.replaceAll('los', 5));

// Al utilizar la expresion regular /g (Global), reempaza todas las instancias.
console.log(textoLargo.replaceAll(/los/g, 'cinco'));


