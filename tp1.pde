int Pantalla;
String Texto1;
String Texto2;
String Texto3;
PImage Imagen1;
PImage Imagen2;
PImage Imagen3;
float PosX;
float PosY;
float velocidad;
int tiempo;
float tamTexto;
PFont fuente;
void setup() {

  size(640, 480);
  fuente = loadFont("Humanist521BT-Bold.vlw");
  textFont(fuente);
  Imagen1 = loadImage("imagen.png");
  Imagen2 = loadImage("imagen1.png");
  Imagen3 = loadImage("imagen2.jpg");
  Texto1 = "Set de llaves diseñadas\n para atornillar y encajar cualquier\n tornillo con cabeza en forma hexágonal.";
  Texto2 = "Posee un diseño compacto\n para un fácil transporte,\n uso y almacenamiento";
  Texto3 = "Fabricadas en acero\n al cromo vanadio\n mucho más resistentes al\n desgaste que el acero normal";
}

void draw() {

  switch(Pantalla) {
  case 0:
    textAlign(LEFT);
    textSize(40);
    PosX = width/2;
    PosY = 0;
    Pantalla = 0;
    velocidad = 0.05;
    tiempo = 0;
    tamTexto = 12;
    Pantalla = 1;
    break;
  case 1:
    image(Imagen1, 0, 0);
    Imagen1.resize(640, 480);
    tiempo++;
    println("pantalla 1 ", tiempo);
    if (tiempo >= 1000) {
      tiempo = 0;
      Pantalla = 2;
    }
    fill(0);
    text(Texto1, PosX, 200);
    if (width > PosX) {
      PosX -= 1;
    }

    break;

  case 2:
    image(Imagen2, 0, 0);
    Imagen2.resize(640, 480);
    tiempo++;
    println("pantalla 2 ", tiempo);
    if (tiempo >= 1000) {
      tiempo = 0;
      Pantalla = 3;
      PosY = 400;
      velocidad = 0.5;
    }
    if ( 1400 > tiempo) {
      fill(0);
      textSize(tamTexto);
      tamTexto += velocidad;
      text(Texto2, 20, 200);
    }
    break;

  case 3:

    textSize(40);
    image(Imagen3, 0, 0);
    Imagen3.resize(640, 480);
    tiempo++;
    println("pantalla 3 ", tiempo);
    if (tiempo >= 1000) {
      tiempo = 0;
      Pantalla = 4;
    }
    text(Texto3, 40, PosY);
    if (height > PosY) {
      PosY -= velocidad;
    }
    break;

  case 4:
    image(Imagen3, 0, 0);
    Imagen3.resize(640, 480);
    fill(255);
    rect (30, 30, 100, 40);
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text("Reiniciar", 80, 55);
    if (mouseButton==LEFT && mouseX>=30 && mouseX<=130 && mouseY>=30 && mouseY<=70) {
      Pantalla = 0;
    }
    break;
  }
}
