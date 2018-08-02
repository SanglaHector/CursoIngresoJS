
function mostrar()
{
     var ancho = prompt("Ingrese el ancho del rectangulo.");
     var alto = prompt("Ingrese el alto del rectangulo");
     var perimetro;

     ancho = parseInt(ancho);
     alto = parseInt(alto);

     perimetro = 2* ancho + 2* alto;
     alert("El perimetro de su rectangulo es de " + perimetro + ".");


}
