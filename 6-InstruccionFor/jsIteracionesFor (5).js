function mostrar()
{
    for ( cant = prompt("ingrese un numero menor que 100"); cant <=100;){
        cant = parseInt(cant);
        if ( cant == 9 ){
            alert("acertó al numero 9");
            break;
        }else{
            console.log(cant);
            cant = prompt("Ingrese otro numero");
        } 
    }




}//FIN DE LA FUNCIÓN