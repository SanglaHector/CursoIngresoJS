/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;

    var celcius;

    fahrenheit = document.getElementById("Temperatura").value;

    celcius = ( fahrenheit - 32) * (5/9);

    alert ( celcius);



	
}

function CentigradosFahrenheit () 
{
    var celcuius;

    var fahrenheit;

    celcius = document.getElementById("Temperatura").value;

    fahrenheit = ( celcius * 9 / 5) + 32;

    alert(fahrenheit);
	
}
