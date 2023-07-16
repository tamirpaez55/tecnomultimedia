//Funcion que retorna si se presiono un boton o no.
boolean huboclick(int x, int y, int ancho, int alto){
  
  int x2 = x + ancho;
  int y2 = y + alto;
  if (mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2){     
     return true;
  }else{
     return false;
  }       
}
