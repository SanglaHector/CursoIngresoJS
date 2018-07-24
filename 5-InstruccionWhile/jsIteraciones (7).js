function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero ;

	while( respuesta != "no"){
		numero = prompt("ingrese un numero");
		numero = parseInt(numero)
		acumulador = acumulador + numero;
		contador ++;
		respuesta = prompt("¿quiere agregar otro numero?");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN