let main = document.getElementsByTagName('main')[0];

// Coloco el numero de filas y columnas tipo tablero de ajedrez
let nFilas = 8;
let nColumnas = 8;

let objetivo, j1, j2, turno, contj1, contj2;

let divJuego = document.createElement("div");
let div0 ,div;

let divInfo = document.createElement("div");
let j1Texto = document.createElement("p");
let j1Puntuacion = document.createElement("div");
let j2Texto = document.createElement("p");
let j2Puntuacion = document.createElement("div");
let reiniciar = document.createElement("button");


contj1=0;
contj2=0;

// Creamos el inicio del tablero
document.addEventListener('load', inicio());

// Funcion que inicia el tablero
function inicio() {
    // Crear estructura, un div con el juego otro con la info
    divJuego.classList.add('container');
    divInfo.classList.add('container2');

    j1Texto.textContent = "Jugador 1";
    j1Puntuacion.setAttribute("class", "puntos");
    j1Puntuacion.textContent=contj1;

    j2Texto.textContent = "Jugador 2";
    j2Puntuacion.setAttribute("class", "puntos");
    j2Puntuacion.textContent=contj2;

    reiniciar.textContent = "Reiniciar"
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("onclick", "colocarFichas()");
    reiniciar.classList.add('reinicio');

    divInfo.appendChild(j1Texto);
    divInfo.appendChild(j1Puntuacion);
    divInfo.appendChild(j2Texto);
    divInfo.appendChild(j2Puntuacion);
    divInfo.appendChild(reiniciar);

    main.appendChild(divJuego);
    main.appendChild(divInfo);

    // Bucles para crear filas y columas del juego
    for (let i = 0; i < nFilas; i++) {
        div0 = document.createElement('div');
        for (let j = 0; j < nColumnas; j++) {
            div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', `c${i}f${j}`);
            div0.appendChild(div);
        }
        divJuego.appendChild(div0);
    }
    colocarFichas();
}

// Function que coloca las casillas inicialmente (ALEATORIO TODO)
function colocarFichas() {

    // El turno empieza para j1
    turno = false;
    // Borrar casillas partida anterior si las hay
    for (let i = 0; i < nFilas; i++) {
        for (let j = 0; j < nColumnas; j++) {
            let dv = document.getElementById(`c${i}f${j}`);
            dv.classList.remove("objetivo");
            dv.classList.remove("j1");
            dv.classList.remove("j2");
        }
    }

    // Generar el evento de poder mover las fichas
    document.addEventListener('keydown', mover);

    // Generar las 3 posiciones aleatorias sin repetirse
    let posicionesFin = noRepiten();

    // Guardar posiciones y ponerles una case
    objetivo = document.getElementById(posicionesFin[0]);
    objetivo.classList.add('objetivo');
    j1 = document.getElementById(posicionesFin[1]);
    j1.classList.add('j1');
    j2 = document.getElementById(posicionesFin[2]);
    j2.classList.add('j2');
}

//Hacemos que la genaracion inicial de las casillas sea aleatoria
/**
 * @returns {Array} posiciones;
 */
function noRepiten() {
    let posiciones = [];
    let cont = 0;
    let nroObjetos = 3;
    let esta;
    let fila;
    let columna;
    let posicion;
    do {
        esta = false;
        fila = posicionRandom(nFilas);
        columna = posicionRandom(nColumnas);
        posicion = `c${columna}f${fila}`;
        if (cont == 0) {
            posiciones.push(posicion);
            cont++;
        } else {
            for (let i = 0; i < posiciones.length; i++) {
                if (posicion == posiciones[i]) {
                    esta = true;
                }
            }
            if (esta == false) {
                posiciones.push(posicion);
                cont++;
            }
        }
    } while (cont < nroObjetos);
    return posiciones;
}
/**
 * @param {Int} cantidad
 * @returns {Int} posicion
 */
function posicionRandom(cantidad) {
    let posicion;
    posicion = getRandomInt(cantidad);
    return posicion
}

/**
 * @param {Int} max
 * @returns {Int} Math.floor()
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Creamos el evento de escucha de tecaldo

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve con flechas
 * -    j2: mueve con wasd
 * 
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado  
 */
function mover(event) {
    let actual;
    let columnaNueva;
    let filaNueva;
    if (!turno) {
        switch (event.keyCode) {
            // Arriba
            case 38:
                //Borrar la posicion anterior 
                j1.classList.remove("j1");

                actual = j1.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (filaNueva == 0) {
                    filaNueva = 7;
                }
                else {
                    filaNueva--;
                }
                j1 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j1.classList.add('j1');
                break;
            // Abajo
            case 40:
                //Borrar la posicion anterior 
                j1.classList.remove("j1");

                actual = j1.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (filaNueva == 7) {
                    filaNueva = 0;
                }
                else {
                    filaNueva++;
                }
                j1 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j1.classList.add('j1');
                break;
            // Izq
            case 37:
                //Borrar la posicion anterior 
                j1.classList.remove("j1");

                actual = j1.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (columnaNueva == 0) {
                    columnaNueva = 7;
                }
                else {
                    columnaNueva--;
                }
                j1 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j1.classList.add('j1');
                break;
            // Der
            case 39:
                //Borrar la posicion anterior 
                j1.classList.remove("j1");

                actual = j1.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (columnaNueva == 7) {
                    columnaNueva = 0;
                }
                else {
                    columnaNueva++;
                }
                j1 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j1.classList.add('j1');
                break;
            default:
                turno = !turno;
                break;
        }
        gana(j1);
    } else {
        switch (event.keyCode) {
            // Arriba
            case 87:
                //Borrar la posicion anterior 
                j2.classList.remove("j2");

                actual = j2.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (filaNueva == 0) {
                    filaNueva = 7;
                }
                else {
                    filaNueva--;
                }
                j2 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j2.classList.add('j2');
                break;
            // Abajo
            case 83:
                //Borrar la posicion anterior 
                j2.classList.remove("j2");

                actual = j2.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (filaNueva == 7) {
                    filaNueva = 0;
                }
                else {
                    filaNueva++;
                }
                j2 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j2.classList.add('j2');
                break;
            // Izq
            case 65:
                //Borrar la posicion anterior 
                j2.classList.remove("j2");

                actual = j2.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (columnaNueva == 0) {
                    columnaNueva = 7;
                }
                else {
                    columnaNueva--;
                }
                j2 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j2.classList.add('j2');
                break;
            // Der
            case 68:
                //Borrar la posicion anterior 
                j2.classList.remove("j2");

                actual = j2.id;
                columnaNueva = actual.charAt(1);
                filaNueva = actual.charAt(3);
                if (columnaNueva == 7) {
                    columnaNueva = 0;
                }
                else {
                    columnaNueva++;
                }
                j2 = document.getElementById(`c${columnaNueva}f${filaNueva}`);
                j2.classList.add('j2');
                break;
            default:
                turno = !turno;
                break;
        }
        gana(j2);

    }
    turno = !turno;
}

/**
 * Funcion para saber si ha ganado o no
 * @param jugador
 */
function gana(jugador) {
    if (jugador.id == objetivo.id) {
        document.removeEventListener('keydown', mover);
        // Los tengo puestos al reves pero soy consciente y es facil manejarlos así
        if(!turno){
            contj1++;
            j1Puntuacion.textContent=contj1;
        } else{
            contj2++;
            j2Puntuacion.textContent=contj2;
        }
    }
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