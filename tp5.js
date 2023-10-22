// Link al vieo con la explicacion : https://youtu.be/RVv9W7w6SdI
//Alumno: Tamir Paez Tizziano. Legajo: 94716/6.
let imagenesAutoJugador = [];
let imagenesEnemigo = [];
let autoJugador, Enemigo1, Enemigo2, fondo;
let fondo5, fondo4, fondo3, fondo2, fondo1;
let cantImagenes = 2;
let pantalla = 2;
let imagenContador, record, d1, d2, tiempo;

function preload() {
  fondo3 = loadImage('data/Gameover.png');
  fondo2 = loadImage('data/Fondocompleto.png');
  fondo1 = loadImage('data/home.png');
  for (let i = 0; i < cantImagenes; i++) {
    imagenesAutoJugador[i] = loadImage('data/autoSprite' + (i + 1) + '.png');
    imagenesEnemigo[i] = loadImage('data/autoRojoSprite' + (i + 1) + '.png');
  }
  imagenContador = loadImage('data/fondocontador.png');
}

function setup() {
  createCanvas(600, 400);
  autoJugador = new Auto(280, 220, imagenesAutoJugador);
  Enemigo1 = new Enemigo(295, 100, imagenesEnemigo, random(-0.2, 0.2), 0.3, 0.10, 0.05);
  Enemigo2 = new Enemigo(295, 100, imagenesEnemigo, random(-0.2, 0.2), 0.25, 0.06, 0.03);
  tiempo = new Reloj(0);
}


function draw() {

  switch (pantalla) {
  case 0:
    background(0);
    image(fondo2, 0, 0);
    autoJugador.mostrar();
    Enemigo1.mostrar();
    Enemigo1.mover();
    Enemigo2.mostrar();
    Enemigo2.mover();
    presionarTecla();
    autoJugador.calcularSiguienteSprite();
    Enemigo1.calcularSiguienteSprite();
    Enemigo2.calcularSiguienteSprite();
    textSize(30);
    image(imagenContador, 0, 264);
    tiempo.mostrar();
    if (Enemigo1.y > 250) {
      Enemigo1.reiniciar(random(-0.2, 0.2), 0.3, 0.10, 0.05);
      
    }
    if (Enemigo2.y > 250) {
      Enemigo2.reiniciar(random(-0.2, 0.2), 0.2, 0.06, 0.03);
      
    }
    d1 = dist(autoJugador.x, autoJugador.y, Enemigo1.x, Enemigo1.y - 20 );
    d2 = dist(autoJugador.x, autoJugador.y, Enemigo2.x, Enemigo2.y - 20 );
    if (d1 < 42 && Enemigo1.y < 220 || d2 < 42 && Enemigo2.y < 220) {
      pantalla = 1;
      tiempo.guardarRecord();
    }
    break;
  case 1:
    image(fondo3, 0, 0);
    text(tiempo.record, 418, 150);
    break;
  case 2:
    background(0);
    image(fondo1, 0, 0);
    if (keyIsPressed) {
      pantalla = 0;
    }
    break;
  }
}


function presionarTecla() {
  if (keyIsPressed) {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
      autoJugador.mover(keyCode === RIGHT_ARROW ? 'DERECHA' : 'IZQUIERDA');
    }
  }
}
