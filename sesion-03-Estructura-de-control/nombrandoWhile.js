// Brak y continue
// labels

let unidades = 0;
let decenas = 0;

bucleDecena: while(true){
    bucleUnidades: while(true){
        console.log(`El numero actual de decena es:  ${decenas} y de la unidad es: ${unidades}`);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break bucleUnidades;
        }

        if (decenas === 2){
            break bucleDecena;
        }
    }
    decenas++;
}