function fibonacciHasta(max) {
    let fib = [0, 1]; //se crea un array con los 2 primeros numeros de la secuencia de fibonacci
    let i = 0; //se crea la variable i para cortar la iteracion
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2]; //se suma los dos ultimos numeros de la secuencia para formar el siguiente numero
        i++;
        if (i >= max) break; //se rompe la iteracion
        fib.push(next); //se agrega el siguiente numero al array
    }
    console.log("secuencia de fibonacci entre 0 y 1000:",fib); //se muestra la secuencia
//--------------------------------------------------------------------------------------
    let pares = fib.filter(num => num % 2 === 0); //se filtra los numeros pares
    console.log("Numeros pares de fibonacci entre 0 y 1000:",pares); //se muestra la secuencia
//--------------------------------------------------------------------------------------
    let impares = fib.filter(num => num % 2 !== 0); //se filtra los numeros impares
    console.log("Numeros impares de fibonacci entre 0 y 1000:",impares); //se muestra la secuencia
}
fibonacciHasta(1000);

//----------------------------------------------------------------------------------------------

let pokemon =['Pikachu','Charmander','Bulbasaur','Squirtle']
let mayusculas = pokemon.map(nombre => nombre.toUpperCase());
//se utiliza map para transformar cada elemento del array en mayusculas
console.log("se muestra el array con los nombres en mayusculas:",mayusculas); //se muestra el array transformado

let pokemon2 = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

let tipoFuego = pokemon2.filter(p => p.tipo === 'Fuego');
//se utiliza filter para filtrar los pokemons que tienen el tipo de fuego 
console.log("Se muestran los pokemons tipo fuego:",tipoFuego); //se muestran los pokemons filtrados
