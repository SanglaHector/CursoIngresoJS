
function mostrar()
{
	var ancho = prompt("Ingrese el ancho de la cancha");
	var largo = prompt("Ingrese el largo de lq cancha");
	var perimetro;
	var pintura = 3
	var cantPintura;


	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2*largo + 2*ancho ;
	cantPintura = perimetro / pintura;


	alert("Se necesitan " + cantPintura + " litros de pintura para pintar todo el perimetro");
}
