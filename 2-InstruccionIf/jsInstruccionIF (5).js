function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if( edad<13 || edad >= 18 ){
    alert(" Usted no es adolecente.");
}

}//FIN DE LA FUNCIÓN