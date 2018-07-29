/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{   
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto ;
    var legajo ;
    var nacionalidad;
    
    edad = prompt("Ingrese su edad.")
    edad = parseInt(edad);
    
    while(edad < 18 || edad > 90 ) {
        edad = prompt( "Su edad debe ser de entre 18 y 90 años inclusive");
        edad = parseInt(edad);
    }
    document.getElementById("Edad").value = edad; 

    sexo = prompt("Ingrese f para femenino o m para masculino");
    while ( sexo != "f" && sexo != "m" ){
        sexo = prompt("Ingrese f para femenino o m para masculino.")
    }
            if ( sexo == "f"){
                document.getElementById("Sexo").value =  "Femenino";
            } else {
                document.getElementById("Sexo").value = "Masculino";
            }

    estadoCivil = prompt("Elija 1 para soltero, 2 para casado, 3 para divorciado o 4 para viudo.")
    while ( estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4"){
        estadoCivil = prompt("Por favor ingrese una opcion correcta. 1 para soltero , 2 para casado, 3 para divorciado o 4 para viudo");
    }
        switch ( estadoCivil){
            case "1":
                document.getElementById("EstadoCivil").value = "Soltero";
                break;
            case "2":
                document.getElementById("EstadoCivil").value = "Casado";
                break;
            case "3":
                document.getElementById("EstadoCivil").value = "Divorciado";
                break;
            case "4":
                document.getElementById("EstadoCivil").value = "Viudo";
                break;
        }
                
    sueldoBruto = prompt("Ingrese su sueldo bruto");
    sueldoBruto = parseInt(sueldoBruto);

    while ( sueldoBruto < 8000){
        sueldoBruto = prompt("Su sueldo no alcanza los 8mil pesos, por favor ingrese un sueldo valido, mayor  igual a 8000$.");
        sueldoBruto = parseInt(sueldoBruto);
    }
    document.getElementById("Sueldo").value = sueldoBruto + "$";

    legajo = prompt("Ingrese su numero de legajo de 4 cifras y sin ceros a la izquierda");
    legajo = parseInt(legajo);
    while ( legajo < 1000 || legajo > 9999){
        legajo = prompt("Ingrese un numero de 4 cifras valido.");
        legajo = parseInt (legajo);
    }
    document.getElementById("Legajo").value = legajo;   

    nacionalidad = prompt (" Ingrese A si usted es Argentino, ingrese E si usted es extrangejo y ingrese N si usted es nacionalizado.");
    while ( nacionalidad != " A" && nacionalidad != "E" && nacionalidad != "N"){
    nacionalidad = prompt( "Ingrese una letra correcta. A para Argentino, E para extrangero o N para nacionalizado.");
}
    switch ( nacionalidad ){
        case "A":
            document.getElementById("Nacionalidad").value = "Argentino";
            break;
        case "E":
            document.getElementById("Nacionalidad").value = "Extrangero";
            break;
        case "N":
            document.getElementById("Nacionalidad").value = "Nacionalizado";
            break;
    }

        }
