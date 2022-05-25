let flechas = {
    flechaArriba: false,
    flechaAbajo: false,
    flechaDerecha: false,
    flechaIzquierda: false
}
let jugador = {
    velocidad: 5,
    puntuacion: 0,
    puntuacionAlta: 0
}
function flechaAbajo(e){
    flechas[e.flecha]=true
}
function flechaArriba(e){
    flechas[e.flecha]=true
}
function flechaDerecha(e){
    flechas[e.flecha]=true
}
function flechaIzquierda(e){
    flechas[e.flecha]=true
}