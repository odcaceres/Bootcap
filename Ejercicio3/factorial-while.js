// Ejercicio 3
// factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while


let numero = 10;
let resultado = 1;
let i = 1;

while(i <= numero){

    resultado = resultado * i;
    i++;
}

console.log(`El factorial de ${numero} es ${resultado}`);