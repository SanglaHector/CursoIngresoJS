function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if ( edad >17){
    alert("Usted es adulto")
} 
else {
    if( edad < 13){
        alert( "usted es niño")
    }
    else{
        alert ( "usted es adolecente");

    }
    }




}//FIN DE LA FUNCIÓN