function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock||0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let productoA = new Producto("Hamburguesas", 180, 64)
let productoB = new Producto("Panchos", 120, 79)
let productoC = new Producto("Gaseosas", 150, 42)

let listaProductos = [productoA, productoB, productoC];

let listaProdStock = listaProductos.filter((prod) => prod.stock > 0);

let listaNombres = listaProdStock.map((prod) => prod.nombre);

localStorage.setItem("Hamburguesas", 64)
localStorage.setItem("Panchos", 79)
localStorage.setItem("Gaseosas", 42)

const suma = (a,b) => a + b;
const iva = x => x * 0.21;

let stockHamburguesas = document.getElementById("stockHamburguesas")
stockHamburguesas.innerHTML = "Stock Disponible: " + localStorage.getItem(productoA.nombre);

let stockPanchos = document.getElementById("stockPanchos")
stockPanchos.innerHTML = "Stock Disponible: " + localStorage.getItem(productoB.nombre);

let stockGaseosas = document.getElementById("stockGaseosas")
stockGaseosas.innerHTML = "Stock Disponible: " + localStorage.getItem(productoC.nombre)

// let productoCompra = prompt("Escriba que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosas $150 c/u \n4 - FIN");
// let precioSubtotal = 0;

// while(productoCompra.toLowerCase() != "fin"){

//     if(productoCompra.toLowerCase() == 'hamburguesas'){
//         let cantidadProductoHamburguesas = prompt("Ingrese que cantidad de " + productoA.nombre + " desea comprar por favor.")

//         if(cantidadProductoHamburguesas <= productoA.stock && cantidadProductoHamburguesas >= 0){
//             precioSubtotal = precioSubtotal + (cantidadProductoHamburguesas * productoA.precio)
//             alert("Seria un total de " + precioSubtotal + " pesos.")
//         }
//         else{
//             alert("Disculpe, pero actualmente tenemos " + productoA.stock + " unidades de este producto.")
//         }
//     }
//     else if(productoCompra.toLowerCase() == 'panchos'){
//         let cantidadProductoPanchos = prompt("Ingrese que cantidad de " + productoB.nombre + " desea comprar por favor.")

//         if(cantidadProductoPanchos <= productoB.stock && cantidadProductoPanchos >= 0){
//             precioSubtotal = precioSubtotal + (cantidadProductoPanchos * productoB.precio)
//             alert("Seria un total de " + precioSubtotal + " pesos.")
//         }
//         else{
//             alert("Disculpe, pero actualmente tenemos " + stockProductoB + " unidades de este producto.")
//         }
//     }
//     else if(productoCompra.toLowerCase() == 'gaseosas'){
//         let cantidadProductoGaseosas = prompt("Ingrese que cantidad de " + productoC.nombre + " desea comprar por favor.")

//         if(cantidadProductoGaseosas <= productoC.stock && cantidadProductoGaseosas >= 0){
//             precioSubtotal = precioSubtotal + (cantidadProductoGaseosas * productoC.precio)
//         alert("Seria un total de " + precioSubtotal + " pesos.")
//         }
//         else{
//             alert("Disculpe, pero actualmente tenemos " + productoC.stock + " unidades de este producto.")
//         }
//     }
//     else{
//         alert("Disculpe, pero no tenemos ese producto a la venta.")
//     }

//     productoCompra = prompt("Escriba que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosas $150 c/u \n4 - FIN");
// }
//Todavia tengo que aprender a como declarar bien el iva, aunque sea funcional no se hacerlo por mi propia cuenta :(

// if(precioSubtotal != 0){
//     let precioTotal = suma(precioSubtotal, iva(precioSubtotal))
//     alert("Este seria el total de su compra: " + precioTotal)
// }
