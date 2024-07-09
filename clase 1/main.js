//Entrada de Datos
/*let nombreCliente = prompt ("Ingrese su nombre y apellido: (ESC para salir)")

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
   
    let textoPlazo 

    if (plazo == 1) {textoPlazo ="12";

    } else if (plazo ==2) {textoPlazo = "24";

    } else if (plazo ==3) {textoPlazo = "36";

    }

    alert ("Cliente: " + nombreCliente + "\n" + "Monto: " + monto + "\nPlazo: " + plazo + " meses\nCuota a pagar: "+ cuotaPagar.toFixed (2) + "pesos")
}*/


const bebidas =[
    {id:1, nombre:"Zapatillas", marca: "adidas", precio: 180000 },
    {id:2, nombre:"Zapatos", marca: "Lady Stork", precio: 165000 },
    {id:3, nombre:"Ojotas", marca: "Havaianas", precio: 150000 },
    {id:4, nombre:"Sandalias", marca: "Lady Stork", precio: 95000 },
    {id:5, nombre:"Botas", marca: "Gola", precio: 150000 },
    {id:6, nombre:"Borcegos", marca: "Grimoldi", precio: 100500 },
    
]
 //console.log(bebidas.[0]);

class productos{
    constructor(productos){
        this.lista = productos;
    }

    agregarProducto(nombreP, marcaP, precioP){
        const producto = {id: this.generarId(), nombre: nombreP, marca:marcaP, precio: precioP }
        this.lista.push (producto)
        console.log("Producto Agregado");
    }

    buscarProducto (id) {
        return this.lista.find (items => items.id == id);
    }
    
    obtenerProducto (){
        return this.lista;
    }

    totalProductos (){
        return this.lista.length;
    }

   
    generarId () {
        let max = 0;
        this.lista.forEach(item => {
            if(item.id > max){
                max = item.id;
            }
        return max + 1;

        });

    }

    eliminarProducto (id) {
        this.lista = this.lista.filter (items => items.id != id);
        console.log("Se elimino el producto " + id);
    }
}


const catalogo = new productos (bebidas);
console.log(catalogo.obtenerProducto());

let nombreProducto = prompt ("Ingrese el nombre de un nuevo Producto: ");
let marcaProducto = prompt ("Ingrese la marca del producto")
let precioProducto = parseFloat(prompt ("ingrese el precio del producto"));


catalogo.agregarProducto (nombreProducto, marcaProducto, precioProducto);
alert("Se agrego al catalogo el producto: " + nombreProducto + "Se agregó al catálogo la marca" + marcaProducto +  "\n Precio: $" + precioProducto);
console.log(catalogo.obtenerProducto());
console.log(catalogo.eliminarProducto(3));

console.log(catalogo.obtenerProducto());


alert("El total de tus productos en catalogo son: " + catalogo.totalProductos())