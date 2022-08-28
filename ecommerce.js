// Un carrito de productos que suma y hace subtotales para pagar es JS

// Productos a la venta

const funkoQuigon = {
    nombre:"Quigon", 
    precio: 20,
}

const funkoLuke = {
    nombre:"Luke", 
    precio: 50,
}

const funkoAhsoka = {
    nombre:"Ahsoka", 
    precio: 30,
}

const funkoSidious = {
    nombre:"Sidious", 
    precio: 20,
}

const funkoVader = {
    nombre:"Vader", 
    precio: 50,
}

const funkoMaul = {
    nombre:"Maul", 
    precio: 30,
}

// Tomo mis elementos del DOM para poder mostrar en la web

let Quigon = document.getElementById('funkoQuin')
let Luke = document.getElementById('funkoLuke')
let Ahsoka = document.getElementById('funkoAhsoka')

let carritoQuigon = document.getElementById('carritoQuigon')
let carritoLuke = document.getElementById('carritoLuke')
let carritoAhsoka = document.getElementById('carritoAhsoka')

let Sidious = document.getElementById('funkoSidious')
let Vader = document.getElementById('funkoVader')
let Maul = document.getElementById('funkoMaul')

let carritoSidious = document.getElementById('carritoSidious')
let carritoVader = document.getElementById('carritoVader')
let carritoMaul = document.getElementById('carritoMaul')

let carritoFinal = document.getElementById('carritoFinal')
let mostrarTotal = document.getElementById('mostrarTotal')
let mostrarTotal2 = document.getElementById('mostrarTotal2')

// Declaro variables globales que se usarán en las funciones

let vendido = false;

// Aqui armo el carrito segun lo que escoja el usuario

class carrito {
    constructor(nombre, precio, unidades) {
        this.nombre  = nombre;
        this.precio  = parseInt(precio);
        this.unidades = parseInt(unidades)
    }
}

// A donde voy a mandar los productos seleccionados por el usuario

let carritoSuma = [];

// Que hara js con cada click
// Cantidad a comprar lo toma de lo que seleccione el usuario en desplegable

Quigon.addEventListener('click',ventaQuigon)

function ventaQuigon(){
    vendido = true
    let nombre = funkoQuigon.nombre
    let precio = funkoQuigon.precio
    let desplegable = document.getElementById('cantidad1')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;

        const ventaQuigon = {
            nombre: nombre,
            precio: precio,
            unidades: cantidadSeleccionada,
        }

    let ventaFinalQuigon = (vendido == true) ? cantidadSeleccionada * funkoQuigon.precio : false 

    carritoSuma.push(new carrito(ventaQuigon.nombre, ventaQuigon.precio, ventaQuigon.unidades));

    carritoQuigon.innerHTML = ("Funko Quigon, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalQuigon)

    // Para sumar al carrito
    ventaTotal()
}

Luke.addEventListener('click',ventaLuke)

function ventaLuke(){
    vendido = true
    let nombre= funkoLuke.nombre
    let precio = funkoLuke.precio
    let desplegable = document.getElementById('cantidad2')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;

    let ventaFinalLuke = (vendido == true) ? cantidadSeleccionada * funkoLuke.precio : false 

        const ventaLuke = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaLuke.nombre, ventaLuke.precio, ventaLuke.unidades));

    carritoLuke.innerHTML = ("Funko Luke, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalLuke)
    
    // Para sumar al carrito
    ventaTotal()
}

Ahsoka.addEventListener('click', ventaAhsoka)

function ventaAhsoka(){
    vendido = true
    let nombre= funkoAhsoka.nombre
    let precio = funkoAhsoka.precio
    let desplegable = document.getElementById('cantidad3')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;

    let ventaFinalAhsoka = (vendido == true) ? cantidadSeleccionada * funkoAhsoka.precio : false 

        const ventaAhsoka = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaAhsoka.nombre, ventaAhsoka.precio, ventaAhsoka.unidades));

    carritoAhsoka.innerHTML = ("Funko Ahsoka, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalAhsoka)
    
    // Para sumar al carrito
    ventaTotal()
} 

Sidious.addEventListener('click',ventaSidious)

function ventaSidious(){
    vendido = true
    let nombre= funkoSidious.nombre
    let precio = funkoSidious.precio
    let desplegable = document.getElementById('cantidad4')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;

    let ventaFinalSidious = (vendido == true) ? cantidadSeleccionada * funkoSidious.precio : false 

        const ventaSidious = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaSidious.nombre, ventaSidious.precio, ventaSidious.unidades));

    carritoSidious.innerHTML = ("Funko Darth Sidious, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalSidious)

    // Para sumar al carrito
    ventaTotal()
}

Vader.addEventListener('click',ventaVader)

function ventaVader(){
    vendido = true
    let nombre= funkoVader.nombre
    let precio = funkoVader.precio
    let desplegable = document.getElementById('cantidad5')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockVader = funkoVader.stock - cantidadSeleccionada

    let ventaFinalVader = (vendido == true) ? cantidadSeleccionada * funkoVader.precio : false 

        const ventaVader = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaVader.nombre, ventaVader.precio, ventaVader.unidades));

    carritoVader.innerHTML = ("Funko Darth Vader, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalVader)
    
    // Para sumar al carrito
    ventaTotal()
}

Maul.addEventListener('click',ventaMaul)

function ventaMaul(){
    vendido = true
    let nombre= funkoMaul.nombre
    let precio = funkoMaul.precio
    let desplegable = document.getElementById('cantidad6')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;

    let ventaFinalMaul = (vendido == true) ? cantidadSeleccionada * funkoMaul.precio : false 

        const ventaMaul = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaMaul.nombre, ventaMaul.precio, ventaMaul.unidades));

    carritoMaul.innerHTML = ("Funko Darth Maul, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalMaul)

    // Para sumar al carrito
    ventaTotal()
}

// console.log(carritoSuma)

// Sumo y muestro lo que lleva el carrito agregado, subtotales y total a pagar

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    // console.log(sum);
    localStorage.setItem('myArray', JSON.stringify(carritoSuma));
    mostrarTotal.innerHTML = ("Total a pagar por su compra es de $" + sum )
    mostrarTotal2.innerHTML = ("Haga click aqui para continuar con el pago")
}

//filtro por precio

let Producto1 = document.getElementById('Producto1')
let Producto2 = document.getElementById('Producto2')
let Producto3 = document.getElementById('Producto3')
let Producto4 = document.getElementById('Producto4')
let Producto5 = document.getElementById('Producto5')
let Producto6 = document.getElementById('Producto6')

const rango = document.getElementById('Rango')

rango.onchange = () => {
    let precio = rango.value
    MostrarRango.innerHTML = rango.value
    console.log(precio)
    if (precio <=20) {
        Producto2.classList.add('FiltroDesaparecer')
        Producto3.classList.add('FiltroDesaparecer')
        Producto5.classList.add('FiltroDesaparecer')
        Producto6.classList.add('FiltroDesaparecer')
      } else if (precio > 20 && precio < 50){
        Producto2.classList.add('FiltroDesaparecer')
        Producto1.classList.add('FiltroDesaparecer')
        Producto5.classList.add('FiltroDesaparecer')
        Producto4.classList.add('FiltroDesaparecer')
      } else if(precio = 50){
        Producto1.classList.add('FiltroDesaparecer')
        Producto3.classList.add('FiltroDesaparecer')
        Producto4.classList.add('FiltroDesaparecer')
        Producto6.classList.add('FiltroDesaparecer')
      }
}

// Busqueda sencilla

let Introduccion = document.getElementById('Introduccion')
let Introduccion2 = document.getElementById('Introduccion2')
let Introduccion3 = document.getElementById('Introduccion3')
let Introduccion4 = document.getElementById('Introduccion4')
let Introduccion5 = document.getElementById('Introduccion5')
let FiltroPrecioTitulo = document.getElementById('FiltroPrecioTitulo')
let FiltroPrecio = document.getElementById('FiltroPrecio')
let CambioTitulo = document.getElementById('CambioTitulo')

const busqueda = document.getElementById("Busqueda")
busqueda.addEventListener('keypress', buscar)

function buscar(e){
    if(e.keyCode === 13){
        let buscar = document.getElementById('Busqueda').value;
        Introduccion.classList.add('FiltroDesaparecer')
        Introduccion2.classList.add('FiltroDesaparecer')
        Introduccion3.classList.add('FiltroDesaparecer')
        Introduccion4.classList.add('FiltroDesaparecer')
        Introduccion5.classList.add('FiltroDesaparecer')
        FiltroPrecioTitulo.classList.add('FiltroDesaparecer')
        FiltroPrecio.classList.add('FiltroDesaparecer')
        CambioTitulo.innerHTML = ("Aqui esta el producto que buscabas: ")
        if(buscar == "Quigon"){
            Producto2.classList.add('FiltroDesaparecer')
            Producto3.classList.add('FiltroDesaparecer')
            Producto4.classList.add('FiltroDesaparecer')
            Producto5.classList.add('FiltroDesaparecer')
            Producto6.classList.add('FiltroDesaparecer')
        } else if (buscar == "Luke"){
            Producto1.classList.add('FiltroDesaparecer')
            Producto3.classList.add('FiltroDesaparecer')
            Producto4.classList.add('FiltroDesaparecer')
            Producto5.classList.add('FiltroDesaparecer')
            Producto6.classList.add('FiltroDesaparecer')
        } else if(buscar == "Ahsoka"){
            Producto1.classList.add('FiltroDesaparecer')
            Producto2.classList.add('FiltroDesaparecer')
            Producto4.classList.add('FiltroDesaparecer')
            Producto5.classList.add('FiltroDesaparecer')
            Producto6.classList.add('FiltroDesaparecer')
        } else if (buscar == "Sidious"){
            Producto1.classList.add('FiltroDesaparecer')
            Producto2.classList.add('FiltroDesaparecer')
            Producto3.classList.add('FiltroDesaparecer')
            Producto5.classList.add('FiltroDesaparecer')
            Producto6.classList.add('FiltroDesaparecer')
        } else if (buscar == "Vader"){
            Producto1.classList.add('FiltroDesaparecer')
            Producto2.classList.add('FiltroDesaparecer')
            Producto3.classList.add('FiltroDesaparecer')
            Producto4.classList.add('FiltroDesaparecer')
            Producto6.classList.add('FiltroDesaparecer')
        }else if (buscar == "Maul"){
            Producto1.classList.add('FiltroDesaparecer')
            Producto2.classList.add('FiltroDesaparecer')
            Producto3.classList.add('FiltroDesaparecer')
            Producto4.classList.add('FiltroDesaparecer')
            Producto5.classList.add('FiltroDesaparecer')
        }else {
            alert ("Producto no disponible")
        }
    }
}
