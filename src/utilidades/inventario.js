class Inventario {
  constructor() {
    this.listaProductos = [];
  }
  insertarProducto(producto) {
    this.listaProductos.push(producto);
  }

  mostrarInventario() {
    console.log(this.listaProductos);
  }

  editarInventario(factura) {
    var lista = this.listaProductos;
    lista.forEach(function (elementoInventario, indexInventario) {
      factura.listaProductos.forEach(function (elementoFactura, indexFactura) {
        if (elementoInventario.getInformacion() == elementoFactura.getInformacion()) {
          factura.listaProductos.splice(indexFactura,1);
          lista.splice(indexInventario,1);
        }
      });
    });
    this.listaProductos = lista;
  }
}

module.exports = Inventario;