//referenciando o elemento canvas (papel)
var canvas = document.getElementById("canvas-game");

var xBola = canvas.width/2;
var yBola = canvas.height-30;
var dxBola = 2;
var dyBola = -2;
var raioBola = 10;

var baseAltura = 10;
var baseLargura = 75;
var baseX = (canvas.width-baseLargura)/2;

var teclaEsquerdaPressionada = false;
var teclaDireitaPressionada = false;

//atribuindo altura e largura
canvas.width = 480;
canvas.height = 320;

document.addEventListener("keydown", tratarTeclaPressionada, false);
document.addEventListener("keyup", tratarTeclaParaDeSerPressionada, false);

//pegando o contexto (lápis)
var ctx = canvas.getContext("2d");


function tratarTeclaPressionada(evento) {
	console.log(evento.keyCode);
	if(evento.keyCode == 39) {
		teclaDireitaPressionada = true;
	}else if(evento.keyCode == 37) {
		teclaEsquerdaPressionada = true;
	}
}

function tratarTeclaParaDeSerPressionada(evento) {
	if(evento.keyCode == 39) {
		teclaDireitaPressionada = false;
	}else if(evento.keyCode == 37) {
		teclaEsquerdaPressionada = false;
	}	
}

function desenhaBase() {
	ctx.beginPath();
	ctx.rect(baseX,canvas.height-baseAltura, baseLargura, baseAltura);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function desenharBola() {
	ctx.beginPath();
	ctx.arc(xBola, yBola, raioBola, 0, Math.PI*2);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();
}

function desenhar() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	desenhaBase();
	desenharBola();

	//tratar bola
	if(yBola < raioBola || yBola > canvas.height - raioBola) {
		dyBola = -dyBola;
	}

	if(xBola < raioBola || xBola > canvas.width - raioBola) {
		dxBola = -dxBola;
	}

	//tratar barra
	if(teclaDireitaPressionada && baseX < canvas.width - baseLargura) {
		baseX = baseX + 7;
	}else if(teclaEsquerdaPressionada && baseX > 0) {
		baseX = baseX - 7;
	}


	xBola = xBola + dxBola;
	yBola = yBola + dyBola;
}

setInterval(desenhar, 10);