/**
 * Ejercicio 7:
Crear una fuction que calcule la edad de una persona en base a su año de nacimiento y fecha actual
podrá hacer uso de métodos JavaScript (DATE,getDate,getFullYear)para realizar el cálculo.
 */
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

console.log("La edad es: " + calcularEdad("09-01-2001") + " años");