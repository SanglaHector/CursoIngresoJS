/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    
    var cantidad; 

    var precioConDescuento;

    var descuento;

    var marca;

    marca = document.getElementById("Marca").value;

    cantidad = document.getElementById("Cantidad").value;
   
    
     if ( cantidad >= 6) {
         descuento = cantidad*35 *(50/100);

         precioConDescuento = cantidad * 35 - descuento;
        


        document.getElementById("precioDescuento").value = precioConDescuento;
    }
    if( cantidad == 5 && marca == "ArgentinaLuz"){
    descuento = cantidad*35 *(40/100);

    precioConDescuento = cantidad * 35 - descuento;

    document.getElementById("precioDescuento").value = precioConDescuento;;
}
else { if( cantidad == 5){

    descuento = cantidad * 35 *(30 / 100);
    
    precioConDescuento = cantidad * 35 - descuento;

    document.getElementById("precioDescuento").value = precioConDescuento;
}}
    if( cantidad == 4 && ( marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        
        descuento = cantidad * 35 *(25/100);

        precioConDescuento = cantidad * 35 - descuento;

        document.getElementById("precioDescuento").value = precioConDescuento;

    }
    else {
        if ( cantidad == 4){
            
            descuento = cantidad *35 *(20/100);

            precioConDescuento = cantidad *35 - descuento;

            document.getElementById("precioDescuento").value = precioConDescuento;
    }}
        if ( cantidad == 3 && marca == "ArgentinaLuz"){
            descuento = cantidad *35 *(15/100);
            precioConDescuento = cantidad*35 - descuento;
            document.getElementById("precioDescuento").value =precioConDescuento;
        }   else { if( cantidad == 3 && marca == "FelipeLamparas") {
            descuento = cantidad *35 * 10/100;
            precioConDescuento = cantidad*35 - descuento;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }else {if( cantidad == 3){
            descuento = cantidad * 35 * 5/100;
            precioConDescuento = cantidad * 35 - descuento;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }}
            
        }
        var ingresoBruto;
if(precioConDescuento > 120){

ingresoBruto = precioConDescuento * 10/100;

alert( "usted paga " + ingresoBruto + " de IIBB." );
}
        
    
    
}
