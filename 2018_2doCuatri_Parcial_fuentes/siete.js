function mostrar()
{
	var contador = 0;
	var masPesado = 0;
	var masAlto = 0;
	var menosAncho = 11;
	var cantidadPesoEntre = 0

	ancho = parseInt(ancho);
	alto = parseInt(ancho);
	peso = parseInt(peso);

	while ( contador < 5){
		var nombre = prompt("Ingrese el nombre del producto");
		var ancho = prompt("Ingrese el ancho");
		var alto = prompt("Ingrese el alto");
		var peso = prompt("Ingrese el peso");

		while ( ancho > 10 || ancho <= 0){
			ancho = prompt("Ingrese un ancho entre 0 y 10");
			ancho = parseInt(ancho);
		}
		while ( alto > 10 || alto <= 0 ){
			alto = prompt("Ingrese un alto entre 0  y 10");
			alto = parseInt(alto);
		}
		while ( peso > 10000 || peso <= 0){
			peso = prompt("ingrese un peso entre 0 y 1000 kilos");
			peso = parseInt(peso);
		}
		if ( peso > masPesado){
			masPesado = peso;
		}
		if (alto > masAlto ){
			masAlto = alto;
		}
		if ( ancho < menosAncho ){
			menosAncho = ancho;
		}
		if ( peso <= 600 && peso >= 300){
			cantidadPesoEntre ++
		}
		contador ++
	}

	console.log(masAlto);
	console.log(masPesado);
	console.log(menosAncho);
	console.log(cantidadPesoEntre);
	alert("El peso mas pesado es " + masPesado);
	alert("La altura mas alta es " + masAlto);
	alert("El menos ancho es " + menosAncho);
	alert("La cantidad que tiene un  peso entre 300 y 600 es de " + cantidadPesoEntre);
}
