// Operador .valueOf() - obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());
// NaN (Not a Number) - Infinity
let n = Number('Adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log(typeof num2);
console.log(numero + num2); // Lo esta concatenando y no sumando

console.log(Number(numero) + num2);


console.log(parseInt(numero)); // lo pasa a entero
console.log(parseFloat(numero)); // lo pasa a decimales

let num3 = 4;
console.log(parseFloat(num3));
console.log(parseInt(num3));

// Números hexadecimales (base 16)
let numHex = '0X3a5b7';
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en JavaScript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
