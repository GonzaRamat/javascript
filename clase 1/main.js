//Entrada de Datos
let nombreCliente = prompt ("Ingrese su nombre y apellido: (ESC para salir)")

while (nombreCliente != "ESC") {

let textoTipoCliente = "Ingrese su paquete de servicios: \n\n";
textoTipoCliente += "1-HSBC Black \n";
textoTipoCliente += "2-HSBC Gold\n";
textoTipoCliente += "3-HSBC Silver \n";
textoTipoCliente += "4-HSBC Bronce \n";
let tipoCliente = parseInt ( prompt (textoTipoCliente));
let monto = parseInt(prompt("Ingrese el monto a solicitar : ($100000 - 1000000"));
let textoPlazo = "Ingrese el plazo \n\n";
textoPlazo += "1- 12 cuotas \n";
textoPlazo += "2- 24 cuotas\n";
textoPlazo += "3- 36 cuotas \n";
let plazo = parseInt (prompt(textoPlazo));

//Chequeo de como llegan los datos
console.log ("Cliente " + nombreCliente);
console.log ("Tipo de Cliente " + tipoCliente);
console.log ("Monto solicitado $" + monto);
console.log ("Plazo: " + plazo);

//Procesamiento de datos
let cuotaPura = CalcularCuotaPura (monto,plazo);
console.log (cuotaPura);
let cuotaTNA = calcularCuotaTNA (tipoCliente,cuotaPura);
let cuotaTEA = calcularCuotaTEA (tipoCliente,cuotaPura);
console.log ("Valor TNA: " + cuotaTNA);
console.log ("Valor TEA: " + cuotaTEA);
let cuotaPagar = cuotaTNA + cuotaTEA;
console.log ("Cuota a pagar: $" + cuotaPagar);

//Salida de Datos
informarPrestamo (nombreCliente, monto, plazo, cuotaPagar);

nombreCliente = prompt ("Ingrese otro nombre y apellido: (ESC para salir)")

}

function CalcularCuotaPura (monto,plazo) {
return monto/plazo;
    
}

function calcularCuotaTNA (tipoCliente, cuotaPura) {
let TNA;
if (tipoCliente == 1) {
    TNA = 65 / 12;
} 
else if (tipoCliente == 2) {
    TNA = 70 / 12;
    }
else if (tipoCliente == 3) {
    TNA = 85 / 12;
        }
 else {
    TNA = 102 / 12;
            }
return (cuotaPura * TNA) /100 ;
}

function calcularCuotaTEA (tipoCliente, cuotaPura) {
    let TEA;
    
if (tipoCliente == 1) {
    TEA = 88.37 / 12
} 
else if (tipoCliente == 2) {
    TEA = 97.51 / 12
    }
else if (tipoCliente == 3) {
    TEA = 127.42 / 12
        }
else {
    TEA = 166.31 / 12
            }
return (cuotaPura + TEA) /100;

    }

function informarPrestamo (nombreCliente, monto, plazo, cuotaPagar) {

    let textoPlazo;

    if (plazo == 1) {textoPlazo = "12";

    } else if (plazo ==2) {textoPlazo = "24";

    } else if (plazo ==3) {textoPlazo = "36";

    }

    alert ("Cliente: " + nombreCliente + "\n" + "Monto: " + monto + "\nPlazo: " + plazo + " meses\nCuota a pagar: "+ cuotaPagar.toFixed (2) + "pesos")
}



 
 