//referenciando o elemento canvas (papel)
var canvas = document.getElementById("canvas-game");

var xBola = canvas.width/2;
var yBola = canvas.height-30;
var dxBola = 2;
var dyBola = -2;

//atribuindo altura e largura
canvas.width = 480;
canvas.height = 320;

//pegando o contexto (lápis)
var ctx = canvas.getContext("2d");

function desenhar() {
	ctx.beginPath();
	ctx.arc(xBola, yBola, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();

	xBola = xBola + dxBola;
	yBola = yBola + dyBola;
}

setInterval(desenhar, 10);