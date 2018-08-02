function mostrar(){
  var num;
  var contadorDePares = 0;

  num = prompt("ingrese un numero");

  for ( i = 1; i < num ; i ++){
    if( i % 2 == 0)
    contadorDePares ++;
  }
  alert ("la cantidad de numeros pares son " + contadorDePares ) 
}