let tablero = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

class Jugador{
    constructor(id){
        this.turno = false;
        this.id = id;
        this.gano = false;
    }
}

class espacio{
    constructor(id){
        this.jugado = false;
        this.id = id;
    }
}
function agregarX(id){
    let x = document.createElement('div');
    x.className = 'x';
    x.innerText = "X";
    document.getElementById(id).append(x);
}
function agregarO(id){
    let o = document.createElement('div');
    o.className = 'o';
    o.innerText = "O";
    document.getElementById(id).append(o);
}

const jugador1 = new Jugador("uno");
const jugador2 = new Jugador("dos");

const espacio1 = new espacio("uno");
const espacio2 = new espacio("dos");
const espacio3 = new espacio("tres");
const espacio4 = new espacio("cuatro");
const espacio5 = new espacio("cinco");
const espacio6 = new espacio("seis");
const espacio7 = new espacio("siete");
const espacio8 = new espacio("ocho");
const espacio9 = new espacio("nueve");

function cambiarTurnos(uno, dos){
    uno.turno = true;
    dos.turno = false;
}
function turnos() {
    if(jugador1.turno==true&&jugador2==false){
        document.getElementById("j1").classList.remove("oculto");
        document.getElementById("j2").classList.add("oculto");
    }else if(jugador1.turno==false&&jugador2.turno==true){
        document.getElementById("j2").classList.remove("oculto");
        document.getElementById("j1").classList.add("oculto");
    }
}

jugador1.turno = true;

console.log(jugador1.turno+""+jugador2.turno);
document.getElementsByClassName('grid')[0].addEventListener('click', (e)=> {
    if(e.target.id===espacio1.id&&espacio1.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[0].indexOf(1);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio1.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[0].indexOf(1);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio1.jugado = true;
        }
    }else if(e.target.id===espacio2.id&&espacio2.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[0].indexOf(2);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio2.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[0].indexOf(2);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio2.jugado = true;
        }
    }else if(e.target.id===espacio3.id&&espacio3.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[0].indexOf(3);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio3.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[0].indexOf(3);
            if(posicionJugada !== -1){
                tablero[0][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio3.jugado = true;
        }
    }else if(e.target.id===espacio4.id&&espacio4.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[1].indexOf(4);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio4.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[1].indexOf(4);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio4.jugado = true;
        }
    }else if(e.target.id===espacio5.id&&espacio5.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[1].indexOf(5);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio5.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[1].indexOf(5);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio5.jugado = true;
        }
    }else if(e.target.id===espacio6.id&&espacio6.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[1].indexOf(6);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio6.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[1].indexOf(6);
            if(posicionJugada !== -1){
                tablero[1][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio6.jugado = true;
        }
    }else if(e.target.id===espacio7.id&&espacio7.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[2].indexOf(7);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio7.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[2].indexOf(7);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio7.jugado = true;
        }
    }else if(e.target.id===espacio8.id&&espacio8.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[2].indexOf(8);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio8.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[2].indexOf(8);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio8.jugado = true;
        }
    }else if(e.target.id===espacio9.id&&espacio9.jugado===false){
        if(jugador1.turno){
            agregarX(e.target.id);
            let posicionJugada = tablero[2].indexOf(9);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "x";
            }
            cambiarTurnos(jugador2, jugador1);
            espacio9.jugado = true;
        }else{
            agregarO(e.target.id);
            let posicionJugada = tablero[2].indexOf(9);
            if(posicionJugada !== -1){
                tablero[2][posicionJugada] = "o";
            }
            cambiarTurnos(jugador1, jugador2);
            espacio9.jugado = true;
        }
    }
    for (let i = 0; i < tablero.length; i++) {
        if(tablero[i][0]=="x"&&tablero[i][1]=="x"&&tablero[i][2]=="x"){
            document.getElementById("p1").classList.remove("oculto");
            document.getElementById("reset").classList.remove("oculto");
        }else if(tablero[i][0]=="o"&&tablero[i][1]=="o"&&tablero[i][2]=="o"){
            document.getElementById("p2").classList.remove("oculto");
            document.getElementById("reset").classList.remove("oculto");
        }
    }
    for (let i = 0; i < tablero.length; i++) {
        if(tablero[0][i]=="x"&&tablero[1][i]=="x"&&tablero[2][i]=="x"){
            document.getElementById("p1").classList.remove("oculto");
            document.getElementById("reset").classList.remove("oculto");
        }else if(tablero[0][i]=="o"&&tablero[1][i]=="o"&&tablero[2][i]=="o"){
            document.getElementById("p2").classList.remove("oculto");
            document.getElementById("reset").classList.remove("oculto");
        }
    }if(tablero[0][0]=="x"&&tablero[1][1]=="x"&&tablero[2][2]=="x"){
        document.getElementById("p1").classList.remove("oculto");
        document.getElementById("reset").classList.remove("oculto");
    }else if(tablero[0][0]=="o"&&tablero[1][1]=="o"&&tablero[2][2]=="o"){
        document.getElementById("p2").classList.remove("oculto");
        document.getElementById("reset").classList.remove("oculto");
    }else if(tablero[0][2]=="x"&&tablero[1][1]=="x"&&tablero[2][0]=="x"){
        document.getElementById("p1").classList.remove("oculto");
        document.getElementById("reset").classList.remove("oculto");
    }else if(tablero[0][2]=="o"&&tablero[1][1]=="o"&&tablero[2][0]=="o"){
        document.getElementById("p2").classList.remove("oculto");
        document.getElementById("reset").classList.remove("oculto");
    }else if((tablero[0][0] == 'x' || tablero[0][0] == 'o') && (tablero[0][1] == 'x'
    || tablero[0][1] == 'o') && (tablero[0][2] == 'x' || tablero[0][2] == 'o') &&
    (tablero[1][0] == 'x' || tablero[1][0] == 'o') && (tablero[1][1] == 'x' ||
    tablero[1][1] == 'o') && (tablero[1][2] == 'x' || tablero[1][2] == 'o') &&
    (tablero[2][0] == 'x' || tablero[2][0] == 'o') && (tablero[2][1] == 'x' ||
    tablero[2][1] == 'o') && (tablero[2][2] == 'x' || tablero[2][2] == 'o')) {
        document.getElementById("empate").classList.remove("oculto");
        document.getElementById("reset").classList.remove("oculto");
    }
    

});

    
// let btn = document.getElementById("reset");
// btn.addEventListener('click',(e)=>{
//     e.preventDefault;
//     tablero = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ];
//     document.getElementsByClassName("grid").remove(document.getElementsByClassName("x"));
// });

