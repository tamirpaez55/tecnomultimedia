//Link al video: https://youtu.be/G543nHWETzw


// Variables del auto principal y obstaculos.
let tamañoAutoEnemigoX2 = 15;
let tamañoAutoEnemigoY2 = 10;
let tamañoAutoEnemigoX3 = 15;
let tamañoAutoEnemigoY3 = 10;
let tamañoAutoEnemigoX4 = 15;
let tamañoAutoEnemigoY4 = 10;
let imagenesAuto1 = [];
let imagenesAuto2 = [];
let imagenesAuto3 = [];
let posX = 280;
let posY = 220;
let posX2 = 295;
let posY2 = 100;
let posX3 = 295;
let posY3 = 100;
let posX4 = 295;
let posY4 = 100;
let spriteActualAuto1 = 0;
let spriteActualAuto2 = 0;
let spriteActualAuto3 = 0;
let vida = 200;
let vidaEnemigo1 = 50;
let vidaEnemigo2 = 50;
let vidaEnemigo3 = 50;

//Carga de imagenes.
let fondo5, fondo4, fondo3, fondo2, fondo1;
let cantImagenes = 2;
//Estado de pantalla;
let pantalla = 0;

//Variables del contadores.
let activarContador = false;
let imagenContador, record;



function preload() {
  fondo5 = loadImage('data/Gameover.png');
  fondo4 = loadImage('data/Instrucciones.png');
  fondo3 = loadImage('data/Creditos.png');
  fondo2 = loadImage('data/fondo_1.png');
  fondo1 = loadImage('data/home.png');
  for (let i=0; i<cantImagenes; i++) {
    imagenesAuto1[i] = loadImage('data/autoSprite' + (i+1) + '.png');
    imagenesAuto2[i] = loadImage('data/autoAzulSprite' + (i+1) + '.png');
    imagenesAuto3[i] = loadImage('data/autoRojoSprite' + (i+1) + '.png');
  }
  imagenContador = loadImage('data/contadorSprite.jpg');
}


function setup() {
  createCanvas(600, 400);
}


function draw() {

  switch (pantalla) {
  case 0:
    image(fondo1, 0, 0);
    break;
  case 1:

    background(0);
    image(fondo2, 50, 0);
    dibujarAuto();
    dibujarAutoEnemigo1();
    dibujarAutoEnemigo2();
    dibujarAutoEnemigo3();
    presionarTecla();
    calcularSiguienteSpriteAuto1();
    image(imagenContador, 0, 260, 600, 140);
    textSize(30);
    if (activarContador) {
      contador = round(millis()/1000) - contadorInicial;
      text(contador, 330, 315);
    }
    text(vida, 330, 365);

    if (vida == 0) {
      pantalla = 4;
      record = contador;
    }
    break;

  case 2:
    image(fondo4, 0, 0);

    break;
  case 3:
    image(fondo3, 0, 0);

    break;
  case 4:
    image(fondo5, 0, 0);
    text(record, 418, 150);

    break;
  }
}


function mouseClicked() {
  if (mouseX > 342 && mouseX < 548 && mouseY > 104 && mouseY < 152 && pantalla == 0) {
    pantalla = 1
      contadorInicial = round(millis()/1000)
      activarContador = true;
  }
  if (mouseX > 342 && mouseX < 548 && mouseY > 174 && mouseY < 222 && pantalla == 0) {
    pantalla = 2
  }
  if (mouseX > 188 && mouseX < 413 && mouseY > 324 && mouseY < 364 && pantalla == 2) {
    pantalla = 0
  }
  if (mouseX > 342 && mouseX < 548 && mouseY > 246 && mouseY < 292 && pantalla == 0) {
    pantalla = 3
  }
  if (mouseX > 200 && mouseX < 401 && mouseY > 285 && mouseY < 326 && pantalla == 3) {
    pantalla = 0
  }
  if (mouseX > 208 && mouseX < 391 && mouseY > 265 && mouseY < 301 && pantalla == 4) {
    posX = 280;
    posY = 220;
    vidaEnemigo1 = 50;
    posX2 = 295;
    posY2 = 100;
    tamañoAutoEnemigoX2 = 15;
    tamañoAutoEnemigoY2 = 10;
    vidaEnemigo2 = 50;
    posX3 = 295;
    posY3 = 100;
    tamañoAutoEnemigoX3 = 15;
    tamañoAutoEnemigoY3 = 10;
    vidaEnemigo3 = 50;
    posX4 = 295;
    posY4 = 100;
    tamañoAutoEnemigoX4 = 15;
    tamañoAutoEnemigoY4 = 10;
    contador = 0;
    contadorInicial = 0;
    vida = 200;
    pantalla = 0
  }
}
