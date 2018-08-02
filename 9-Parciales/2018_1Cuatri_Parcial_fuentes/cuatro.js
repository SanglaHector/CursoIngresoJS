function mostrar()
{
    var numeroUno = prompt("Ingrese un numero.");
    var numeroDos = prompt("Ingrese otro numero.");
    var resultado;

    if ( numeroUno ==numeroDos ){
        alert( numeroUno  + numeroDos );
    }
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    if ( numeroUno > numeroDos){
        resultado = numeroUno - numeroDos;
        alert( resultado );
    }else if ( numeroUno < numeroDos ){
        resultado = numeroUno + numeroDos;
        alert( resultado );}
        if( resultado > 10 ){
            alert("La suma es " + resultado + " y supera el numero 10.");
        }
    

}
