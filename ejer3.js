/**
 * Ejercicio 3:
Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%,
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los
valores.
 */

//PRIMERA FORMA CON CLASE
class alumno{
    examen
    tareas
    asistencia
    investigacion
    #por_examen = 0.20
    #por_tareas = 0.40
    #por_asistencia = 0.10
    #por_investigacion = 0.30


    constructor(examen, tareas, asistencia, investigacion){
        this.examen = examen;
        this.tareas = tareas;
        this.asistencia = asistencia;
        this.investigacion = investigacion;
    }

    calcularNota(){
        let prom = (this.examen*this.#por_examen) + (this.tareas*this.#por_tareas) + (this.asistencia*this.#por_asistencia) + (this.investigacion*this.#por_investigacion);
        return prom;
    }
}

alumno = new alumno(8, 5, 9, 10);
console.log("La nota final es: " + alumno.calcularNota());


//SEGUNDA FORMA solo con funcion
function notafinal(examen, tareas, asistencia, investigacion){
    let prom = (examen*0.20) + (tareas*0.40) + (asistencia*0.10) + (investigacion*0.30);
    return prom;
}

console.log("La nota final es: " + notafinal(8, 5, 9, 10));