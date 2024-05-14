/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/

function imprimirMayus(palabra) {
    palabra = (palabra.toString()).toUpperCase();
    let palabraMayus = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraMayus = palabraMayus + palabra[i] + " ";
    }
    return palabraMayus;
}
console.log(imprimirMayus('hola que tal'));

/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/

function contarNombre(nombre) {
    let contador = 1;
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === " ") {
            contador++;
        }
    }
    return contador;
}
console.log(contarNombre("Stephani Damiani Kaemena"))