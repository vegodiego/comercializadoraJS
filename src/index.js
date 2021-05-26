const prompt = require("prompt-sync")();
const Electrodomestico = require("./productos/electrodomestico");
const Televisor = require("./productos/televisor");
const Nevera = require("./productos/nevera");
const Inventario = require("./utilidades/inventario");
const Factura = require("./utilidades/factura");

var opcion = -1;
const factura = new Factura();
const inventario = new Inventario();

while (opcion != 4) {
  console.log(
    "\nMenu\n\n1) Ingresar productos al inventario\n2) Ver inventario\n3) Crear factura\n4) salir\n"
  );
  var opcion = prompt("Ingresa una opcion: ");
  console.log("");
  if (opcion == 1) {
    crearNuevaLista("inventario");
    console.log("\nInventario: \n");
    inventario.mostrarInventario();
  } else if (opcion == 2) {
    console.log("\nInventario: \n");
    inventario.mostrarInventario();
  } else if (opcion == 3) {
    crearNuevaLista("factura");
    factura.mostrarFactura();
    inventario.editarInventario(factura);
    console.log("\nInventario actualizado: \n");
    inventario.mostrarInventario();
    factura.eliminar();
  } else {
    console.log("Ingreso invalido");
  }
}

function crearNuevaLista(tipo) {
  var opcion2 = prompt("Ingresa la cantidad de productos: ");
  for (let i = 1; i <= opcion2; i++) {
    opcionElectrodomestico = prompt(
      "Ingrese el tipo de electrodomestico (e,t,n): "
    );

    numeroProductos = prompt("Ingrese la cantidad: ");
    consumo = prompt("Ingrese el tipo de consumo (A, B, C): ");
    procedencia = prompt("Ingrese la procedencia (Nacional, Importado): ");
    i += numeroProductos - 1;

    if (opcionElectrodomestico == "e") {
      if (tipo == "factura") {
        crearElectrodomesticos(numeroProductos, procedencia, consumo, factura);
      } else if ("inventario") {
        crearElectrodomesticos(numeroProductos, procedencia, consumo, inventario);
      }
    } else if (opcionElectrodomestico == "t") {
      if (tipo == "factura") {
        crearTelevisores(numeroProductos, procedencia, consumo, factura);
      } else if ("inventario") {
        crearTelevisores(numeroProductos, procedencia, consumo, inventario);
      }
    } else if (opcionElectrodomestico == "n") {
      if (tipo == "factura") {
        crearNeveras(numeroProductos, procedencia, consumo, factura);
      } else if ("inventario") {
        crearNeveras(numeroProductos, procedencia, consumo, inventario);
      }
    }
  }
}


function crearElectrodomesticos(cantidad, procedencia, consumo, lista) {
  for (let i = 1; i <= cantidad; i++) {
    lista.insertarProducto(new Electrodomestico(consumo, procedencia));
  }
}

function crearTelevisores(cantidad, procedencia, consumo, lista) {
  for (let i = 1; i <= cantidad; i++) {
    lista.insertarProducto(new Televisor(consumo, procedencia, 50, true));
  }
}

function crearNeveras(cantidad, procedencia, consumo, lista) {
  for (let i = 1; i <= cantidad; i++) {
    lista.insertarProducto(new Nevera(consumo, procedencia, 110));
  }
}
