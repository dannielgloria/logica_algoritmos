// Imprimir nombres
const estudiantes = ["Ana", "Mario", "Lucía"];

console.log("Usando for...of: ");
for (const estudiante of estudiantes) {
    console.log("Nombre del estudiante: " + estudiante);
}

console.log("Usando for tradicional: ");
for (let i = 0; i < estudiantes.length; i++) {
    console.log("Nombre del estudiante: " + estudiantes[i]); // ejecuta n veces, donde n es el número de estudiantes
    // O(n) - Complejidad lineal, ya que el tiempo de ejecución crece proporcionalmente al número de estudiantes
}

console.log("Usando while: ");
while (estudiantes.length > 0) {
    const estudiante = estudiantes.pop();
    console.log("Nombre del estudiante: " + estudiante); // ejecuta n veces, donde n es el número de estudiantes
    // O(n) - Complejidad lineal, ya que el tiempo de ejecución crece proporcionalmente al número de estudiantes
}

// En que momento va a variar a complejidad?
// la  complejidad puede variar si se incrementa o se disminuye (i++ o i--) el número de estudiantes, 
// ya que el tiempo de ejecución se verá afectado por la cantidad de elementos en el array. 
// Si el número de estudiantes aumenta, el tiempo de ejecución también aumentará proporcionalmente, 
// lo que se refleja en la complejidad O(n). Por otro lado, si el número de estudiantes disminuye, 
// el tiempo de ejecución también disminuirá proporcionalmente.

// si la variable se incrementa o decrementa dada una multiplicación o división, 
// la complejidad puede variar a O(log n) o O(n log n), dependiendo de cómo se realice la operación.


const productos = [
    {nombre : "Mouse", stock: 3},
    {nombre : "Teclado", stock: 0},
    {nombre : "Monitor", stock: 2},
    {nombre: "Cable", stock: 0}    
]
productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre}, Stock: ${producto.stock}`);
});



// Cuenta cuántos productos tienen stock igual a 0
let productosSinStock = 0;
for (let producto of productos) {
    if (producto.stock === 0) {
        console.log(producto.nombre + " no tiene stock.");
        productosSinStock++;
    }
}
console.log(`Número de productos sin stock: ${productosSinStock}`);

//
let noStock = 0;
for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock === 0) {
        console.log(productos[i].nombre + " no tiene stock.");
        noStock++;
    }
}
console.log(`Número de productos sin stock: ${noStock}`);


const calificaciones = [8, 9, 7, 10];
let total = 0; 
for (const cali of calificaciones) {
    total = total + cali;
}
console.log("El total de las calificaciones es ", total);


let cantidadAgotados = 0; 

for (const item of productos) {
    if (item.stock === 0) {
        cantidadAgotados = cantidadAgotados + 1;
    }
}
console.log("tienes", cantidadAgotados, "productos agotados :(((");
