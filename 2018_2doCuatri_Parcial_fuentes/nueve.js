function mostrar()
{
	var pregunta = "si";
	var masCantidad = 0;
	var nombreMasCantidad;
	var masGasto = 0;
	var menosGasto = 1000000000000;
	var mujeres = 0;
	var importeMujer;
	var nombreMujer;
	var gastosViudos = 0
	var contadorViudos = 0
	var promedioViudos;
	while ( pregunta != "no"){
	
	var nombre = prompt("Ingrese su nombre");
	var sexo = prompt("Ingrese su sexo. f para femenino o m para masculino");
	var estadoCivil = prompt("Ingrese su estado Civil. soltero, casado o viudo, en minuscula");
	var cantidad = prompt("Ingrese cantidad de productos");
	var importeTotal = prompt("Ingrese el importe total");

	cantidad = parseInt(cantidad);
	importeTotal = parseInt(importeTotal);

	while ( sexo != "f" && sexo != "m"){
		sexo = prompt("por favor ingrese un sexo correcto");
		}

	while ( estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" ){
		estadoCivil = prompt("Por favor ingrese una opcion correcta. casado , soltero , viudo");
	}
	while ( cantidad <= 0 ){
		cantidad = prompt("Por favor ingrese un valor numerico mayor a 0");
		cantidad = parseInt(cantidad);
	}
	if (masCantidad < cantidad ){
		nombreMasCantidad = nombre;
	}
	if (estadoCivil == "soltero"){
		if(cantidad < menosGasto){
			menosGasto = cantidad;
		}
		if (cantidad > masGasto){
			masGasto = cantidad;
		}

	}
	if ( sexo = "f"){
		mujeres ++
		if( mujeres == 1){
			importeMujer = importeTotal;
			nombreMujer = nombre;
		}
	}

	if ( estadoCivil = "viudo"){
		contadorViudos ++ 
		gastosViudos = gastosViudos + importeTotal;
		promedioViudos = gastosViudos / contadorViudos;
	}

	pregunta = prompt("¿Dese agregar otro cliente? responda si o no");
	}
	console.log(nombreMasCantidad);
	console.log(menosGasto);
	console.log(masGasto);
	console.log(importeTotal);
	console.log(nombreMujer);
	console.log(promedioViudos);

	alert("El nombre de la persona que mas cantidad de productos compro es de ")
}
