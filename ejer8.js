/**
 * Ejercicio 8:
Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el
usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el
descuento será del 15%.
 */

function viajes(origen, destino){
    if(origen == "Ciudad de Palma" && destino == "La costa del Sol"){
        console.log("Tiene un descuento del 5%");
    }else if(destino == "Panchimalco"){
        console.log("Tiene un descuento del 10%");
    }else if(destino == "Puerto el Triunfo"){
        console.log("Tiene un descuento del 15%");
    }
}

viajes("Ciudad de Palma", "La costa del Sol");