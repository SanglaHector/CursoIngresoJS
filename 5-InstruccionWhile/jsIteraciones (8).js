function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero = 0;
	var respuesta='si';

	while ( respuesta != "no"){
		numero = prompt( "ingrese un numero");
		numero = parseInt(numero);
		contador ++
		if(numero >=0){
			positivo = numero + positivo;			
		
	}
		else {
			negativo = numero * negativo;
		}
		respuesta = prompt("¿quiere agregar otro numero?")

}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN