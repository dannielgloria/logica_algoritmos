/*
const price_product  = 80;
const balance = 10;

function canBuy(price, balance) {
    if (price > balance) {
        balance = price - balance;
        return "No puedes comprar el producto, necesitas " + balance + " pesos más";
    } else {
        return "Puedes comprar el producto";
    }
}

console.log(canBuy(price_product, balance));
//////////////////
let minutos = minutos;
let seg = segundos;
function minutseg(){
    let minutos = prompt("Ingrese los minutos");
    let resultado = minutos * 60;
    console.log("Los segundos son: " + resultado);
}
function segminut(){
    let seg = prompt("Ingrese los segundos");
    let resultado = seg / 60;
    console.log("Los minutos son: " + resultado);
}
//

function minutSeg(minutos){
    let resultado = minutos * 60;
    console.log("Los segundos son: " + resultado);
}
function segMinut(seg){
    let resultado = seg / 60;
    console.log("Los minutos son: " + resultado);
}

prompt("Elige una opción: 1. Convertir minutos a segundos, 2. Convertir segundos a minutos");
let opcion = prompt("Elige una opción: 1. Convertir minutos a segundos, 2. Convertir segundos a minutos");
while(opcion !== "1" && opcion !== "2"){
    opcion = prompt("Opción no válida. Elige una opción: 1. Convertir minutos a segundos, 2. Convertir segundos a minutos");
}
if (opcion === "1"){
    let minutos = prompt("Escribe la cantidad de minutos: ");
    segMinut(minutos);
}
else if (opcion === "2"){
    let segundos = prompt("Escribe la cantidad de segundos: ");
    minutSeg(segundos);
}
////////////////
// Calcular edad aproximada

let anio_actual = prompt("Escribe el año actual: ");
while(!Number.isInteger(Number(anio_actual))){
    anio_actual = prompt("No, debe ser un valor válido. Escribe el año actual: ");
}
anio_actual = Number(anio_actual)
let anio_nacimiento = prompt("Escribe el año de nacimiento");
while(!Number.isInteger(Number(anio_nacimiento))){
    anio_actual = prompt("No, debe ser un valor válido. Escribe el año de nacimiento: ");
}
anio_nacimiento = Number(anio_nacimiento)
const edad = anio_actual-anio_nacimiento
if (edad <= 0){
    console.log("No te pases, aún no naces.");
}
else if (1<=edad<=150){
    console.log(`Tu edad es de ${edad} años.`);
}
else{
    console.log(`Wow, no sabía que los fantasmas tocaran el teclado con tu edad de ${edad} años`);
}

const precioOriginal = 1000;
const descuento = 20;
// Escribe tu solución aquí
function calcularDescuento(precio, descuento) {
    let precioFinal = ((precio * descuento) / 100) - precio;
    return precioFinal;
}


console.log(calcularDescuento(precioOriginal, descuento));

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el año actual: ', (anioActual) => {
  
  rl.question('Introduce tu año de nacimiento: ', (anioNacimiento) => {
    
    const edadAproxi = Number(anioActual) - Number(anioNacimiento);
    
    console.log(`Tu edad aproximada es: ${edadAproxi} años.`);
    
    rl.close();
  });
});
*/
// Ejercicio: Convertir minutos a segundos
let minutes = parseInt(prompt("Ingresa la cantidad de minutos que deseas convertir a segundos:"));
console.log(  minutes + " minutos equivalen a " + convertMinutesToSeconds(minutes) + " segundos.");

function convertMinutesToSeconds(minutes){return minutes * 60;}


// Ejercicio: Convertir minutos a segundos
// let minutes;
let seconds;

minutes = getMinutes();
seconds = convertMinutesToSeconds(minutes);
console.log(minutes + " minutos equivalen a " + seconds + " segundos.");


function getMinutes() {
    let minutes;
    minutes = parseInt(prompt("Ingresa la cantidad de minutos que deseas convertir a segundos:"));
    return minutes;
}
function convertMinutesToSeconds(minutes) {
    let seconds = minutes * 60;
    return seconds;
}
