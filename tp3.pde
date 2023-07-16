//Link al video: https://youtu.be/jh9GfS41PAA
// TP3
//Alumno: Paez, Tamir Tizziano.   Legajo:94716/6
int pantalla = 0;
int nFondos = 15;
PImage [] fondo = new PImage [nFondos];
PFont fuentetitulo, fuentetexto, fuentebotones, fuentecreditos;
String [] lineas;

void setup() { 
  size(600, 600);
  textSize(18);
  fuentetitulo = loadFont("Amiri-Bold-52.vlw");
  fuentetexto = loadFont("Amiri-Bold-18.vlw");
  fuentebotones = loadFont("LiberationSerif-Bold-20.vlw");
  fuentecreditos = loadFont("Amiri-Bold-40.vlw");
  //el for va a cargar las imagenes en el arreglo.
  for (int i = 0; i < nFondos; i++) {
    fondo[i] = loadImage("fondo" + i + ".jpg");
  }
  //Se carga el texto de las pantallas en el arreglo desde un .txt.
  lineas = loadStrings("texto.txt");  
}

void draw() {
 
 generarPantallas(pantalla);
 
}  
void mousePressed() {
  
  pasarpantalla(mouseX,mouseY); 
}
