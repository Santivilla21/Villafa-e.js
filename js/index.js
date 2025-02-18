const entradas = ["Entrada general", "Entrada vip", "Entrada con consumicion"];

const precioGeneral = 8000
const precioVip = 15000
const precioConsumicion = 12000
const carritoCompras = [];

let dinero = [];
let sumatotal=0;

function comprarGeneral(item) {
  const agregar_general = entradas[0];
  comprar_entrada(agregar_general)

}



function comprar_entrada(item) {
  if (entradas[0].includes(item)) {
    const indice = entradas[0].indexOf(item);
    carritoCompras.push(entradas[0][indice]);
    dinero.push(precioGeneral)
    sumatotal+=precioGeneral
    console.log(item +"  $"+ precioGeneral);
  }
}

function comprarVip(item) {
  const agregar_vip = entradas[1];
  comprar_entradav(agregar_vip)

}

function comprar_entradav(item) {
  if (entradas[1].includes(item)) {
    const indice = entradas[1].indexOf(item);
    carritoCompras.push(entradas[1][indice]);
    dinero.push(precioVip)
    sumatotal+=precioVip
    console.log(item +"  $"+ precioVip);


  }
}

function comprarcons(item) {
  const agregar_cons = entradas[2];
  comprar_entradacons(agregar_cons)

}

function comprar_entradacons(item) {
  if (entradas[2].includes(item)) {
    const indice = entradas[2].indexOf(item);
    carritoCompras.push(entradas[2][indice]);
    dinero.push(precioConsumicion)
    sumatotal+=precioConsumicion
    console.log(item +"  $"+ precioConsumicion);
  }
}

/*function vender_entrada(item) {
  const sacar_general = entradas[0];
  quitar_entrada(sacar_general)
}
function quitar_entrada(item) {
  if (carritoCompras.includes(item)) {

    const indice = carritoCompras.indexOf(item);
    carritoCompras.splice(indice, 1)
    console.log(item)
  }

}*/
function mostrar_carrito() {
  console.log("Tu carrito");
  for (let indice = 0; indice < carritoCompras.length; indice++) {
    
    console.log( "Total $" + sumatotal);
    prompt("ingrese el monto a pagar:")
    if (prompt("ingrese el monto a pagar:")== sumatotal){
      alert("compra Realizada");

    }
   
  }
}