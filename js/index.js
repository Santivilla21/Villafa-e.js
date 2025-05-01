class Entrada {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

//objeos/entradas
/* const entrada_general = new Entrada(1, "Entrada General", 8000, 200);
const entrada_vip = new Entrada(2, "Entrada Vip", 15000, 50);
const entrada_consumision = new Entrada(3, "Entrada con Consumicion", 12000, 100);
 */
const carritoCompras = [];

let dinero = [];
let sumatotal = 0;

//localstorage 
window.addEventListener("load", () => {
  const carritoGuardado = JSON.parse(localStorage.getItem("carritoCompras"));
  const dineroGuardado = JSON.parse(localStorage.getItem("dinero"));
  const sumatotalGuardado = localStorage.getItem("sumatotal");

  if (carritoGuardado) {
    carritoCompras.push(...carritoGuardado);
  }

  if (dineroGuardado) {
    dinero.push(...dineroGuardado);
  }

  if (sumatotalGuardado) {
    sumatotal = parseFloat(sumatotalGuardado);
  }


  actualizarContadores();
  mostrarTotal();
});


function actualizarContadores() {
  document.getElementById("contador1").innerHTML = carritoCompras.filter(item => item.nombre === "Entrada General").length;
  document.getElementById("contador2").innerHTML = carritoCompras.filter(item => item.nombre === "Entrada Vip").length;
  document.getElementById("contador3").innerHTML = carritoCompras.filter(item => item.nombre === "Entrada con Consumicion").length;
}


function mostrarTotal() {
  console.log("Total: $" + sumatotal);
}


function guardarEnLocalStorage() {
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  localStorage.setItem("dinero", JSON.stringify(dinero));
  localStorage.setItem("sumatotal", sumatotal.toString());
}

async function obtenerEntradaPorId(id) {
  try {
    const res = await fetch("entrada.json");
    if (!res.ok) throw new Error("Error al cargar JSON");
    const items = await res.json();
    const encontrado = items.find(item => item.id === id);
    if (!encontrado) throw new Error("No se encontró el item con id: " + id);
    return new Entrada(encontrado.id, encontrado.nombre, encontrado.precio, encontrado.stock);
  } catch (err) {
    console.error(err);
  }
}
//entrada 1----------------------------------------------------
let contadorA = 0

const agregar_general = document.getElementById("boton_mas_general");
agregar_general.addEventListener("click", async () => {
  const entrada = await obtenerEntradaPorId(1);

  if (entrada instanceof Entrada) {
    carritoCompras.push(entrada);
    dinero.push(entrada.precio);
    sumatotal += entrada.precio;
    console.log("  $" + entrada.precio);

    let contadorElemento = document.getElementById("contador1");
    let valorActual = parseInt(contadorElemento.innerHTML);
    contadorA = isNaN(valorActual) ? 0 : valorActual;
    contadorA++;
    contadorElemento.innerHTML = contadorA;

    guardarEnLocalStorage();
  }
});

const vender_general = document.getElementById("boton_menos_general");
vender_general.addEventListener("click", async () => {
  const entrada = await obtenerEntradaPorId(1);

  if (entrada instanceof Entrada) {
    const index = carritoCompras.findIndex(item => item.id === entrada.id);

    if (index !== -1) {
      sumatotal -= carritoCompras[index].precio;
      carritoCompras.splice(index, 1);
      dinero.splice(index, 1);

      console.log("-1 " + entrada.nombre + "!");

      let contadorElemento = document.getElementById("contador1");
      let valorActual = parseInt(contadorElemento.innerHTML);

      contadorA = isNaN(valorActual) ? 0 : valorActual;
      contadorA--;
      contadorElemento.innerHTML = contadorA;

      guardarEnLocalStorage();
    }
  }
});





//entrada 2------------------------------------------------------
let contadorB = 0

const agregar_vip = document.getElementById("boton_mas_vip");
agregar_vip.addEventListener("click",async () => {
  const entrada = await obtenerEntradaPorId(2)
  
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
  
  guardarEnLocalStorage();
  
})



const vender_vip = document.getElementById("boton_menos_vip");
vender_vip.addEventListener("click", async () => {
  const entrada = await obtenerEntradaPorId(2); // Entrada VIP

  if (entrada instanceof Entrada) {
    const index = carritoCompras.findIndex(item => item.id === entrada.id);

    if (index !== -1) {
      sumatotal -= carritoCompras[index].precio;
      carritoCompras.splice(index, 1);
      dinero.splice(index, 1); // opcional, si usás el array dinero

      console.log("-1 " + entrada.nombre + "!");

      let contadorElemento = document.getElementById("contador2");
      let valorActual = parseInt(contadorElemento.innerHTML);

      contadorB = isNaN(valorActual) ? 0 : valorActual;
      contadorB--;
      contadorElemento.innerHTML = contadorB;

      guardarEnLocalStorage();
    } 
  }
});

//entrada 3-------------------------------------------------------
let contadorC = 0
const agregar_cons = document.getElementById("boton_mas_cons")
agregar_cons.addEventListener("click",async () => {
  const entrada = await obtenerEntradaPorId(3)
  

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
    guardarEnLocalStorage();
    return;
  }


})


const vender_consumision = document.getElementById("boton_menos_cons");
vender_consumision.addEventListener("click", async () => {
  const entrada = await obtenerEntradaPorId(3); 

  if (entrada instanceof Entrada) {
    const index = carritoCompras.findIndex(item => item.id === entrada.id);

    if (index !== -1) {
      sumatotal -= carritoCompras[index].precio;
      carritoCompras.splice(index, 1);
      dinero.splice(index, 1); 

      console.log("-1 " + entrada.nombre + "!");

      let contadorElemento = document.getElementById("contador3");
      let valorActual = parseInt(contadorElemento.innerHTML);

      contadorC = isNaN(valorActual) ? 0 : valorActual;
      contadorC--;
      contadorElemento.innerHTML = contadorC;

      guardarEnLocalStorage();
    } 
  }
});
//carrito

const mostrar_carrito = document.getElementById("mostrar_carrito")
mostrar_carrito.addEventListener("click", () => {
  console.log("Tu carrito:");

  carritoCompras.forEach((entrada) => {
    console.log(entrada.nombre + " $ " + entrada.precio)
  })
  setTimeout(() => { document.getElementById('resumen_pago').textContent = ('Total a pagar $' + sumatotal) }, 4000)

  /* let montoAPagar = prompt("Ingrese el monto a pagar:");
  if (parseFloat(montoAPagar) === sumatotal) {
    alert("Compra realizada");
  } else {
    alert("Monto incorrecto. La compra no se realizó.");
  } */
}
)
document.getElementById("mostrar_carrito").addEventListener("click", function () {
  const card = document.getElementById("card");
  if (card.style.display === "none" || card.style.display === "") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});
