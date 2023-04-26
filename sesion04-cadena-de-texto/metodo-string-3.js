// Metodo de cadena de texto (parte 3)
// http://regexr.com

let texto_Largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_Largo.match(/ no /g));

// ¿Existe la palabra dentro del texto
console.log(texto_Largo.includes("prefiero"));

// Saber si un texto empieza con una palabra
console.log(texto_Largo.startsWith("T"));

// Saber si un texto termina con otra palabra
console.log(texto_Largo.endsWith("."));