class Aventura {
  constructor() {
    this.pantallas = [];
    this.pantallasDosBotones = [];
    this.nFondos = 17;
    this.cantImagenes = 2;
    this.fondosHistoria = [];
    this.imagenesJugador = [];
    this.imagenesEnemigo = [];
    this.pantallaActual = 0;
    this.juego = null;
  }

  preload() {
    for (let i = 0; i < this.nFondos; i++) {
      this.fondosHistoria[i] = loadImage("data/fondo" + i + ".jpg");
    }
    this.lineas = loadStrings("data/texto.txt");

    this.fondo3 = loadImage('datajuego/Gameover.png');
    this.fondo2 = loadImage('datajuego/Fondocompleto.png');
    this.fondo1 = loadImage('datajuego/home.png');

    for (let j = 0; j < this.cantImagenes; j++) {
      this.imagenesJugador[j] = loadImage('datajuego/autoSprite' + (j + 1) + '.png');
      this.imagenesEnemigo[j] = loadImage('datajuego/autoRojoSprite' + (j + 1) + '.png');
    }

    
  }

  setup() {
    //Pantallas de un boton
    this.pantallas[0] = new Pantalla(this.fondosHistoria[0], this.lineas[0], 1, this);
    this.pantallas[1] = new Pantalla(this.fondosHistoria[1], this.lineas[1], 2, this);
    this.pantallas[2] = new Pantalla(this.fondosHistoria[2], this.lineas[2], 3, this);
    this.pantallas[3] = new Pantalla(this.fondosHistoria[3], this.lineas[3], 4, this);
    this.pantallas[5] = new Pantalla(this.fondosHistoria[5], this.lineas[5], 14, this);
    this.pantallas[6] = new Pantalla(this.fondosHistoria[6], this.lineas[6], 7, this);
    this.pantallas[7] = new Pantalla(this.fondosHistoria[7], this.lineas[7], 8, this);
    this.pantallas[9] = new Pantalla(this.fondosHistoria[9], this.lineas[9], 18, this);
    this.pantallas[10] = new Pantalla(this.fondosHistoria[10], this.lineas[10], 11, this);
    this.pantallas[11] = new Pantalla(this.fondosHistoria[11], this.lineas[11], 18, this);
    this.pantallas[12] = new Pantalla(this.fondosHistoria[12], this.lineas[12], 13, this);
    this.pantallas[13] = new Pantalla(this.fondosHistoria[13], this.lineas[13], 18, this);
    //Pantalla al ganar el juego:
    this.pantallas[15] = new Pantalla(this.fondosHistoria[15], this.lineas[14], 6, this);

    
    //Pantalla al perder el juego:
    this.pantallas[16] = new Pantalla(this.fondosHistoria[16], this.lineas[15], 17, this);
    this.pantallas[17] = new Pantalla(this.fondosHistoria[9], this.lineas[16], 18, this);
    
    //Pantalla fin:
    this.pantallas[18] = new Pantalla(this.fondosHistoria[14], this.lineas[0], 0, this);
    
    //Pantallas de dos botones
    this.pantallasDosBotones[4] = new PantallaDosBotones(this.fondosHistoria[4], this.lineas[4], 5, 10,"Matar a Ivanova","No hacer nada", this);
    this.pantallasDosBotones[8] = new PantallaDosBotones(this.fondosHistoria[8], this.lineas[8], 9, 12,"Confesar","No hacer nada", this);

    //Pantalla del juego
    this.juego = new Juego(this.imagenesEnemigo, this.imagenesJugador, this.fondo3, this.fondo2, this.fondo1,15,16,this);
    this.juego.cargarElementos();
  }

  draw() {
    
    if (this.pantallaActual == 0){
      this.setup();
    }
    if (this.pantallaActual == 4 || this.pantallaActual == 8) {
      this.pantallasDosBotones[this.pantallaActual].mostrar();
    } else if (this.pantallaActual == 14) {
      this.juego.mostrar();
      this.juego.manejarTecla();
    } else {
      this.pantallas[this.pantallaActual].mostrar();
    }

    console.log("Valor de this.pantalla" + this.pantallaActual);
  }


  mousePressed() {

    if (this.pantallaActual == 4 || this.pantallaActual == 8) {
      this.pantallasDosBotones[this.pantallaActual].click();
    } else {
      this.pantallas[this.pantallaActual].click();
    }
  }

  cambiarPantalla(pSiguiente) {
    this.pantallaActual = pSiguiente;
  }

  presionarTecla() {
    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        this.juego.jugador.mover(keyCode === RIGHT_ARROW ? 'DERECHA' : 'IZQUIERDA');
      }
    }
    
  }
}
