function mostrar()
{
    var respuesta = "si";
    var serie = 0;
    var cantidadCapPar = 0;
    var masCapi = 0;
    var nombreMasCapi;
    var todosCap = 0;
    var promedioCap;
    var cantCapsD = 0;
    var cantCapsT = 0;
    var cantCapsC = 0;
    var cantCapsO = 0;
    var tipoMenosCap;

    while( respuesta != "no"){
 
    var titulo = prompt("Ingrese el titulo.")
    var capitulos = prompt(" Ingrese la cantidad de capitulos");
    capitulos = parseInt(capitulos);
    
    var tipo = prompt("Ingrese d para drama, t para triller, c para comedia o o para otras.");

    while( capitulos < 0 ){
        capitulos = prompt("La serie debe tener mas de 0 capitulos");
        capitulos = parseInt(capitulos);
    }
    while ( tipo != "d" && tipo != "t" && tipo != "c" && tipo != "o" ){
        tipo = prompt("Por favor ingrese una letra correcta. d , t , c , o.");
    }
     if ( capitulos % 2 == 0){
         cantidadCapPar ++

        }
    if(capitulos > masCapi){
        nombreMasCapi = titulo;
    }
    if ( tipo == "d"){
        cantCapsD ++
    }
    if (tipo == "c"){
        cantCapsC ++
    }
    if( tipo == "t"){
        cantCapsT ++
    }
    if( tipo == "O"){
        cantCapsO ++
    }

    if ( cantCapsD < cantCapsC && cantCapsD < cantCapsT && cantCapsD < cantCapsO ){
        tipoMenosCap = "Drama";
    }
    if ( cantCapsT < cantCapsD && cantCapsT < cantCapsC && cantCapsT < cantCapsO){
        tipoMenosCap = "triller";
    }
    if( cantCapsC < cantCapsD && cantCapsC < cantCapsT && cantCapsC < cantCapsO){
        tipoMenosCap = "Comedia";
    }
    if ( cantCapsO <cantCapsC && cantCapsO < cantCapsD && cantCapsO < cantCapsT){
        tipoMenosCap = "otro";
    }



    todosCap = capitulos + todosCap;
    serie ++
    promedioCap = todosCap / serie;
    respuesta= prompt("Quiere ingresar otra serie?");

    }

    console.log(cantidadCapPar);
    console.log(nombreMasCapi);
    console.log(tipoMenosCap)
    console.log(promedioCap);
    alert("La cantidad de series con capituls pares es de " + cantidadCapPar);
    alert("Elnombre de la que tiene mas caps es de  " + nombreMasCapi);
    alert("El tipo que tiene menos caps es " + tipoMenosCap);
    alert("El promedio de cpas entre todas las ingresadas es de " + promedioCap);
}
