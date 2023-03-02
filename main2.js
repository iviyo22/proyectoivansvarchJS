const saludar = function () {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let email = prompt("Ingrese su email");
  let edad = parseInt(prompt("Ingrese su edad:"));

  const validacion = function (n1) {
    if (n1 >= 18) {
      return "Puedes comprar";
    } else if (n1 < 18) {
      return "No puedes comprar, no eres mayor de edad";
    } else {
      return "Error al validar edad";
    }
  };

  let codigoValidacion = parseInt(prompt("Ingrese codigo de validacion, el cual recibio en su email"));
  const codigoAutorizado = 4545;
  for (let v = 0; v < 3; v++) {
    if (codigoValidacion == codigoAutorizado) {
      console.log("codigo correcto puede realizar su cotizacion")
      break
    }
    else {
      codigoValidacion = parseInt(prompt("Codigo incorrecto"))
    }
  }
  alert(`¡Bienvenido/a ${nombre} ${apellido}! ${validacion(edad)}`);
}
function calcularCostoEnvio(valorCompra, codigoPostal) {
  let tarifaEnvio;

  // Determinar la tarifa de envío según la distancia
  if (valorCompra <= 10) {
    tarifaEnvio = 5;
  } else if (valorCompra <= 20) {
    tarifaEnvio = 10;
  } else {
    tarifaEnvio = 15;
  }
    let costoEnvio;
    if (codigoPostal <= 1500) {
      costoEnvio = 5;
    } else if (codigoPostal <= 1220) {
      costoEnvio= 10;
    } else {
      costoEnvio= 15;

    }
      let costoTotalEnvio = ((costoEnvio + tarifaEnvio) * 100) / 10;

      return costoTotalEnvio;
    

  
  }

function provinciaS() {
  let valorCompra, codigoPostal, costoTotalEnvio;

  const opcion = prompt('Elige una opción:\n1. Mendoza\n2. Cordoba\n3. AMBA');

  switch (opcion) {
    case '1':
      valorCompra = parseFloat(prompt('Ingrese el monto de la compra:'));
      codigoPostal = parseFloat(prompt('Ingrese codigo postal:'));
      costoTotalEnvio = calcularCostoEnvio(valorCompra, codigoPostal);

      alert(`El costo de envío para sus productos por un monto de: $ ${valorCompra}  a ${codigoPostal} km de distancia es de ${costoTotalEnvio} pesos.`);
      break;

    case '2':
      valorCompra = parseFloat(prompt('Ingrese el monto de la compra:'));
      codigoPostal = parseFloat(prompt('Ingrese codigo postal:'));
      costoTotalEnvio = calcularCostoEnvio(valorCompra, codigoPostal);

      alert(`El costo de envío para sus productos por un monto de: $ ${valorCompra}  a ${codigoPostal} km de distancia es de ${costoTotalEnvio} pesos.`);
      break;

    case '3':
      valorCompra = parseFloat(prompt('Ingrese el monto de la compra:'));
      codigoPostal = parseFloat(prompt('Ingrese codigo postal:'));
      costoTotalEnvio = calcularCostoEnvio(valorCompra, codigoPostal);

      alert(`El costo de envío para sus productos por un monto de: $ ${valorCompra}  a ${codigoPostal} km de distancia es de ${costoTotalEnvio} pesos.`);
      break;


    default:
      alert('Opción no válida');
  }
}

saludar();
provinciaS();