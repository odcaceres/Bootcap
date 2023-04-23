// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index0";
const lista4 = [lista,lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}
movil.anyo = 2019;
movil.marca = "Samsung";

console.log(movil.contactos);
console.log(movil.tarjeta.almacenamiento);
console.log(movil.anyo);
console.log(movil.marca);
console.log(movil["altura-tarjeta"]);

// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cedana = new Date("march 25 2020");
console.log(fecha_cedana);

const fecha_valoers = new Date(2020, 0, 15);
console.log(fecha_valoers)

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);