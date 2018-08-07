function mostrar()
{
	var numeroUno = prompt("Ingrese el primer numero");
	var numeroDos = prompt("ingrese el segundo numero");
	var numeroTres = prompt("Ingrese el tercer numero");
	

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	if ( numeroUno < numeroDos && numeroUno < numeroTres ) {
		min = numeroUno;
	} else if ( numeroUno > numeroDos && numeroUno > numeroTres){
		max = numeroUno;
	}
	 if ( numeroDos < numeroUno && numeroDos < numeroTres){
		min = numeroDos;
	}else 
	 if ( numeroDos > numeroUno && numeroDos > numeroTres){
		max = numeroDos;
	}
	 if ( numeroTres <  numeroUno && numeroTres < numeroDos){
		min = numeroTres;
	}else
	 if ( numeroTres > numeroUno && numeroTres > numeroDos){
		max = numeroTres;
	}
	
	

	alert("El minimo es " + min + " y el max es " + max);
}
