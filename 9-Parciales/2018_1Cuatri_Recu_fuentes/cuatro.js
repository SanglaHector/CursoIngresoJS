function mostrar()
{
    var numeroUno = prompt("ingrese el primer numero");
    var numeroDos = prompt("ingrese el segundo numero");
    var resultado;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if(numeroUno > numeroDos){
        resultado = numeroUno / numeroDos;
        alert("El resultado es " + resultado + ".");
    } else if( numeroUno < numeroDos){
        resultado = numeroUno + numeroDos
        if(resultado < 50){
            alert("El resultado es " + resultado + " y la suma es menor a 50");
        }alert("El resultado es " + resultado);
    }
}
