let repetir;
function solicitarUsuario() {
    let user = prompt("Ingrese su usuario: ");
    return user;
}
function solicitarContraseña() {
    let pass = prompt("Ingrese su contraseña: ");
    return pass;
}

function comprobarLogin(user, pass){
    if(user == "usuario" && pass=="1234"){
        alert(`Ingreso exitoso! Bienvenido ${user}`);
        repetir = false;
    }else{
        alert("Error! Ingrese nuevamente usuario y contraseña");
        repetir = true;
    }
    return repetir;
}
function login() {
    do{
        comprobarLogin(solicitarUsuario,solicitarContraseña);
    }while(comprobarLogin(solicitarUsuario(),solicitarContraseña()))
}
login()