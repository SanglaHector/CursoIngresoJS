function mostrar()
{
    var acumuladorAlumno;
    var nombreAlumno;
    var sexo;
    var contador = 0;
    var preguntaUno = "no";
    var nota;
    var acumuladorNota = 0;
    var promedioNota ;
    var varonesAprobados = 0;
    var notaBaja = 10;
    var alumnoNotaBaja;
    var cantidadDeNotas = 0;
    var preguntaDos = "si"

    while( preguntaUno != "si"){
        nombreAlumno = prompt("Ingrese el nombre del alumno");
        sexo = prompt("ingrese f para femenino o m para masculino");
        
        while ( sexo != "f" && sexo!= "m"){
            sexo = prompt("por favor ingrese una opcion correcta. f para femenino o m para masculino");
        }
        
        nota = prompt("Ingrese su nota con un valor numerico entre 1  y 10");
        nota = parseInt(nota);
        while ( nota < 1 || nota > 10){
            nota  = prompt("Ingrese un numero correcto entre 1 y 10");
        }
        cantidadDeNotas ++;
        if(nota < notaBaja ){
            notaBaja = nota;
            alumnoNotaBaja == nombreAlumno; 
        }
        if ( sexo == "m" && nota >= 6){
            varonesAprobados ++
        }
        acumuladorNota = acumuladorNota + nota;
        contador ++ 
        promedioNota = acumuladorNota / contador;

        acumuladorAlumno = document.write("Nombre del alumno: " + nombreAlumno + "<br>" +"Cantidad de notas:" + cantidadDeNotas + "<br>" + "Promedio De notas:" + promedioNota );

        preguntaUno = prompt("¿Desea agregar otro alumno?");



        
        //mal
    }
}
