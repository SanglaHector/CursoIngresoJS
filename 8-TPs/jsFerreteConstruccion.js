/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {

    var ancho;

    var largo;

    var perimetro;

    ancho = document.getElementById("Ancho").value;

    largo = document.getElementById("Largo").value;

    perimetro = ( ancho * 2 + largo * 2 ) * 3;

    alert(perimetro);

}


function Circulo () 
{
    var radio;

    var perimetroTres;

    radio = document.getElementById("Radio").value;

    perimetroTres = Math.PI * radio * 2 ;

    alert(perimetroTres);







	
}
function Materiales () 
{
    var largo;

    var ancho;

    var cemento;
    
    var cal;

    largo = document.getElementById("Largo").value;

    ancho = document.getElementById("Ancho").value;

    cemento = 2 * ancho * largo;
    
    cal = 3 * ancho * largo;

    alert("Usted necesita " + cal +" bolsas de cal y " + cemento + " bolsas de cemento.");
	
}