var colores = ["azul", "verde", "blanco", "amarillo", "naranja", "rojo"],
	piezas = document.getElementsByClassName("pieza");


function mx(i, j) {
	return (
		([2, 4, 3, 5][j % 4 | 0] +
			(i % 2) * (((j | 0) % 4) * 2 + 3) +
			2 * ((i / 2) | 0)) %
		6
	);
}

function obtenerEje(cara) {
	return String.fromCharCode("X".charCodeAt(0) + cara / 2); // X, Y or Z
}


function ensamblarCubo() {
	function moverA(cara) {
		id = id + (1 << cara);
		piezas[i].children[cara]
			.appendChild(document.createElement("div"))
			.setAttribute("class", "sticker " + colores[cara]);
		return "translate" + obtenerEje(cara) + "(" + ((cara % 2) * 4 - 2) + "em)";
	}
	for (var id, x, i = 0; (id = 0), i < 26; i++) {
		x = mx(i, i % 18);
		piezas[i].style.transform =
			"rotateX(0deg)" +
			moverA(i % 6) +
			(i > 5 ? moverA(x) + (i > 17 ? moverA(mx(x, x + 2)) : "") : "");
		piezas[i].setAttribute("id", "pieza" + id);
	}
}

function obtenerPiezaPor(cara, index, esquina) {
	return document.getElementById(
		"pieza" +
			((1 << cara) + (1 << mx(cara, index)) + (1 << mx(cara, index + 1)) * esquina)
	);
}


function swappiezas(cara, tiempos) {
	for (var i = 0; i < 6 * tiempos; i++) {
		var pieza1 = obtenerPiezaPor(cara, i / 2, i % 2),
			pieza2 = obtenerPiezaPor(cara, i / 2 + 1, i % 2);
		for (var j = 0; j < 5; j++) {
			var sticker1 = pieza1.children[j < 4 ? mx(cara, j) : cara].firstChild,
				sticker2 = pieza2.children[j < 4 ? mx(cara, j + 1) : cara].firstChild,
				className = sticker1 ? sticker1.className : "";
			if (className)
				(sticker1.className = sticker2.className), (sticker2.className = className);
		}
	}
}


function animarRotacion(cara, cw, tiempoActual) {
	var k = 0.3 * ((cara % 2) * 2 - 1) * (2 * cw - 1),
		cubos = Array(9)
			.fill(piezas[cara])
			.map(function (value, index) {
				return index ? obtenerPiezaPor(cara, index / 2, index % 2) : value;
			});
	(function rotarPiezas() {
		var pasado = Date.now() - tiempoActual,
			style =
				"rotate" + obtenerEje(cara) + "(" + k * pasado * (pasado < 300) + "deg)";
		cubos.forEach(function (pieza) {
			pieza.style.transform = pieza.style.transform.replace(
				/rotate.\(\S+\)/,
				style
			);
		});
		if (pasado >= 300) return swappiezas(cara, 3 - 2 * cw);
		requestAnimationFrame(rotarPiezas);
	})();
}


function mousedown(md_e) {
	var startXY = pivote.style.transform.match(/-?\d+\.?\d*/g).map(Number),
		elemento = md_e.target.closest(".elemento"),
		cara = [].indexOf.call((elemento || cubo).parentNode.children, elemento);
	function mousemove(mm_e) {
		if (elemento) {
			var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
			if (gid && gid.input.includes("anchor")) {
				mouseup();
				var e = elemento.parentNode.children[
					mx(cara, Number(gid) + 3)
				].hasChildNodes();
				animarRotacion(mx(cara, Number(gid) + 1 + 2 * e), e, Date.now());
			}
		} else
			pivote.style.transform =
				"rotateX(" +
				(startXY[0] - (mm_e.pageY - md_e.pageY) / 2) +
				"deg)" +
				"rotateY(" +
				(startXY[1] + (mm_e.pageX - md_e.pageX) / 2) +
				"deg)";
	}
	function mouseup() {
		document.body.appendChild(guia);
		escena.removeEventListener("mousemove", mousemove);
		document.removeEventListener("mouseup", mouseup);
		escena.addEventListener("mousedown", mousedown);
	}

	(elemento || document.body).appendChild(guia);
	escena.addEventListener("mousemove", mousemove);
	document.addEventListener("mouseup", mouseup);
	escena.removeEventListener("mousedown", mousedown);
}

document.ondragstart = function () {
	return false;
};
window.addEventListener("load", ensamblarCubo);
escena.addEventListener("mousedown", mousedown);

document.getElementById("volver").addEventListener('click',()=>{
    window.location='../index.html';
});
document.getElementById("reset").addEventListener('click',()=>{
    window.location.reload();
})