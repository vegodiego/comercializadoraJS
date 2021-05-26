const Electrodomestico = require("./electrodomestico");

class Nevera extends Electrodomestico {
  constructor(consumo, procedencia, capacidad) {
    super(consumo, procedencia);
    this.capacidad = capacidad;
    this.calcularPrecio();
  }

  calcularPrecioExtra() {
    if(this.capacidad > 120){
        const veces = Math.round((this.capacidad - 120)/10);
        const aumento = this.precio*0.05*veces;
        this.precio += aumento;
    }
  }
}

module.exports = Nevera;
