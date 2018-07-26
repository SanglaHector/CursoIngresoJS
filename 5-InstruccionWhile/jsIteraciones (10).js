function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero; 
	var positivo = 0;
	var negativo = 0;
	var contadorDeceros = 0;
	var contadorDePositivos = 0;
	var contadorDeNegarivos = 0;
	var diferencia;
	var promedioPositivo;
	var promedioNegativo;
	var numerosPares;
	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

	 
		while(inNan(numero)){
			numero = prompt("ingrese un numero correcto");
			numero = parseInt(numero);
			
}
	if(numero < 0 ){
		contadorDeNegarivos ++
		negativo = numero + negativo;

	}else if(numero > 0){
		contadorDePositivos ++ ;
		positivo = positivo + numero;
	}else if(numero == 0){
		contadorDeCeros ++ ;
	}
	

	}
}}//FIN DE LA FUNCIÓN