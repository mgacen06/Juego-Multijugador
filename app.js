let main = document.getElementsByTagName('main')[0];
main.classList.add('container');

// Coloco el numero de filas y columnas tipo tablero de ajedrez
let nFilas = 8;
let nColumnas = 8;

let div, objetivo, j1, j2;

// Creamos el inicio del tablero
document.addEventListener('load', inicio());

/**
 * Funcion que inicia el tablero
 */
function inicio(){
    // Bucles para crear filas y columas
    for (let i = 0; i < nFilas; i++){
        div0 = document.createElement('div'); 
        for(let j = 0;  j < nColumnas; j++){
            div = document.createElement('div'); 
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);

            div0.appendChild(div);
        }
        main.appendChild(div0);
    }
    colocarFichas();
}

/**
 * Function que coloca las casillas inicialmente (ALEATORIO TODO)
 */
function colocarFichas(){
    
    let fila;
    let columna;
    let posicion;
    fila=posicionRandom(nFilas);
    columna=posicionRandom(nColumnas);
    posicion=`f${fila}c${columna}`;

    objetivo = document.getElementById(posicion);
    objetivo.classList.add('objetivo');

    j1 = document.getElementById('f1c3');
    j1.classList.add('j1');

    j2 = document.getElementById('f3c0');
    j2.classList.add('j2');
}

//Hacemos que la genaracion inicial de las casillas sea aleatoria
function posicionRandom(cantidad){
    let posicion;
    posicion=getRandomInt(cantidad+1);
    return posicion
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// Creamos el evento de escucha de tecaldo
document.addEventListener('keydown', mover);

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve con flechas
 * -    j2: mueve con wasd
 * 
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado  
 */
function mover(event){
    console.log(event);
    /**
     * Identificamos con el objeto KeyboardEvent cual es la tecla que estoy pulsando.
     * -    key
     * -    code
     */
}

/**
 * PENDIENTE:
 * 1. Mover casillas.
 * 2. Que hago con los limites.
 * 3. (colision entre dos jugadores. QUE HAGO).
 * 4. Que hago cuando gano.
 * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.
 * 6. Contadores para puntuacion??
 * 7. Eliminar evento de teclado cuando hay un ganador.
 * 8. CSS BIEN.
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
 */