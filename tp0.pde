PImage img;
PFont fuente;
void setup(){
  size(800, 400);
  textSize(32);
  
  fuente = createFont("Humnst777 Blk BT",32);
  textFont(fuente);
  img = loadImage("imagen.png");
 
}

void draw(){

  background(255);
  fill (255);  
  image(img,400,0);
  img.resize(400,400);
  
//Llaves lado izq
    rectMode(CORNERS);
    fill(212,212,214);
    rect(65,218, 86,380);
    fill(118,117,120);
    rect(65,218, 67,380);
    fill(141,140,143);
    rect(79,218, 86,380);
    noFill();
    fill(212,212,214);
    quad(81,222,127,357, 141,352, 98,224);   
    quad(96,226,173,320, 184,310, 115,229);
    fill(141,140,143);
    quad(134,354,140,352, 97,222, 89,221);
    quad(106,227,180,313, 184,309, 115,228);
    noFill();
//Llaves lado der
    fill(212,212,214);
    quad(357,148, 406,67, 410,70, 360,153);
    quad(342,138, 358,28, 364,29, 347,142);
    quad(333,136, 341,137, 333,21, 325,22);
    quad(332,135, 291,20, 283,24, 322,137);
    quad(303,136, 217,39, 229,25, 328,136);
    quad(328,135, 230,26, 227,28, 323,137);
    
    fill(130,130,130);
    quad(347,142, 364,29, 362,28, 346,143);
    quad(355,150, 406,67, 408,69, 356,151);
    quad(325,136, 286,24, 288,22, 330,137);
    quad(299,131, 217,39, 220,35, 308,134);
    quad(338,138, 329,22, 333,21, 342,144);
   
    
    noFill();
   
    //ellipse(140, 177, 200, 110);
    //ellipse(265, 177, 200, 100);
    
//Cuerpo base
    noStroke();
    fill(182,180,188);
    triangle(78,223, 111,230, 106,216);
    triangle(78,130, 111,140, 106,125);
    beginShape();
      vertex(276,225);
      vertex(230,218);
      vertex(209,220);
      vertex(120,196);
      vertex(124,154);
      vertex(211,132);      
      vertex(230,133);
      vertex(274,128);
      vertex(289,175);
    endShape();
    
    circle(88,177, 95);
    noFill();
    stroke(1);
//Parte azul 1
    fill(8,199,214);
    noStroke();
    arc(88,177, 60, 60, radians(90), radians(270));
    beginShape();
       vertex(83,146);
       vertex(83,207);
       vertex(95,227);
       vertex(121,233);
       vertex(185,229);
       vertex(218,219);
       vertex(135,189);
       vertex(135,164);
       vertex(218,133);
       vertex(185,125);
       vertex(122,121);
       vertex(95,127);
    endShape();
   
    noFill();
   
    
    fill(182,180,188);
    circle(331,177, 80);
    noFill();
    
//Parte azul 2
    
    fill(8,199,214);
    beginShape();
        vertex(358,206);
        vertex(351,201);
        vertex(331,202);
        vertex(330,152);
        vertex(351,152);
        vertex(358,147);
        vertex(347,138);
        vertex(325,132);
        vertex(271,127);
        vertex(265,139);
        vertex(222,142);
        vertex(169,168);
        vertex(169,188);
        vertex(222,207);
        vertex(265,212);
        vertex(277,226);
        vertex(324,221);
        vertex(347,215);
        vertex(358,206);
    endShape();
    noFill();
    
    
    fill(182,180,188);
    arc(331,177, 50, 50, radians(90), radians(270));
    noFill();
   
    stroke(1);
// tornillos
    fill(47,44,47);
    circle(331,177, 40);
    circle(88,177, 40);
    fill(0);
    circle(331,177, 10);
    circle(88,177, 10);
//Fin de cuerpo base
    fill(214,212,226);
    text("TOTAL",186,190);
 
}

void mousePressed() {
  println("vertex("+mouseX+","+mouseY+");");
}
