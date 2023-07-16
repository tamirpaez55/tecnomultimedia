//funcion para generar el boton siguiente.
void botoncontinuar(){
  textFont(fuentebotones);
  fill(0);
  rect(450,530,130,50);
  fill(255);
  text("Continuar",475,562);
  noFill();
}
//funcion para generar los botones de el menu inicial.
void botonesdeInicio(){
  textFont(fuentebotones);
  fill(0);
  rect(200,300,200,50);
  fill(255);
  text("Iniciar Historia",235,333);
  noFill();
  fill(0);
  rect(200,370,200,50);
  fill(255);
  text("Creditos",263,400);
  noFill();

}
//funcion para generar los botones con decisiones.
void botonesdeDecision(){  
  fill(0);
  rect(140,520,60,60);
  rect(400,520,60,60);
  fill(255);
  textFont(fuentecreditos);
  text("A",158,563);
  text("B",418,563);
}
//funcion para generar el boton en un final.
void botonfinal(){
  textFont(fuentetitulo);
  text("Fin.",260,480);
  textFont(fuentebotones);
  fill(0);
  rect(240,500,120,50);
  fill(255);
  text("Ir al menú",260,532);
}

//Funcion que pasa de pantalla al hacer click.
void pasarpantalla(int mouseX, int mouseY){
  
   switch(pantalla) {
     case 0:
       if (huboclick(200,300,200,50)) {
        pantalla = 1;
       }
       if (huboclick(200,370,200,50)) {
        pantalla = 13;
       } 
       break;
     case 13:
       if (huboclick(250,535,100,50)) {
        pantalla = 0;
       }
       break;
     case 1:
       if (huboclick(450,530,130,50)) {
        pantalla = 2;
       }
       break;
     case 2:
       if (huboclick(450,530,130,50)) {
        pantalla = 3;
       }
       break;
     case 3:
       if (huboclick(450,530,130,50)) {
        pantalla = 4;
       }
       break;
     case 4:
       if (huboclick(140,520,60,60)) {
        pantalla = 5;
       } 
       if (huboclick(400,520,60,60)){
        pantalla = 11;
       }
       break;
     case 5:
       if (huboclick(450,530,130,50)) {
        pantalla = 6;
       }
       break;
     case 6:
       if (huboclick(450,530,130,50)) {
        pantalla = 7;
       }
       break;
     case 7:
       if (huboclick(450,530,130,50)) {
        pantalla = 8;
       }
       break;
     case 8:
       if (huboclick(140,520,60,60)) {
        pantalla = 9;
       } 
       if (huboclick(400,520,60,60)){
        pantalla = 10;
       }
       break;
     case 9:
       if (huboclick(240,500,120,50)) {
        pantalla = 0;
       }
       break;
     case 10:
       if (huboclick(450,530,130,50)) {
        pantalla = 14;
       }
       break;
     case 11:
       if (huboclick(450,530,130,50)) {
        pantalla = 12;
       }
       break;   
     case 12:
       if (huboclick(240,500,120,50)) {
        pantalla = 0;
       }
       break;
     case 14:
       if (huboclick(240,500,120,50)) {
        pantalla = 0;
       }
       break;
    
 }
}
