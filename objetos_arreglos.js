const carrito = [
  { nombre: "Playera", precio: 250, cantidad: 2 },
  { nombre: "Gorra", precio: 180, cantidad: 1 },
  { nombre: "Tenis", precio: 1200, cantidad: 1 }
];

let total = 0;

for (const producto of carrito) {
  total = total + (producto.precio * producto.cantidad);
}

console.log("Total del carrito:", total);

// arreglos con objetos:
const estudiantes = [
    {nombre: "Juan", edad: 20},
    {nombre: "María", edad: 22},
    {nombre: "Pedro", edad: 19}
];

// Objetos con arreglos:
const curso = {
    estudiantes: ["Juan", "María", "Pedro"] ,
    estudiantes: ["Juanito", "Maríana", "Pedrito"],
    estudiantes: ["Juan", "María", "Pedro", "Ana", "Luis"],
    estudiantes: ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía"]
};

console.log(curso[0].estudiantes);
console.log(curso[3].estudiantes[5]);


const producto = {
  nombre: "Chocolate",
  precio: 10,
  stock: 26, 
  categoria: "dulce"
}; 

console.log("El", producto.nombre, "cuesta", producto.precio);

const usuarios = [
    { id: 1, nombre: "Panfilo", activo: true },
    { id: 2, nombre: "Pedro", activo: false },
    { id: 3, nombre: "kellymporta", activo: true }
];

for (const usuario of usuarios) {
    if (usuario.activo === true) {
        console.log(" el usuario ", usuario.nombre, "esta activo" );
    }
}

// Ejercicio 3: Total de carrito
const carrito_compras = [
    { nombre: "Camisa", precio: 300, cantidad: 2 , categoria: null},
    { nombre: "Pantalón", precio: 500, cantidad: 1 , categoria: null},
    { nombre: "Zapatos", precio: 800, cantidad: 1 , categoria: "calzado"}
];

const totalCarrito = carrito_compras.reduce((acumulador, product) => acumulador + (product.precio * product.cantidad), 0);

console.table(carrito_compras);
console.log("Total final del carrito: $" + totalCarrito);


const Usuarios = [
    {id: 1, nombre:"Juan", activo: true},
    {id: 2, nombre:"Maria", activo: false},
    {id: 3, nombre:"Pedro", activo: true}, 
]
    Usuarios.forEach((usuario) => {
        if(usuario.activo === true){ 
            console.log(`Id: ${usuario.id}, Usuario: ${usuario.nombre}`);
        }else {
            console.log(` Usuario: ${usuario.nombre} inactivo`);
        }
    })