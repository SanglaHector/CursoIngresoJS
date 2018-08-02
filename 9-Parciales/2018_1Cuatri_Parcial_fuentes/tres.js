function mostrar()
{
    var precio = prompt("¿Cual es el precio original?");
    var descuento = prompt("Indique el descuento.");
    var precioFinal ; 

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precioFinal = precio - ( precio* (descuento / 100));
    alert("Su precio final es de " + precioFinal + "$:");

}
