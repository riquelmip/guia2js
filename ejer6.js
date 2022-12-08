/**
 * Ejercicio 6:
Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es
un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD
FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de
usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche
seleccionado.

 */

function coche(tipocoche){
    if(tipocoche == "FORD FIESTA"){
        console.log("El coche seleccionado es un FORD FIESTA, por lo tanto se le aplicara un descuento del 5% en la compra");
    }else if(tipocoche == "FORD FOCUS"){
        console.log("El coche seleccionado es un FORD FOCUS, por lo tanto se le aplicara un descuento del 10% en la compra");
    }else if(tipocoche == "FORD ESCAPE"){
        console.log("El coche seleccionado es un FORD ESCAPE, por lo tanto se le aplicara un descuento del 20% en la compra");
    }else{
        console.log("El coche seleccionado no aparece en la lista de coches validos");
    }
}

coche("FORD ESCAPE");