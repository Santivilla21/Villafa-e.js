class Entrada {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
//objeos/entradas
const entrada_general = new Entrada("Entrada General", 8000, 200);
const entrada_vip = new Entrada("Entrada Vip", 15000, 50);
const entrada_consumision = new Entrada("Entrada con Consumicion", 12000, 100);

const carritoCompras = [];

let dinero = [];
let sumatotal = 0;
//entrada 1
function comprar_general(item) {
  const agregar_general = entrada_general;
  comprar_entrada(agregar_general);

}
function comprar_entrada(item) {
  if (item instanceof Entrada) {
    carritoCompras.push(item);
    dinero.push(item.precio);
    sumatotal += item.precio;
    console.log("  $" + item.precio);
  }
}
function vender_1() {
  const item_a_vender1 = entrada_general;
  quitar_g(item_a_vender1);

  function quitar_g(entrada) {
    let item_a_vender1_encontrado = carritoCompras.find((entrada)=> {entrada.nombre == entrada_general})

    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i] == entrada) {
        item_a_vender1_encontrado = true;

        carritoCompras.splice(i, 1);
        carritoCompras.splice(entrada_general.precio  = (sumatotal -= entrada_general.precio))
        console.log("-1 " + entrada_general.nombre + "!");
        break;
      }

    }
  }
}
//entrada 2
//const sumavip = document.getElementById("compravip");
//sumavip.addEventListener("click", compar)
let sumavip =document.querySelector ("agregarVip");
sumavip.addEventListener('click',()=>{
  const agregar_vip = entrada_vip;
  comprar_entrada_vip(agregar_vip)
})

//function comprar_vip(item) {
  //const agregar_vip = entrada_vip;
  //comprar_entrada_vip(agregar_vip)

//}
function comprar_entrada_vip(item) {
  if (item instanceof Entrada) {
    carritoCompras.push(item);
    dinero.push(item.precio);
    sumatotal += item.precio;
    console.log("  $" + item.precio);
  }
}
function vender_2() {
  const item_a_vender2 = entrada_vip;
  quitar_g(item_a_vender2);

  function quitar_g(entrada) {
    let item_a_vender2_encontrado = carritoCompras.find((entrada)=> {entrada.nombre == entrada_vip})
    
    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i] == entrada) {
        item_a_vender2_encontrado = true;

        carritoCompras.splice(i, 1);
        carritoCompras.splice(entrada_vip.precio = sumatotal -= entrada_vip.precio)
        console.log("-1 " + entrada_vip.nombre + "!");
        break;
      }

    }
  }
}
//entrada 3
function comprar_cons(item) {
  const agregar_cons = entrada_consumision;
  comprar_entradacons(agregar_cons)

}
function comprar_entradacons(item) {
  if (item instanceof Entrada) {
    carritoCompras.push(item);
    dinero.push(item.precio);
    sumatotal += item.precio;
    console.log("  $" + item.precio);
  }
}
function vender_3() {
  const item_a_vender3 = entrada_consumision;
  quitar_g(item_a_vender3);

  function quitar_g(entrada) {
    let item_a_vender3_encontrado = carritoCompras.find((entrada)=> {entrada.nombre == entrada_consumision})

    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i] == entrada) {
        item_a_vender3_encontrado = true;

        carritoCompras.splice(i, 1);
        carritoCompras.splice(entrada_consumision.precio = sumatotal -= entrada_consumision.precio)
        console.log("-1 " + entrada_consumision.nombre + "!");
        break;
      }

    }
  }
}
//carrito
function mostrar_carrito() {
  console.log("Tu carrito:");
 // for (let i = 0; i < carritoCompras.length; i++) {
  //  console.log(carritoCompras[i].nombre + " - $" + carritoCompras[i].precio);
  //}
  carritoCompras.forEach((entrada)=>{
    console.log(entrada.nombre +" $ "+ entrada.precio)
  })
  console.log("Total: $" + sumatotal);

  let montoAPagar = prompt("Ingrese el monto a pagar:");
  if (parseFloat(montoAPagar) === sumatotal) {
    alert("Compra realizada");
  } else {
    alert("Monto incorrecto. La compra no se realizó.");
  }
}

