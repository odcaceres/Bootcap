// Ejercicio 03 - 
// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for


let numero = 10;
let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
}

console.log(`El factorial de ${numero} es ${resultado}`);