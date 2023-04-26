// Sesion 04 - String (Cadena de caracteres)
let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';

console.log(str_dbl);
console.log(str_sng);

let str_comillas = "El otro día me dijo literalmente \" ve a sacar la basura \"";
let str_comillas_simples = 'El otro día me dijo literalmente "Ve a sacar la basura"';
let str_comillas_dobles = "El otro día me dijo literalmente 'Ve a sacar la basura'";
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'Ve a sacar la basura\'';

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

// Comillas invertidas (backticks)

let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks)

let nombre = "Pepe";
let saludo = `Hola, ${nombre} Bienvenido`

console.log(saludo);

// Plantillas HTML

let plantilla = 
`<html>
    <h1>Página web de ${nombre}<\h1>
    <p>Este es un parrafo<\p>
<\html>`;

// Introduccion de variables en html
let listas = ["Empiza por el por qué", "El monje que vendio su ferrari", "El poder de la hora"];
