function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while ( contador < 5 ){
		numero = prompt("ingrese otro numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador ++
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5
//puedo poner contador en vez de 5 para poder cambiar el ejercicio con mas facilidad en otro momento;

}//FIN DE LA FUNCIÓN