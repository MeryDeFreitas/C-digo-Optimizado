// Obtener el DOM

const lineaCompra = document.getElementById('Compra')


// Obtener Total Venta del Carrito usando Local Storage 

let array = localStorage.getItem('myArray');
carritoSuma = JSON.parse(array);


/*Mostrar datos almacenados*/    

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    console.log(sum)
    lineaCompra.innerHTML = ("Total a pagar por su compra es de $" + sum )
}

ventaTotal();
