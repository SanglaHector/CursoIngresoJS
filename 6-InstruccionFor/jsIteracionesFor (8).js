function mostrar()
{
    var num = prompt("Ingrese un numero");
    var contadorDiv = 0;

    for ( i= 1; i <= num; i++ ){
        if ( num % i == 0){
            contadorDiv ++ 
        }
            
    }
    if(contadorDiv == 2){
        alert( num + " es primo");
    }
    else{
        alert(num + " no es primo");
    }




}//FIN DE LA FUNCIÓN