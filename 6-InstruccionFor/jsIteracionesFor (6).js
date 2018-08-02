function mostrar(){
  var num;
  var contadorDePares = 0;
  var acumulador = "los numeros pares son ";

  num = prompt("ingrese un numero");

  for ( i = 1; i < num ; i ++){
    if( i % 2 == 0){  
    contadorDePares ++;
    acumulador += i + ", ";
  }
  }
  alert ("la cantidad de numeros pares es " + contadorDePares ) 
}