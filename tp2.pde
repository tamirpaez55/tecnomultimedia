
// Enlance al video explicativo: https://youtu.be/ozxoRpfZH4w
//TP2 - Paez Tamir
color Pipeta, color1, color2, color3;
PImage Imagen;
float LargoLinea1, LargoLinea2,grosorLinea, PosLineaX;
int posXRojo, posXAmarillo, posXCeleste, SeleccionColor;
int tamCuadrado, cantCuadrado;
void setup(){
  Imagen = loadImage("charoux.png");
  size(800,400);
  cantCuadrado = 100;
  tamCuadrado = width / cantCuadrado;

  

}
void draw(){

  background(Pipeta);
  DibujarCuadrados(); //Funcion que dibuja una grilla de 100 cuadrados y crea un efecto degrade con 
  Imagen.resize(400, 400);
  image(Imagen,0,0);
  DibujarLineas(); // Funcion que dibuja las lineas de la obra, no retorna variables
  
  
  
}

void mousePressed() { 
  Pipeta = get(mouseX, mouseY);  // Tomo el color de el pixel que selecciono al hacer click
  
  
}
