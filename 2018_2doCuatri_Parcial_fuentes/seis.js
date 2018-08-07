function mostrar()
{
	var estacion = prompt("Ingrese estacion del año.")
	var t = prompt("Ingrese temperatura");
	t = parseInt(t);

	if( estacion != "primavera" && estacion != "verano" && estacion != "invierno" && estacion != "otoño"){
		estacion = prompt("Por favor ingrese una estacion correcta");
	}

	switch(estacion){
		case "invierno":
		if( t <= 5 && t >= 1 ){
			alert("Que fresquete!!");
		}
		break;

		case "otoño":
		if( t == 15){
			alert("Esta lindo");
		}else if( t < 15){
			alert("se vino el frio");
		}else if( t > 15 && t <= 21){
			alert("Esta re bueno");
		}else if ( t > 21){
			alert("mucho calor para el otoño");
		}
		break;

		case "primavera":
		case "verano":
		if( t > 32){
			alert("Es un horno");
		}else if( t > 20 && t < 32 ){
			alert("Que calorcito");
		}
		break;
	}
	
}
