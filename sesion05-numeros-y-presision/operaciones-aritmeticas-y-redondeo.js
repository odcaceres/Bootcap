// Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma(+)
console.log(a + b);

// Resta (-)
console.log(a - b);

// Multiplicacion (*)
console.log(a * b);

// División (/)
console.log(a / b);

// Reprresentación de los números en cadena de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);

// .toFixed() - limitar el numero de decimales al valor x y loconvierte a string
console.log( d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 1839.1232456789;
let f = 22135566153215;

console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x)
console.log(e.toPrecision(7));
console.log(f.toPrecision(7))

console.log(typeof f.toPrecision(3));