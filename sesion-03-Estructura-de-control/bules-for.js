// Bucles For

/*
for(inicializacion; condicion; actualizacion){

    seccion de bucle
}
*/

for (let i = 0; i < 10; i++) {
    
    console.log(i);
    
}

for (let i = 0; i < 10; i = i + 2) {
    
    console.log(i);
    
}
for (let i = 0; i < 10; i = i + 3) {
    
    console.log(i);
    
} 

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    
}

// Estructura for...of
for (const valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
});

// estructura for ...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    IsDeveloper: true
}

for (let propiedad in persona) {
    
    console.log(persona[propiedad]);
    
}
