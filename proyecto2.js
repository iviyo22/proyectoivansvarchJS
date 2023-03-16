class Provincias {
    constructor(provincia, distancia, precio){
    this.provincia = provincia;
    this.distancia = distancia;
    this.precio = precio;
    this.precioConIva;
    this.aplicarIva = function () {
        this.precioConIva = this.precio * 1.21
    }
}
}

const prov1 = new Producto("Mendoza",600)
const prov2 = new Producto("Cordoba",600)
const prov3 = new Producto("Neuquen",1000)

const arrayProvincias = [Mendoza, Neuquen, Cordoba];


function saludar() {
    alert("Bienvenido a Distribuidora La ibero")
    let nombre = prompt("ingrese su nombre para seguir")
    while(nombre === ""){
        nombre = prompt("ingrese su nombre para seguir")
    }

let edad = parseInt(prompt("Ingrese su Edad"))
    while(edad === ""){
        edad = prompt("ingrese su nombre para seguir")
    }
    
}
const mostrarDetalles = (provSeleccionada) => {
    arrayProvincias.forEach(producto => {
      if (provSeleccionada === 1) {
     
      }
    });
  };

  function cobrarAlCliente(producto){
    let montoCliente = parseInt(prompt("Ingrese Monto"));
    let precioConIva = producto.precio * 1.21;
  
    
    if (montoCliente >= precioConIva) {
        alert("Gracias por su compra!");
        alert("Su vuelto es" + suVuelto);
    } else {
        alert("Lo siento, no le alcanza para comprar este producto.");
    }
}
  



function mostrarProvincias(){
    let provSeleccionada= parseInt(prompt("En que provincia realizaremos el envio ?\n1)Mendoza\n2)Nequen\n3)Cordoba"))

    while(provSeleccionada < 1 || provSeleccionada > 3){
        provSeleccionada = parseInt(prompt("En que provincia realizaremos el envio ?\n1)Mendoza\n2)Nequen\n3)Cordoba"))
    mostrarDetalles(provSeleccionada)
}
}
