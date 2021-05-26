class Electrodomestico {
  constructor(consumo, procedencia) {
    this.consumo = consumo;
    this.procedencia = procedencia;
    this.precio = 0;
    this.calcularPrecio();
  }

  calcularPrecio() {
    this.calculoConsumo();
    this.calculoProcedencia();
  }

  calculoConsumo() {
    if (this.consumo == "A") {
      this.precio += 450000;
    } else if (this.consumo == "B") {
      this.precio += 350000;
    } else if (this.consumo == "C") {
      this.precio += 250000;
    }
  }

  calculoProcedencia() {
    if (this.procedencia == "Nacional") {
      this.precio += 250000;
    } else if (this.consumo == "Importado") {
      this.precio += 350000;
    }
  }

  getInformacion() {
    var informacion = `Electrodomestico con consumo: ${this.consumo}, procedencia: ${this.procedencia} y un precio de: ${this.precio}`;
    return informacion;
  }
}

module.exports = Electrodomestico;
