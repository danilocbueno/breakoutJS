//referenciando o elemento canvas (papel)
var canvas = document.getElementById("canvas-game");

//atribuindo altura e largura
canvas.width = 480;
canvas.height = 320;

//pegando o contexto (lápis)
var ctx = canvas.getContext("2d");

//desenhando um retângulo com o lápis
ctx.beginPath();
ctx.rect(20,40,50,50); //top, left, height, width
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//desenhando um circulo
ctx.beginPath();
ctx.arc(240,160,20,0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//desenhando retangulo sem preenchimento
ctx.beginPath();
ctx.rect(160,10,100,40);
ctx.strokeStyle = "rgb(0,0,255)";
ctx.stroke();
ctx.closePath();
