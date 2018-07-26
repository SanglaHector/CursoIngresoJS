//contador= variable numerica
//contador = variable que cuenta repeticiones
//contador = contador + 1; ese 1 es una constante
//acumuludar es una varible que acumula resultador;
// acumulador = acumulador + varible 
// los contadores pueden restar, multiplicar o sumar.
//Cual es la diferencia entre un acumulador y un contador?
// cuento cantidad y en el otro guardo resultados.
//                                                   // El codigo funciona con if`s, pero no es un codigo no sea correcta
//                                                    ya que el procesadpr tarda mas en leer todo el codigo, en ejecutar cada accion IF.//
// supongamos que quiero contar cantidades de letras, volcales o consonantes
// var contadorA=0
// var letra
// var contadorB=0
// var contadores=0
// var contadorI=0  les pongovalor ceros ya que van a ser contadores.

// while ( i<= 10)
// letra=prompt("ingrese una letra")         Solo quiero contar las vocales, aqui solo tenemos 5 cosas que contar, a,e ,i,o,u.
//    if(letra == "a"){                      Imaginemos que tengamos mas de 5 variables, pero en el caso de mas condiciones el codigo
    // contadorA ++ ;                        queda muy engorrozo, desprolijo y dificil de mantener, por eso en estos casos se utiliza SWITCH.
  //                                         ambas son tomas de decicicones. 
//} 
// else if( letra == "e"){
//     contadorE ++;
//}
//  else if(letra == "i"){
    // contadorI ++ ;
//}...

// SWITCH (varible)                 en caso de javascritp se puede poner cualquier tipo de variable, mas adelante veremos casso como en los de c+
//  case "a":                       case es un valor constante que se va a evaluar
//        sentencias;               en caso 
//    break;    brack indica que el caso finalizo
// case "b": 
//        sentencias;
// break; ...

// cuando ya no quedan casos que evaluar pero quedan casos que pueden ser anlizados usamos la sentencia  DEFAULT
// default :
//     senntencias def;  este no necesita break
// una ver cerrado el default, cerramos el SWITCH "}"
// 
//  switch(letra){
    // case "a":
    //          contadorA ++
    // break                             el break lo que hace es romper la secuencialidad
    //                                  osea si yo ingres la letra "e" , evalua la letra a, ve que no funciona
    //                                  , luego evalua la e, funciona y ROMPE; sale del SWITCH ya que obtubo su resppuesta.
    //case "e"
    //          contadorE ++ 
    // break
    // case"i"
    //          contadorI ++
    // break
    //case "o"
    //          contadorO ++
    // break
    // case "u"
    //          contadorU ++
    // break
//}
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Enero":
    alert("Que comiences bien el año!");
    break
   
    case "Marzo":
    alert("A clases");
    break
   
    case "Julio":
    alert("se viene las vacaciones");
    break

    case "Diciembre":
    alert("Felices fiestas");
    break
}




}//FIN DE LA FUNCIÓN