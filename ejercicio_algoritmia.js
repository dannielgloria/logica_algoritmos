// Algoritmo para retirarse a tiempo
// Pseudocódigo para el algoritmo de retirarse a tiempo
/*
definir mi mano como un arreglo de 5 cartas

ididentifico que mi dinero actual sea a lo mas igual a mi presupuesto máximo
tener ganancias actual igual a 0
perdida actual igual a 0
tiempo jugado igual a 0

mientras mi dinero actual sea distinto de 0, mi dinero actual sea menor o igual a mi presupuesto máximo
y mi tiempo jugado sea menor a mi tiempo máximo puedo empezar a jugar

mientras juego:
    recibibo mis cartas (mano)
    evaluo mi mano (mano)
    
    si mano_mala(mano):
        aviso que mi mano es mala y que deberia de retirarme
        pregunta si desa retirarse (si/no)
        si respuesta es si:
            me retiro del juego
        sino:
            sigo jugando
    
    si mano_buena(mano):
        avisa que la mano es buena y que siga jugando

    si mano_exelente(mano):
        avisa que la mano es excelente y avisa que si quiere aumentar su apuesta si no quiere puede seguir jugando con la misma apuesta
        pregunta si desea aumentar su apuesta (si/no)
        si respuesta es si:
            aumento mi apuesta
        sino:
            sigo jugando con la misma apuesta

    actualizo mi dinero actual dependiendo si gane o perdi
    actualizo mis ganancias o perdidas dependiendo si gane o perdi
    actualizo mi tiempo jugado
    si mi dinero actual es igual a 0:
        aviso que me quede sin dinero y que me retiro del juego
    si mis ganancias actuales son iguales o mayores a mi objetivo:
        aviso que alcance mi objetivo y que me retiro del juego
    si mis perdidas actuales son iguales o mayores a mi presupuesto máximo:
        aviso que alcance mi presupuesto máximo de perdidas y que me retiro del juego
    si mi tiempo jugado es igual o mayor a mi tiempo máximo:
        aviso que alcance mi tiempo máximo de juego y que me retiro del juego
*/

// Desarrollo en JavaScript

const presupuesto_maximo = Number(prompt("¿Cuál es tu presupuesto máximo?"));
const objetivo = Number(prompt("¿Cuál es la cantidad con la que te deseas retirar si ganas?"));
const tiempo_maximo = Number(prompt("¿Cuánto tiempo estás dispuesto a jugar? (en horas)"));
const apuesta_inicial = Number(prompt("¿Cuál es tu apuesta inicial?"));

const mano = ["carta1", "carta2", "carta3", "carta4", "carta5"];

let dinero_actual = presupuesto_maximo;
let ganancias_actuales = 0;
let perdidas_actuales = 0;
let tiempo_jugado = 0;
let apuesta_actual = apuesta_inicial;

if (apuesta_inicial > presupuesto_maximo) {
    alert("Tu apuesta inicial excede tu presupuesto máximo. Por favor, ingresa una apuesta válida.");
} else {
    alert("¡Buena suerte en el juego!");
}


function rebibirCartas() {
    const nueva_mano = [];
    for (let i = 0; i < 5; i++) {
        const carta = prompt('Ingresa la carta (ejemplo: "As de corazones" es 1C, "10 de diamantes" es 10D, etc.):');
        nueva_mano.push(carta);
    }
    return nueva_mano;
}

function evaluarMano(mano) {
    // Aquí puedes implementar la lógica para evaluar la mano y determinar si es mala, buena o excelente
    // Por ejemplo, podrías usar combinaciones de cartas para determinar la calidad de la mano
    // Esta función debería retornar "mala", "buena" o "excelente" según la evaluación de la mano
    return "mala"; // Esto es solo un ejemplo, deberías implementar la lógica real aquí
}

function mano_mala(mano) {
    return evaluarMano(mano) === "mala";
}

function mano_buena(mano) {
    return evaluarMano(mano) === "buena";
}

function mano_exelente(mano) {
    return evaluarMano(mano) === "excelente";
}

function aumentarApuesta() {
    const aumento = Number(prompt("¿Cuánto deseas aumentar tu apuesta?"));
    if (aumento > 0 && (apuesta_actual + aumento) <= presupuesto_maximo) {
        apuesta_actual += aumento;
        alert(`Tu nueva apuesta es: ${apuesta_actual}`);
    } else {
        alert("Aumento no válido. Asegúrate de que tu nueva apuesta no exceda tu presupuesto máximo.");
    }
    
    return apuesta_actual;
}

function actualizarDinero(resultado) {
    if (resultado === "gana") {
        dinero_actual += apuesta_actual;
        ganancias_actuales += apuesta_actual;
    } else if (resultado === "pierde") {
        dinero_actual -= apuesta_actual;
        perdidas_actuales += apuesta_actual;
    }
}

function actualizarTiempo() {
    const tiempo = Number(prompt("¿Cuánto tiempo has jugado? (en horas)"));
    tiempo_jugado += tiempo;
}

while (dinero_actual > 0 && dinero_actual <= presupuesto_maximo && tiempo_jugado < tiempo_maximo) {
    const mano_actual = rebibirCartas();
    const evaluacion = evaluarMano(mano_actual);
    
    if (evaluacion === "mala") {
        alert("Tu mano es mala. Considera retirarte.");
        const respuesta = prompt("¿Deseas retirarte? (si/no)");
        if (respuesta.toLowerCase() === "si") {
            alert("Te has retirado del juego. ¡Gracias por jugar!");
            break;
        }
    } else if (evaluacion === "buena") {
        alert("Tu mano es buena. ¡Sigue jugando!");
    } else if (evaluacion === "excelente") {
        alert("¡Tu mano es excelente! ¿Deseas aumentar tu apuesta?");
        const respuesta = prompt("¿Deseas aumentar tu apuesta? (si/no)");
        if (respuesta.toLowerCase() === "si") {
            aumentarApuesta();
        }
    }

    const resultado = prompt("¿Has ganado o perdido esta ronda? (gana/pierde)");
    actualizarDinero(resultado);
    actualizarTiempo();

    if (dinero_actual === 0) {
        alert("Te has quedado sin dinero y te has retirado del juego.");
        break;
    }
    if (ganancias_actuales >= objetivo) {
        alert("¡Has alcanzado tu objetivo de ganancias y te has retirado del juego!");
        break;
    }
    if (perdidas_actuales >= presupuesto_maximo) {
        alert("Has alcanzado tu presupuesto máximo de pérdidas y te has retirado del juego.");
        break;
    }
    if (tiempo_jugado >= tiempo_maximo) {
        alert("Has alcanzado tu tiempo máximo de juego y te has retirado del juego.");
        break;
    } 
}

