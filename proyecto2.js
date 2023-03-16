class Provincias {
    constructor(provincia, distancia, precio){
    this.provincia = provincia;
    this.distancia = distancia;
    this.precio = precio;

}
}

const mendoza = new Provincias("Mendoza",600,200)
const cordoba = new Provincias("Cordoba",600,300)
const neuquen = new Provincias("Neuquen",1000,600)

const arrayProvincias = [mendoza, cordoba, neuquen];


   
    function saludar() {
        alert("Bienvenido a Distribuidora La ibero")
        let nombre = prompt("ingrese su nombre para seguir")
        while(nombre === ""){
            nombre = prompt("ingrese su nombre para seguir")
        }
    
        let apellido = prompt("ingrese su apellido para seguir")
        while(apellido === ""){
            apellido = prompt("ingrese su apellido para seguir")
        }
    
    let edad = parseInt(prompt("Ingrese su Edad"))
        while (edad === "" || edad< 18){
            edad = prompt("ingrese su edad para seguir")
        
        }
        
        let email= parseInt(prompt("Ingrese su Email"))
        while(email === ""){
            email = prompt("ingrese su mail para seguir")
        }
    
    
        alert(`Bienvenidx   ${nombre} + ${apellido} `);
    
}

  

const contenedorProductos = document.getElementById("contenedorProductos");
arrayProvincias.forEach( producto => {
    const div = document.createElement("div");
    div.innerHTML = `<p> Nombre: ${producto.provincia}</p>
                    <p> Precio: ${producto.precio}</p>
                    <button>Agregar al carrito</button>`
    contenedorProductos.appendChild(div);
})




function mostrarProvincias(){
  let provSeleccionada= parseInt(prompt("En que provincia realizaremos el envio ?\n1)Mendoza\n2)Nequen\n3)Cordoba"))

   while(provSeleccionada < 1 || provSeleccionada > 3){
       provSeleccionada = parseInt(prompt("En que provincia realizaremos el envio ?\n1)Mendoza\n2)Nequen\n3)Cordoba"))
  
}
mostrarDetalles(provSeleccionada);
}

function mostrarDetalles(provSeleccionada){
    if(provSeleccionada === 1){
        console.log(`Usted selecciono : ${mendoza.provincia}`);
        console.log("Debe abonar: $  "  +mendoza.precio); 

    }
    else if(provSeleccionada=== 2){
        console.log(`Usted selecciono : ${cordoba.provincia}`);
        console.log("Debe abonar: $  "  +cordoba.precio); 
}
else if(provSeleccionada=== 3){
    console.log(`Usted selecciono : ${cordoba.provincia}`);
    console.log("Debe abonar: $  "  +cordoba.precio); 
}
}
  
    
const agregarProvinciaSiNoExiste = (provincia) => {
    const existe = arrayProvincias.some(p => p.provincia === provincia);
    if (!existe) {
      const nuevaProvincia = new Provincias(provincia, 0, 0);
      arrayProvincias.push(nuevaProvincia);
         
    const valores = arrayProvincias.map(p => `${p.provincia} (${p.precio}, ${p.distancia})`).join(', ');
    console.log(`Valores actuales: ${valores}`);
      alert("En 48 hs nos contactaremos para enviarle los valores a su localidad, Muchas gracias")
      alert("si su ciudad ya se encontraba, desestime este mensaje")
    }
  }



  

saludar();
mostrarProvincias();
const nombreProvincia = prompt("Ingrese el nombre de la provincia a agregar en caso que no vea la suya:");
agregarProvinciaSiNoExiste(nombreProvincia);


