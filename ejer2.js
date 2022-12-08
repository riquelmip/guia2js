/* 
Ejercicio 2:
Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los
números.
*/

function suma(num1, num2){
    numero1 = parseInt(num1);
    numero2 = parseInt(num2);

    console.log("La suma de los numeros: " + numero1 + " + " + numero2 + " = " + (numero1+numero2));
}

suma(4,5);

function resta(num1, num2){
    numero1 = parseInt(num1);
    numero2 = parseInt(num2);

    console.log("La resta de los numeros: " + numero1 + " - " + numero2 + " = " + (numero1-numero2));
}

resta(7,5);

function multiplicacion(num1, num2){
    numero1 = parseInt(num1);
    numero2 = parseInt(num2);

    console.log("La multiplicacion de los numeros: " + numero1 + " x " + numero2 + " = " + (numero1*numero2));
}

multiplicacion(7,5);

function division(num1, num2){
    numero1 = parseInt(num1);
    numero2 = parseInt(num2);

    console.log("La division de los numeros: " + numero1 + " / " + numero2 + " = " + (numero1/numero2));
}

division(10,5);