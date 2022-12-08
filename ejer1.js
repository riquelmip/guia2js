/*
Ejercicio 1:
Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de
edad o no. Utilizar para la condición el operador ternario 
*/

function calcularEdad(edad){
    if(parseInt(edad) >= 18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad");
    }
}

calcularEdad(18);