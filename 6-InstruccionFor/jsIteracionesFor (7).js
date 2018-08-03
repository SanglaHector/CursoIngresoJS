function mostrar()
{
    var num = prompt("Ingrese un numero");
    var divisores = "Los numeros divisores de " + num + " son: ";
    var contador = 0;

    for ( i = 1; i <= num; i++ ){
        if( num % i == 0){
            contador ++
            divisores = divisores + i + ", ";
        }
    }
    alert("La cantidad de numeros divisores de " + num + " son: " + contador + ". " + divisores );




}//FIN DE LA FUNCIÓN