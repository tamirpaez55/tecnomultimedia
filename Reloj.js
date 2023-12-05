class Reloj {
  constructor() {
    this.contadorInicial = 0;
    this.record = 0;
    this.tiempoTranscurrido = 0;
  }

  iniciarContador() {
    this.contadorInicial = millis();
  }

  obtenerTiempoTranscurrido() {
    return round((millis() - this.contadorInicial) / 1000);
  }

  mostrar(x, y) {
    this.tiempoTranscurrido = this.obtenerTiempoTranscurrido();
    fill(255);
    textSize(48);
    text(this.tiempoTranscurrido, x, y);
  }


  reiniciar() {
    this.contadorInicial = millis();
    this.record = 0;
  }
}
