// Foreach ¿Qué quiero hacer con cada elemento? y me devuelve un nuevo arreglo con los resultados de aplicar la función a cada elemento del arreglo original.

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
    //console.log(numero * 2);
});

// map ¿Cómo transformo cada elemento? y nos devuelve un arreglo nuevo aplicando transformacion encada elemento

const carrito=[
    {nombre: "Fabuloso", precio: 10, categoria: "limpieza", descuento: 0.6}, 
    {nombre: "Gelatina", precio: 20, categoria: "comida", descuento: 0}, 
    {nombre: "Cloro", precio: 30, categoria: "limpieza", descuento: 0.5}];

const productosDeLimpieza = carrito.map((producto) => {
    if (producto.categoria === "limpieza") {
        return producto;
    } else {
        return null;
    }
})

//console.log(productosDeLimpieza);
//console.log(carrito);

// filter ¿Qué elementos cumplen una condición? y devuelvo un arreglo nuevo filtrado

const productosConDescuento = carrito.filter((producto) => {
    return producto.descuento > 0;
});

//console.log(productosConDescuento);

// find ¿Cuál es el primer elemento que cumple una condición? y devuelve el primer elemento que cumple la condición o undefined si no se encuentra ninguno.

const productoAlimenticio = carrito.find((producto) => {
    return producto.categoria === "salchichoneria";
}); 
//console.log(productoAlimenticio);

// includes ¿El arreglo incluye un elemento específico? y devuelve true si el elemento se encuentra en el arreglo, o false si no se encuentra.

const frutas = ["manzana", "banana", "naranja"];
const tieneBanana = frutas.includes("banana");
console.log(tieneBanana);


// some ¿Algún elemento cumple una condición? y devuelve true si al menos un elemento del arreglo cumple la condición, o false si ninguno la cumple.
// every ¿Todos los elementos cumplen una condición? y devuelve true si todos los elementos del arreglo cumplen la condición, o false si al menos uno no la cumple.

const numeros2 = [1, 2, 3, 4, 5];
const tieneNumeroMayorQueTres = numeros2.some((numero) => numero > 3);
console.log(tieneNumeroMayorQueTres);

const todosSonMayoresQueDiez = numeros2.every((numero) => numero > 10);
console.log(todosSonMayoresQueDiez);

// sort ¿Cómo ordeno los elementos? y devuelve un nuevo arreglo con los elementos ordenados según una función de comparación.
// reduce ¿Cómo reduzco el arreglo a un solo valor? y devuelve un único valor que se obtiene al aplicar una función acumuladora a cada elemento del arreglo, desde el primer hasta el último.

// sort
const numeros3 = [5, 2, 9, 1, 5];
const numerosOrdenados = numeros3.sort((a, b) => b - a);
console.log(numerosOrdenados);
// ordenamiento sort paso a paso

// reduce
const numeros4 = [10, 8, 10, 2, 10];
const sumaTotal = numeros4.reduce((acumulador, numero) => acumulador + numero, 0);
const promedio = sumaTotal / numeros4.length;
console.log("Total: " + sumaTotal);
console.log("Promedio: " + promedio);