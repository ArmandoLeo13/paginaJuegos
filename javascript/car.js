const puntuacion = document.querySelector('.puntuacion');
const puntuacionAlta = document.querySelector('.puntuacionAlta');
const pantalla = document.querySelector('.pantalla');
const areaJuego = document.querySelector('.areaJuego');
const areaJuego2 = document.querySelector('.areaJuego2');
const ClickParaEmpezar = document.querySelector('.ClickParaEmpezar');
let opo = ["opo1.png","opo2.png","opo3.png","opo4.png"];
let opor = ["opor1.png","opor2.png","opor3.png","opor4.png"];
const volver = document.querySelector('.volver');

volver.addEventListener('click', ()=>{
    window.location='../index.html';
});

ClickParaEmpezar.addEventListener('click', empezar);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

let keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,
}
let jugador = {
    velocidad: 5,
    puntuacion: 0,
    puntuacionAlta: 0
}

function keydown(e) {
    keys[e.key] = true;
}

function keyup(e) {
    keys[e.key] = false;
}

function empezar() {
    areaJuego.innerHTML = "";
    pantalla.classList.add('oculto');
    jugador.empezo = true;
    jugador.puntuacion = 0;
    window.requestAnimationFrame(jugar);
     
    for (i = 0; i < 5; i++) {
        let caminoVias1_1 = document.createElement('div');
        let caminoVias1_2 = document.createElement('div');
        caminoVias1_1.setAttribute('class', 'caminoVias1_1');
        caminoVias1_2.setAttribute('class', 'caminoVias1_2');
        caminoVias1_1.y = (i * 140);
        caminoVias1_2.y = (i * 140);
        caminoVias1_1.style.top = caminoVias1_1.y + "px";
        caminoVias1_2.style.top = caminoVias1_2.y + "px";
        areaJuego.appendChild(caminoVias1_1);
        areaJuego.appendChild(caminoVias1_2);
        let caminoVias2_1 = document.createElement('div');
        caminoVias2_1.setAttribute('class', 'caminoVias2_1');
        caminoVias2_1.y = (i * 140);
        caminoVias2_1.style.top = caminoVias2_1.y + "px";
        areaJuego.appendChild(caminoVias2_1);
        let caminoVias2_2 = document.createElement('div');
        caminoVias2_2.setAttribute('class', 'caminoVias2_2');
        caminoVias2_2.y = (i * 140);
        caminoVias2_2.style.top = caminoVias2_2.y + "px";
        areaJuego.appendChild(caminoVias2_2);
    }

    for (i = 0; i < 4; i++) {
        let oponentes = document.createElement('div');
        oponentes.setAttribute('class', 'oponentesr');
        oponentes.y = ((i) * -300);
        oponentes.style.top = oponentes.y + "px";
        areaJuego.appendChild(oponentes);
        let xx = (Math.floor(Math.random() * 400))+260;
        oponentes.style.left = xx + "px";
        oponentes.style.backgroundImage = "url(../images/"+opor[i]+")";
    }
    for (i = 0; i < 3; i++) {
        let oponentes = document.createElement('div');
        oponentes.setAttribute('class', 'oponentes');
        oponentes.y = ((i) * -300);
        oponentes.style.top = oponentes.y + "px";
        areaJuego.appendChild(oponentes);
        let xx = (Math.floor(Math.random() * 400))+660;
        oponentes.style.left = xx + "px";
        oponentes.style.backgroundImage = "url(../images/"+opo[i]+")";
    }
    let auto = document.createElement('div');
    auto.setAttribute('class', 'auto');
    areaJuego.appendChild(auto);
    jugador.x = auto.offsetLeft;
    jugador.y = auto.offsetTop;
}

function jugar() {
    let auto = document.querySelector('.auto');
    let camino = areaJuego.getBoundingClientRect();
    if (jugador.empezo) {
        moverlineas();
        moverlineas2();
        moverOponentes(auto);
        moverOponentesr(auto);
        if (keys.ArrowUp && jugador.y > (camino.top + 70)) {
            jugador.y -= jugador.velocidad;
        }
        if (keys.ArrowDown && jugador.y < (camino.height - 75)) {
            jugador.y += jugador.velocidad;
        }
        if (keys.ArrowRight && jugador.x < 1050) {
            jugador.x += jugador.velocidad;
        }
        if (keys.ArrowLeft && jugador.x > 260) {
            jugador.x -= jugador.velocidad;
        }
        auto.style.top = jugador.y + "px";
        auto.style.left = jugador.x + "px";
        puntuacionAlta.innerHTML = "Puntuacion Alta: " + (jugador.puntuacionAlta - 1);
        jugador.puntuacion++;
        jugador.velocidad += 0.01;
        if (jugador.puntuacionAlta < jugador.puntuacion) {
            jugador.puntuacionAlta++;
            puntuacionAlta.innerHTML = "Puntuacion Alta: " + (jugador.puntuacionAlta - 1);
            puntuacionAlta.style.top = "80px";
        }
        puntuacion.innerHTML = "Puntuacion: " + (jugador.puntuacion - 1);
        window.requestAnimationFrame(jugar);
    }
}

function moverlineas() {
    let caminoVias1_1 = document.querySelectorAll('.caminoVias1_1');
    caminoVias1_1.forEach(function (ii) {
        if (ii.y >= 500)
            ii.y -= 500;
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
    let caminoVias1_2 = document.querySelectorAll('.caminoVias1_2');
    caminoVias1_2.forEach(function (ii) {
        if (ii.y >= 500)
            ii.y -= 500;
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
}
function moverlineas2() {
    let caminoVias2_1 = document.querySelectorAll('.caminoVias2_1');
    caminoVias2_1.forEach(function (ii) {
        if (ii.y >= 500)
            ii.y -= 500;
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
    let caminoVias2_2 = document.querySelectorAll('.caminoVias2_2');
    caminoVias2_2.forEach(function (ii) {
        if (ii.y >= 500)
            ii.y -= 500;
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
}
function moverOponentes(auto) {
    let oponentes = document.querySelectorAll('.oponentes');
    oponentes.forEach(function (ii) {
        if (choco(auto, ii)) {
            gameOver();
        }
        if (ii.y >= 750) {
            ii.y -= 900;
            ii.style.left = (Math.floor(Math.random() * 400))+660 + "px";
        }
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
}
function moverOponentesr(auto) {
    let oponentes = document.querySelectorAll('.oponentesr');
    oponentes.forEach(function (ii) {
        if (choco(auto, ii)) {
            gameOver();
        }
        if (ii.y >= 750) {
            ii.y -= 900;
            ii.style.left = (Math.floor(Math.random() * 400))+260 + "px";
        }
        ii.y += jugador.velocidad;
        ii.style.top = ii.y + "px";
    })
}
function choco(a, b) {
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();
    return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
}
  
function gameOver() {
    jugador.empezo = false;
    jugador.velocidad = 5;
    pantalla.classList.remove('oculto');
}
