function mostrar(){
  var num = prompt("ingrese un numero");
  var contadorDePares = 0;
  var numerosPares = "Los numeros pares desde el 1 al " + num + " son:";

  for( i = 1; i < num; i++ ){
    if( i % 2 == 0 ){
      contadorDePares ++ 
      numerosPares = numerosPares + i + ", ";
    }
  }
  alert("La cantidad de numeros pares encontrados son: " + contadorDePares + "<br>" + numerosPares);
  
}
/*
for =
i = es donde empiza el bucle, aqui le doy comienzo.
i < num es hasta donde quiero que se repita este bucle.
i ++ es para que cada vez que el bucle se repita, la variable i cambie de valor.
de forma cada vez que el bucle se vuelva a repetir la condicional If va a reaccion distinto y el contador y acumulador van a rir guardando datos solo cuando i tomo el valor deseado */
