class PantallaDosBotones {
  constructor(fondo, lineas, decision1, decision2,texto1,texto2, aventura) {
    this.decision1 = decision1;
    this.decision2 = decision2;
    this.fondo = fondo;
    this.lineas = lineas;
    this.aventura = aventura;
    this.botonA = new BotonContinuar(140,520,140,60,texto1);
    this.botonB = new BotonContinuar(320,520,140,60,texto2);
  }


  mostrar() {

    background(255);
    image(this.fondo, 0, 0, 600, 600);
    fill(0, 0, 0, 200);
    rect(10,380,580,130);
    fill(255);
    text(this.lineas, 13,390,580,120);
    this.botonA.dibujar();
    this.botonB.dibujar();
  }
  
  click() {
    if (this.botonA.huboClick()) {
      
      this.aventura.cambiarPantalla(this.decision1);
      console.log("Se hizo click en el Boton A");
      
    } else if (this.botonB.huboClick()) {
      
      this.aventura.cambiarPantalla(this.decision2);
      console.log("Se hizo click en el Boton B");
    }
  }
}
