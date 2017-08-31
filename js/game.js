//referenciando o elemento canvas (papel)
var canvas = document.getElementById("canvas-game");

var xBola = canvas.width/2;
var yBola = canvas.height-30;
var dxBola = 2;
var dyBola = -2;
var raioBola = 20;

//atribuindo altura e largura
canvas.width = 480;
canvas.height = 320;

//pegando o contexto (lápis)
var ctx = canvas.getContext("2d");

function desenharBola() {
	ctx.beginPath();
	ctx.arc(xBola, yBola, raioBola, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function desenhar() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	desenharBola();
	if(yBola < raioBola || yBola > canvas.height - raioBola) {
		dyBola = -dyBola;
	}

	if(xBola < raioBola || xBola > canvas.width - raioBola) {
		dxBola = -dxBola;
	}
	xBola = xBola + dxBola;
	yBola = yBola + dyBola;
}

setInterval(desenhar, 10);