/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var suma;
    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    suma=numeroUno+numeroDos;
    alert(suma);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resta;
    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    resta=numeroUno - numeroDos;
    alert(resta);
	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var multiplicacion;
    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    multiplicacion=numeroUno * numeroDos;
    alert(multiplicacion);
	
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var divicion;
    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    divicion=numeroUno / numeroDos;
    alert(divicion);
	
}

