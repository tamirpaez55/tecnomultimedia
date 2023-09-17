function dibujarAutoEnemigo1() {
  
  if (dist(posX, posY, posX2, posY2)>0) {
    posY2+=0.5;
    posX2+=0.3;
    tamañoAutoEnemigoX2+=0.13;
    tamañoAutoEnemigoY2+=0.07;
  }
  let d1 = dist(posX, posY, posX2, posY2 - 20 );
  if (vidaEnemigo1 &&  d1 < 42 && posY2 < 220) {
    vidaEnemigo1 = 0;
    vida= vida - 50;
    d1+=40;
  }  
  if (posY2 > 400 ) {
    vidaEnemigo1 = 50;
    posX2 = 295;
    posY2 = 100;
    tamañoAutoEnemigoX2 = 15;
    tamañoAutoEnemigoY2 = 10;
  }

  image(imagenesAuto2[round(spriteActualAuto1)], posX2, posY2, tamañoAutoEnemigoX2, tamañoAutoEnemigoY2);
}




function dibujarAutoEnemigo2() {
  if (dist(posX, posY, posX3, posY3)>0) {
    
    posY3+=0.7;
    
    tamañoAutoEnemigoX3+=0.15;
    tamañoAutoEnemigoY3+=0.09;
  }
  let d2 = dist(posX, posY, posX3, posY3 - 20);
  if (vidaEnemigo2 && d2 < 42 && posY3 < 220 ) {
    vidaEnemigo2 = 0;
    vida= vida - 50;
    d2+=40;
  }  
  if (posY3 > 400 ) {
    vidaEnemigo2 = 50;
    posX3 = 295;
    posY3 = 100;
    tamañoAutoEnemigoX3 = 15;
    tamañoAutoEnemigoY3 = 10;
  }

  image(imagenesAuto3[round(spriteActualAuto1)], posX3, posY3, tamañoAutoEnemigoX3, tamañoAutoEnemigoY3);
}

function dibujarAutoEnemigo3() {
  
  if (dist(posX, posY, posX4, posY4)>0) {
    posY4+=0.35;
    posX4-=0.23;
    tamañoAutoEnemigoX4+=0.09;
    tamañoAutoEnemigoY4+=0.04;
  }
  let d1 = dist(posX, posY, posX4, posY4 - 20 );
  if (vidaEnemigo3 &&  d1 < 42 && posY4 < 220) {
    vidaEnemigo3 = 0;
    vida= vida - 50;
    d1+=40;
  }  
  if (posY4 > 400 ) {
    vidaEnemigo3 = 50;
    posX4 = 295;
    posY4 = 100;
    tamañoAutoEnemigoX4 = 15;
    tamañoAutoEnemigoY4 = 10;
  }

  image(imagenesAuto2[round(spriteActualAuto1)], posX4, posY4, tamañoAutoEnemigoX4, tamañoAutoEnemigoY4);
}





function dibujarAuto() {
  fill(0);
  image(imagenesAuto1[round(spriteActualAuto1)], posX, posY, 50, 25);
}

function calcularSiguienteSpriteAuto1() {
  if (spriteActualAuto1 >= cantImagenes-1) {
    spriteActualAuto1 = 0;
  } else {
    spriteActualAuto1+=1;
  }
}


function presionarTecla() {
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW && posX < 380) {
      posX+=2;
    } else if (keyCode == LEFT_ARROW && posX > 180) {
      posX-=2;
    }
  }
}
