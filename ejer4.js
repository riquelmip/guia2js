/**
Ejercicio 4:
Calcular el aumento de trabajador tomando en cuenta la
tabla de categorías de aumento. Para este ejercicio
deberá de asignar las siguientes variables: Nombre,
Salario, categoría y aumento. Deberá demostrar en
consola los datos del empleado y el aumento salarial.
 */

let arreglo_personas = [
    {
        "nombre": "Maria Chavez",
        "salario":500,
        "categoria":"A"
    },
    {
        "nombre": "Juan Chavez",
        "salario":650,
        "categoria":"A"
    },
    {
        "nombre": "Sandra Chavez",
        "salario":725,
        "categoria":"B"
    },
    {
        "nombre": "Waldo Chavez",
        "salario":800,
        "categoria":"B"
    },
]

arreglo_personas.forEach(item_empleado => {
    if(item_empleado.categoria == "A"){
        salario_total = (item_empleado.salario * 0.15) + item_empleado.salario;

        console.log(
            "Nombre: " + item_empleado.nombre + "\n" +
            "Salario total: " + salario_total + "\n" +
            "Categoria: " + item_empleado.categoria
        );
    }else if(item_empleado.categoria == "B"){
        salario_total = (item_empleado.salario * 0.30) + item_empleado.salario;

        console.log(
            "Nombre: " + item_empleado.nombre + "\n" +
            "Salario total: " + salario_total + "\n" +
            "Categoria: " + item_empleado.categoria
        );
    }else if(item_empleado.categoria == "C"){
        salario_total = (item_empleado.salario * 0.10) + item_empleado.salario;

        console.log(
            "Nombre: " + item_empleado.nombre + "\n" +
            "Salario total: " + salario_total + "\n" +
            "Categoria: " + item_empleado.categoria
        );
    }else if(item_empleado.categoria == "D"){
        salario_total = (item_empleado.salario * 0.20) + item_empleado.salario;

        console.log(
            "Nombre: " + item_empleado.nombre + "\n" +
            "Salario total: " + salario_total + "\n" +
            "Categoria: " + item_empleado.categoria
        );
    }
})