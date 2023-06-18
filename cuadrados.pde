void DibujarCuadrados(){
  float r,g,b;
  noStroke();
  // Se dibuja la grilla.
  for (int i = 0; i < cantCuadrado; i++){
    for (int j = 0; j < cantCuadrado; j++){
     float x = i * tamCuadrado;
     float y = j * tamCuadrado;
     r= 0;
     g= 0;
     b= 0;
     
     
     float distancia = dist(x, y, mouseX,mouseY); // Mide distancia de cada cuadrado con respecto a la posicion del mouse
     // Los ifs evaluan cual color debe mostrarse en el fondo
     if (Pipeta == color1){
        r = map(distancia, 0, 600, 255, 0);
        g = map(distancia, 0, 600, 90, 0);
        b = map(distancia, 0, 600, 90, 0);
      }
      if (Pipeta == color2){
        r = map(distancia, 0, 600, 255, 0);
        g = map(distancia, 0, 600, 255, 0);
        b = map(distancia, 0, 600, 100, 0);
      }
      if (Pipeta == color3){
        r = map(distancia, 0, 600, 182, 0);
        g = map(distancia, 0, 600, 191, 0);
        b = map(distancia, 0, 600, 220, 0);
      }
      
     fill(r, g, b);  // Rellena el cuadrado que se va a dibujar con el un color segun su cercania con el mouse.
     rect(i*tamCuadrado,j*tamCuadrado,tamCuadrado,tamCuadrado);
    }
  }
  

}
