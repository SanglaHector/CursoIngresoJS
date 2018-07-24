function mostrar()
{

	var bandera = true;
	var numero ;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no'){

		numero = prompt ("ingrese un numero");
		numero = parseInt(numero);

		if(bandera ){
			bandera = false;
			maximo = numero;
			minimo = numero;
		}
		if (numero > maximo){
			maximo = numero;
		}
		if ( numero < minimo){
			minimo = numero;
		}
		respuesta = prompt("¿quiere agregar otro numero?")}
		alert(" el numero maximo que ingresò fue " + maximo + " y el numero minimo que ingresò fuè " + minimo + ":");




}//FIN DE LA FUNCIÓN