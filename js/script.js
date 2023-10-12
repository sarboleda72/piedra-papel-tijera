var configTeclado = { prevent_repeat: true };
var eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaPiedra() {
    img = document.getElementById("imagenJugador");
    img.src = "assets/img/jugador/piedra.png";
    atacarEnemigo("a");
}
function pulsaTijeras() {
    img = document.getElementById("imagenJugador");
    img.src = "assets/img/jugador/tijeras.png";
    atacarEnemigo("s");
}
function pulsaPapel() {
    img = document.getElementById("imagenJugador");
    img.src = "assets/img/jugador/papel.png";
    atacarEnemigo("d");
}

eventoTeclado.simple_combo("a", pulsaPiedra);
eventoTeclado.simple_combo("s", pulsaTijeras);
eventoTeclado.simple_combo("d", pulsaPapel);

function atacarEnemigo(jugador) {
    const numeroAtaque = Math.floor(Math.random() * 3);
    seleccionImagenEnemigo(numeroAtaque);
    calcularPuntaje(jugador,numeroAtaque);
}
function seleccionImagenEnemigo(insert){
    img = document.getElementById("imagenMaquina");
    switch (insert) {
        case 0:
            img.src = "assets/img/enemigo/piedra.png";
            break;
        case 1:
            img.src = "assets/img/enemigo/tijeras.png";
            break;
        case 2:
            img.src = "assets/img/enemigo/papel.png";
            break;
        default:
            break;
    }
}
function calcularPuntaje(jugador,numeroAtaque) {
    puntajeJugador=document.getElementById("puntajeJugador");
    puntajeMaquina=document.getElementById("puntajeMaquina");

    if (jugador == "a" && numeroAtaque == 0 || jugador == "s" && numeroAtaque == 1 || jugador == "d" && numeroAtaque == 2) {
        alert("Empate");
    }
    if (jugador == "a" && numeroAtaque == 1) {
        alert("Gana jugador");
        puntajeJugador.innerHTML = parseInt(puntajeJugador.innerHTML) + 1;
    }
    if (jugador == "s" && numeroAtaque == 2) {
        alert("Gana jugador");
        puntajeJugador.innerHTML = parseInt(puntajeJugador.innerHTML) + 1;
    }
    if (jugador == "d" && numeroAtaque == 0) {
        alert("Gana jugador");
        puntajeJugador.innerHTML = parseInt(puntajeJugador.innerHTML) + 1;
    }
    if (jugador == "a" && numeroAtaque == 2) {
        alert("Gana maquina");
        puntajeMaquina.innerHTML = parseInt(puntajeMaquina.innerHTML) + 1;
    }
    if (jugador == "s" && numeroAtaque == 0) {
        alert("Gana maquina");
        puntajeMaquina.innerHTML = parseInt(puntajeMaquina.innerHTML) + 1;
    }
    if (jugador == "d" && numeroAtaque == 1) {
        alert("Gana maquina");
        puntajeMaquina.innerHTML = parseInt(puntajeMaquina.innerHTML) + 1;
    }

}