function mostrar()
{
    var nota;
    var acumuladorNota = 0;
    var alumno;
    var sexo;
    var promedio;
    var contadorVarones = 0;
    var edad;
    var acumuladorEdad
    var acumuladorNombre
    var contador = 0
    var notaBaja = 10
    var puntoB 
    var masJoven = 10000000;
    

    while(contador < 5){
        contador ++ 
        alumno = prompt("ingrese el nombre del alumno");
        sexo = prompt("ingrese f para femenino o m para masculino");
        while( sexo != "m" && sexo != "f"){
            sexo = prompt("letra incorrecta, por favor ingrese la letra m para masculino o la letra f para femenino");
        }

        if(sexo == "f"){
            sexo = "Femenino";
        }
        else {
            sexo = "Masculino";
        }

        nota = prompt("ingrese la nota del alumno. debe ser un valor numerico del 0 al 10");
        nota = parseInt(nota);
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = prompt("ingrese una nota correcta");
            nota = parseInt(nota);
        }
        acumuladorNota = nota + acumuladorNota;
        if(notaBaja > nota){
            notaBaja = nota;
            puntoB = "la nota mas baja es de " + notaBaja + " y su sexo es " + sexo;
        }
        

        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        if( sexo == "Masculino" && edad >= 18 && nota >= 6){
            contadorVarones ++ 
    }
        if (edad < masJoven){
            masJoven = edad
        }

        promedio = acumuladorNota / contador;

}

alert("El promedio de las notas totales es de " + promedio);
alert(puntoB);
alert("La cantidad de varones aprobados con mas de 6 es de " + contadorVarones);
alert("La edad de la persona mas joven es de " + masJoven + " y es de sexo " + sexo);
}
