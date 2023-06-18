boolean CompararColor(color Pipeta, color color1) {
  // Obtiene los componentes de color de cada variable
  
  float r1 = red(Pipeta);
  float g1 = green(Pipeta);
  float b1 = blue(Pipeta);
  
  float r2 = red(color1); 
  float g2 = green(color1);
  float b2 = blue(color1);
  
  
  
  // Compara los componentes de color para determinar si son iguales
  if (r1 == r2 && g1 == g2 && b1 == b2) {
    
    return true;  // Retorna el primer color
  } else {
    return false;  // Retorna el color negro
  }
}
