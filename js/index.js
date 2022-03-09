const abrirMenu = document.querySelector(".abrirMenu");

abrirMenu.addEventListener('click', menuabierto);

function menuabierto(){
	document.querySelector(".submenu__menu").style.height="100px";

	document.querySelector(".abrirMenu").style.display="none";

	document.querySelector(".cerrarMenu").style.display="inline";
}

const cerrarMenu = document.querySelector(".cerrarMenu");

cerrarMenu.addEventListener('click', menucerrado);

function menucerrado(){
	document.querySelector(".submenu__menu").style.height="0px";
	document.querySelector(".abrirMenu").style.display="inline";
	document.querySelector(".cerrarMenu").style.display="none";
}