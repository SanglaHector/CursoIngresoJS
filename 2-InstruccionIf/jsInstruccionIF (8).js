function mostrar()
{
//tomo la edad  
    var edad;

    var estadoCivil;

    edad = document.getElementById("edad").value;

    estadoCivil = document.getElementById("estadoCivil").value;

    if ( edad < 18 && estadoCivil != "Soltero") {

    }
    else {
        if ( edad >= 18 && estadoCivil == "Soltero" ) {
        alert("Ustedes es mayor de edad y es soltero.")}

    }



	


}//FIN DE LA FUNCIÓN