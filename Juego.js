class Juego {
  constructor(imagenesEnemigo, imagenesJugador, fondo3, fondo2, fondo1, pSiguiente1, pSiguiente2, aventura) {
    this.fondo1 = fondo1;
    this.fondo2 = fondo2;
    this.fondo3 = fondo3;
    this.pantallaJuego = 0;
    this.imagenesEnemigo = imagenesEnemigo;
    this.imagenesJugador = imagenesJugador;
    this.aventura = aventura;
    this.pSiguiente1 = pSiguiente1;
    this.pSiguiente2 = pSiguiente2;
    this.tiempoParaGanar = 0;
  }

  cargarElementos() {
    this.jugador = new Jugador(280, 220, this.imagenesJugador);
    this.obstaculo1 = new Enemigo(295, 100, this.imagenesEnemigo, random(-0.2, 0.2), 0.3, 0.10, 0.05);
    this.obstaculo2 = new Enemigo(295, 100, this.imagenesEnemigo, random(-0.2, 0.2), 0.25, 0.06, 0.03);
    this.tiempo = new Reloj();
  }
  reiniciarJuego() {

    this.jugador = null; // Reinicia al jugador
    this.tiempo = null; // Reinicia el tiempo
  }

  manejarTecla() {
    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        this.jugador.mover(keyCode === RIGHT_ARROW ? 'DERECHA' : 'IZQUIERDA');
      }
    }
    if (key === 'r' || key === 'R') {
      this.reiniciarJuego();
    }
  }

  mostrar() {
    switch(this.pantallaJuego) {
    case 0:
      background(0);
      image(this.fondo1, 0, 0);
      if (keyIsPressed) {
        this.pantallaJuego = 1;
        this.tiempo.iniciarContador();
      }
      break;
    case 1:
      image(this.fondo2, 0, 0);
      this.actualizar();
      this.aventura.presionarTecla();
      this.reiniciarEnemigos();
      this.colision();
      break;
    }
  }

  actualizar() {

    this.jugador.mostrar();

    this.obstaculo1.mostrar();
    this.obstaculo1.mover();
    this.obstaculo1.calcularSiguienteSprite();

    this.obstaculo2.mostrar();
    this.obstaculo2.mover();
    this.obstaculo2.calcularSiguienteSprite();

    this.tiempo.mostrar(300, 475);
    
    this.tiempoParaGanar = this.tiempo.obtenerTiempoTranscurrido();
    
    console.log("this.tiempo.tiempoTranscurrido" + this.tiempoParaGanar);
    if (this.tiempoParaGanar >= 15) {
      this.aventura.cambiarPantalla(this.pSiguiente1);
    }
    
  }

  colision() {
    let d1 = dist(this.jugador.x, this.jugador.y, this.obstaculo1.x, this.obstaculo1.y - 20 );
    let d2 = dist(this.jugador.x, this.jugador.y, this.obstaculo2.x, this.obstaculo2.y - 20 );
    if (d1 < 42 && this.obstaculo1.y < 220 || d2 < 42 && this.obstaculo2.y < 220) {
      this.aventura.cambiarPantalla(this.pSiguiente2);
    }
  }
  reiniciarEnemigos() {
    if (this.obstaculo1.y > 230) {
      this.obstaculo1.reiniciar(random(-0.2, 0.2), 0.3, 0.10, 0.05);
    }
    if (this.obstaculo2.y > 230) {
      this.obstaculo2.reiniciar(random(-0.2, 0.2), 0.2, 0.06, 0.03);
    }
  }
}
