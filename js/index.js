class Entrada {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

//objeos/entradas
const entrada_general = new Entrada(1, "Entrada General", 8000, 200);
const entrada_vip = new Entrada(2, "Entrada Vip", 15000, 50);
const entrada_consumision = new Entrada(3, "Entrada con Consumicion", 12000, 100);

const carritoCompras = [];

let dinero = [];
let sumatotal = 0;


//entrada 1----------------------------------------------------

let contadorA = 0

const agregar_general = document.getElementById("boton_mas_general");
agregar_general.addEventListener("click", () => {
  const entrada = entrada_general;

  if (entrada instanceof Entrada) {//logica por consola
    carritoCompras.push(entrada);
    dinero.push(entrada.precio);
    sumatotal += entrada.precio;
    console.log("  $" + entrada.precio);

    //logica en el contador
    let contadorElemento = document.getElementById("contador1");
    let valorActual = parseInt(contadorElemento.innerHTML);
    contadorA = isNaN(valorActual) ? 0 : valorActual;
    contadorA++;
    contadorElemento.innerHTML = contadorA;

    return;
  }
});

const vender_1 = document.getElementById("boton_menos_general");
vender_1.addEventListener("click", () => {
  const entrada = entrada_general;

  let item_a_vender1_encontrado = carritoCompras.find((item) => item.nombre === entrada.nombre);

  if (item_a_vender1_encontrado) {
    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i].nombre === entrada.nombre) {

        sumatotal -= carritoCompras[i].precio;


        carritoCompras.splice(i, 1);

        console.log("-1 " + entrada.nombre + "!");


        let contadorElemento = document.getElementById("contador1");
        let valorActual = parseInt(contadorElemento.innerHTML);

        contadorA = isNaN(valorActual) ? 0 : valorActual;
        contadorA--;
        contadorElemento.innerHTML = contadorA;

        return;
      }
    }
  }
});





//entrada 2------------------------------------------------------
let contadorB = 0

const agregar_vip = document.getElementById("boton_mas_vip");
agregar_vip.addEventListener("click", () => {
  const entrada = entrada_vip

  if (entrada instanceof Entrada)
    carritoCompras.push(entrada);
  dinero.push(entrada.precio);
  sumatotal += entrada.precio;
  console.log("  $" + entrada.precio);
  let contadorElemento = document.getElementById("contador2");
  let valorActual = parseInt(contadorElemento.innerHTML);

  contadorB = isNaN(valorActual) ? 0 : valorActual;
  contadorB += 1;
  contadorElemento.innerHTML = contadorB;

  return;
})



const vender_2 = document.getElementById("boton_menos_vip");
vender_2.addEventListener("click", () => {
  const entrada = entrada_vip;

  let item_a_vender2_encontrado = carritoCompras.find((item) => item.nombre === entrada.nombre);

  if (item_a_vender2_encontrado) {
    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i].nombre === entrada.nombre) {

        sumatotal -= carritoCompras[i].precio;


        carritoCompras.splice(i, 1);

        console.log("-1 " + entrada.nombre + "!");


        let contadorElemento = document.getElementById("contador2");
        let valorActual = parseInt(contadorElemento.innerHTML);

        contadorB = isNaN(valorActual) ? 0 : valorActual;
        contadorB--;
        contadorElemento.innerHTML = contadorB;

        return;
      }
    }
  }
});

//entrada 3-------------------------------------------------------
let contadorC = 0
const agregar_cons = document.getElementById("boton_mas_cons")
agregar_cons.addEventListener("click", () => {
  const entrada = entrada_consumision


  if (entrada instanceof Entrada) {
    carritoCompras.push(entrada);
    dinero.push(entrada.precio);
    sumatotal += entrada.precio;
    console.log("  $" + entrada.precio);
    let contadorElemento = document.getElementById("contador3");
    let valorActual = parseInt(contadorElemento.innerHTML);

    contadorC = isNaN(valorActual) ? 0 : valorActual;
    contadorC += 1;
    contadorElemento.innerHTML = contadorC;

    return;
  }


})


const vender_3 = document.getElementById("boton_menos_cons");
vender_3.addEventListener("click", () => {
  const entrada = entrada_consumision;

  let item_a_vender3_encontrado = carritoCompras.find((item) => item.nombre === entrada.nombre);

  if (item_a_vender3_encontrado) {
    for (let i = 0; i < carritoCompras.length; i++) {
      if (carritoCompras[i].nombre === entrada.nombre) {

        sumatotal -= carritoCompras[i].precio;


        carritoCompras.splice(i, 1);

        console.log("-1 " + entrada.nombre + "!");


        let contadorElemento = document.getElementById("contador3");
        let valorActual = parseInt(contadorElemento.innerHTML);

        contadorC = isNaN(valorActual) ? 0 : valorActual;
        contadorC --;
        contadorElemento.innerHTML = contadorC;

        return;
      }
    }
  }
});
//carrito
function mostrar_carrito() {
  console.log("Tu carrito:");
  // for (let i = 0; i < carritoCompras.length; i++) {
  //  console.log(carritoCompras[i].nombre + " - $" + carritoCompras[i].precio);
  //}
  carritoCompras.forEach((entrada) => {
    console.log(entrada.nombre + " $ " + entrada.precio)
  })
  console.log("Total: $" + sumatotal);

  let montoAPagar = prompt("Ingrese el monto a pagar:");
  if (parseFloat(montoAPagar) === sumatotal) {
    alert("Compra realizada");
  } else {
    alert("Monto incorrecto. La compra no se realizó.");
  }
}

