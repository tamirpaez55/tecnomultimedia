void DibujarLineas(){
  LargoLinea1 = 90; 
  LargoLinea2 = 320;
  posXRojo = 490; 
  posXAmarillo = 503;
  posXCeleste = 550;
  color1 = color(155,11,36);
  color2 = color(195,156,5);
  color3 = color(182,191,206);
  strokeCap(SQUARE);
  
  for(int i = 1; i <= 13; i = i+1){
      PosLineaX = i*18.2;
      grosorLinea = i*0.4;
      strokeWeight(grosorLinea);
        //Llamo a la funcion que compara colores y me retorna true o false
      if (CompararColor(Pipeta,color1)){
        stroke(0);
      }
      else{
        stroke(color1);
      }
 
      
      line(posXRojo+PosLineaX,LargoLinea1,posXRojo+PosLineaX,LargoLinea2);
      LargoLinea1 = LargoLinea1 - 2.6 ;
      LargoLinea2 = LargoLinea2 + 2.6 ;
    
  }
  
 
  LargoLinea1 = 90; 
  LargoLinea2 = 320;
  for(int i = 1; i <= 9; i = i+1){
        PosLineaX = i*18;
        grosorLinea = 3.3 - (i*0.3);
        
        strokeWeight(grosorLinea);
        if (CompararColor(Pipeta,color2)){
        stroke(0);
        }
        else{
        stroke(color2);
        }
        
        line(posXAmarillo+PosLineaX,LargoLinea1,posXAmarillo+PosLineaX,LargoLinea2);
        LargoLinea1 = LargoLinea1 + 2 ;
        LargoLinea2 = LargoLinea2 - 2 ;
  
  }
   for(int i = 1; i <= 6; i = i+1){
        PosLineaX = i*18;
        grosorLinea = i*0.4;
        
        strokeWeight(grosorLinea);
        if (CompararColor(Pipeta,color3)){
        stroke(0);
        }
        else{
        stroke(color3);
        }
        
        line(550+PosLineaX,LargoLinea1,550+PosLineaX,LargoLinea2);
        LargoLinea1 = LargoLinea1 - 0.6 ;
        LargoLinea2 = LargoLinea2 + 0.6 ;
  
  }
   
 
  
  
}
