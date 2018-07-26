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
    var edad = prompt("ingrese su edad");
    var sexo = prompt("Ingrese m para masculino o f para femenino");
    var estadoCivil = prompt("ingrese el numero 1 para indicar que esta soltero, 2 para casado , 3 para divorciado o 4 para viudo");
    var SueldoBruto = prompt("Ingrese su sueldo bruto");
    var legajo = prompt("Ingrese su numero de legajo, numerorico de 4 cifras y sin ceros a la izquierda");
    var nacionalidad = prompt("Indique con una A si es argentino, E si es extranjero o N si es nacionalizado"); 
    
    edad = parseInt(edad);
    sueldoBruto = parseInt(sueldoBruto);

    while( edad ){
        if (edad >= 18 && edad <=90){
            document.getElementById("Edad").value = edad;
        }
        else {
            document.getElementById("Edad").value = "Usted no esta dentro de la franja de edad."
        }
    }
    
    
    while ( sexo ){
        if ( sexo == "f" || sexo == "m"){
            document.getElementById("Sexo").value = sexo
        }
        else {
            sexo = prompt("Por favor, ingrese una letra valida. f para femenino o m para masculino"); 
        }
    }
 

    while (estadoCivil){
        if( estadoCivil == "1" || estadoCivil == "2" || estadoCivil == "3" || estadoCivil == "4"){
            switch(estadoCivil){
                case "1":
                document.getElementById("EstadoCivil").value == "Soltero";
                case "2":
                document.getElementById("EstadoCivil").value = "Casado";
                case "3":
                document.getElementById("EstadoCivil").value = "Divorciado";
                case "4":
                document.getElementById("EstadoCivil").value = "Viudo";
                
            }
        }
    }
}
