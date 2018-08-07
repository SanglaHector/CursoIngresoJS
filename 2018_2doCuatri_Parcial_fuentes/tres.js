function mostrar()
{
	var producto = prompt("Ingrese el importe del producto");
	var cantidad = prompt("Ingrese la cantidad");
	var nombre = prompt("Ingrese el nombre");
	var iva = 21
	var precioFinal

	cantidad = parseInt(cantidad);
	producto = parseInt(producto);

	precioFinal = (producto * cantidad ) + ( (producto * cantidad) * iva/100 )


	alert("Compro la cantidad " + cantidad + " del producto " + nombre + " a un precio de " + producto + ", pagando el precio de " + precioFinal + " con iva incluido." );
}
