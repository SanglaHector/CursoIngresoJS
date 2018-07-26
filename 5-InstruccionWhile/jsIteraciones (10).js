function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero; 
	var positivo = 0;
	var negativo = 0;
	var contadorDeCeros = 0;
	var contadorDePositivos = 0;
	var contadorDeNegativos = 0;
	var diferencia;
	var promedioPositivo;
	var promedioNegativo;
	var numerosPares = 0;
	var msg
	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

	 
		while(isNaN(numero)){
			numero = prompt("ingrese un numero correcto");
			numero = parseInt(numero);
			
}
	if(numero < 0 ){
		contadorDeNegativos ++
		negativo = numero + negativo;

	}
	else if(numero > 0){
		contadorDePositivos ++ ;
		positivo = positivo + numero;
	}
	else if(numero == 0){
		contadorDeCeros ++ ;
	}
	if(numero % 2 == 0){


		numerosPares ++ ;
	}
	promedioNegativo = negativo / contadorDeNegativos;
	promedioPositivo = positivo / contadorDePositivos;
	 diferencia= contadorDePositivos - contadorDeNegativos;
	
	if ( diferencia > 0){
		msg = "hay mas numeros negativos por " + (diferencia *-1) + " de cantidad";
	}
	else if( diferencia < 0){
		msg = "hay mas numeros positivos por " +(diferencia) + " de cantidad"; 
	
	}
		else {
			msg = "No hay diferencia entre positivos y negativos";
		}
		respuesta = prompt( "¿Desea ingresar otro numero?");
}
document.write("Suma de negativos:" + negativo + "<br>");
	document.write("Suma de positivos:" + positivo + "<br>");
	document.write("Cantidad de n° negativos:" + contadorDeNegativos + "<br>");
	document.write("Cantidad de n° positivos:" +contadorDePositivos + "<br>");
	document.write("Cantidad de Ceros:" + contadorDeCeros + "<br>");
	document.write("Cantidad de n° pares:" + numerosPares + "<br>");
	document.write("Promedio de los n° negativos:" + promedioNegativo + "<br>");
	document.write("Promedio de n° positivos:" + promedioPositivo + "<br>");
	document.write(msg);
}//FIN DE LA FUNCIÓN