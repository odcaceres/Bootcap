// Casos muy especiales - Break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < lista.length; i++) {

    if(lista[i] === 3){
        continue;
    }

    console.log(lista[i]);


    let j = 50;
    const k = 100;

    console.log(j);
    console.log(k);
    if(lista[i] > 5){
        break;
    }    
}

console.log(j);
console.log(k);
console.log(i);



// Cuál es el ámbito de un bucle
