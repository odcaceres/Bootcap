// ejercicio 4
/*
Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

let str_nombre = "Oscar";
let str_apellido = "Caceres";
let estudiante = `${str_nombre} ${str_apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase()
let longuitud_estudiante = estudiante.length;
let primer_letra = str_nombre.slice(0,1);
let ultima_letra = str_apellido.slice(-1);
let estudiante_sin_esacios = estudiante.replace(" ","");
let boolean = estudiante.includes(str_nombre);


console.log(str_nombre);
console.log(str_apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longuitud_estudiante);
console.log(primer_letra);
console.log(ultima_letra);
console.log(estudiante_sin_esacios);
console.log(boolean);
