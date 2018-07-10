function mostrar()
{
    var precio;
    
    var porcentaje;
    
    var descuento;

    var precioConDescuento;

    var iva;

    var precioConDescuentoMasIva;

    precio = prompt("Ingrese el precio");

    porcentaje = prompt("Ingrese el porcentaje");

    precio = parseInt(precio);

    porcentaje = parseInt(porcentaje);
    
    descuento = precio * (porcentaje / 100);

    precioConDescuento = precio - descuento;

    iva = 21;

    precioConDescuentoMasIva = precioConDescuento +  ( precio * (iva / 100));

    alert( "Su descuento es de " + descuento + ", el precio con descuento es de " + precioConDescuento + " y el IVA es igual a " + iva);

    alert( "El precio final es de " + precioConDescuentoMasIva );

}
