//Ejercicio 3
//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y 
// una sentencia break
//factorial-break.js -> 

let numero = 10;
let resultado = 1;
let i = 1;

while(i <= numero){

    if(i === 10){
        break;
    }
    
    resultado = resultado * i;
    i++;
}

console.log(`El factorial de ${numero} es ${resultado}`);