/**
 * Ejercicio 5:
Crear una function que tenga 2 parámetros y asignarle números enteros para calcular cual número es
el mayor.
 */

function mayor(num1, num2){
    numero1 = parseInt(num1);
    numero2 = parseInt(num2);
    if(numero1 > numero2){
        console.log("El numero mayor es: " + numero1);
    }else if(numero2 > numero1){
        console.log("El numero mayor es: " + numero2);
    }else if(numero1 == numero2){
        console.log("Los numeros son iguales");
    }
}

mayor(8,11);