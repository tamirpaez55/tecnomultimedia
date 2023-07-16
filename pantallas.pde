
void generarPantallas(int pantalla){
 if (pantalla == 0){
    image(fondo[0], 0, 0, 600, 600);
    
    textFont(fuentetitulo);
    text("Crimen y Castigo",100,200);
    botonesdeInicio();
 }
 if (pantalla == 13){
   image(fondo[13], 0, 0, 600, 600);
   fill(200,200,200,150);
   rect(25,25,550,500);
   fill(0);
   textFont(fuentecreditos);
   text("Alumno: Paez, Tamir ",40,80);
   text("Comision 4. Legajo: 94716/6",40,160);
   text("Arte generado por IA con \nla herramienta de Bing.",40,220);
   text("Autor de la obra: \nFiodor Dostoievski",40,330);
   rect(250,535,100,50);
   fill(255);
   textFont(fuentebotones);
   text("Menu",277,567);
 }
 
 if (pantalla == 1){
   textFont(fuentetexto);
   image(fondo[1], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,120);
   fill(255);
   text(lineas[0], 13,35,580,110);
   botoncontinuar();
 }
 
 if (pantalla == 2){
   textFont(fuentetexto); 
   image(fondo[2], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,130);
   fill(255);
   text(lineas[1], 13,35,580,110);
   botoncontinuar();
 }
 
 if (pantalla == 3){
   textFont(fuentetexto);
   image(fondo[3], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,90);
   fill(255);
   text(lineas[2], 13,35,580,110);
   botoncontinuar();
 }
 if (pantalla == 4){
   textFont(fuentetexto);
   image(fondo[4], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,380,580,130);
   fill(255);
   text(lineas[3], 13,390,580,120);
   botonesdeDecision();
 }
 if (pantalla == 5){
   textFont(fuentetexto);
   image(fondo[5], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,90);
   fill(255);
   text(lineas[4], 13,35,580,110);
   botoncontinuar();
 } 
 if (pantalla == 6){
   textFont(fuentetexto);
   image(fondo[6], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,140);
   fill(255);
   text(lineas[5], 13,35,580,140);
   botoncontinuar();
 }
 if (pantalla == 7){
   textFont(fuentetexto);
   image(fondo[7], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,120);
   fill(255);
   text(lineas[6], 13,35,580,110);
   botoncontinuar();
 } 
 if (pantalla == 8){
   textFont(fuentetexto);
   image(fondo[8], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,380,580,130);
   fill(255);
   text(lineas[7], 13,390,580,110);
   botonesdeDecision();
 }
 if (pantalla == 9){
   textFont(fuentetexto);
   image(fondo[9], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,110);
   fill(255);
   text(lineas[8], 13,35,580,110);
   botonfinal();
 }
 if (pantalla == 10){
   textFont(fuentetexto);
   image(fondo[10], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,60);
   fill(255);
   text(lineas[11], 13,35,580,110);
   botoncontinuar();
 }
 
 if (pantalla == 11){
   textFont(fuentetexto);
   image(fondo[11], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,380,580,100);
   fill(255);
   text(lineas[9], 13,390,580,110);
   botoncontinuar();
 }
 if (pantalla == 12){
   textFont(fuentetexto);
   image(fondo[12], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,90);
   fill(255);
   text(lineas[10], 13,35,580,110);
   botonfinal();
 }
 
 if (pantalla == 14){
   textFont(fuentetexto);
   image(fondo[14], 0, 0, 600, 600);
   fill(0,0,0,200);
   rect(10,25,580,60);
   fill(255);
   text(lineas[12], 13,35,580,110);
   botonfinal();
 }
 
 
}


 
