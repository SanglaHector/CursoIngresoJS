function mostrar()
{
    var hora = document.getElementById("laHora").value;

    switch(hora){
        case "6":
        document.write("Es de mañana");
        break;

        case "7":
        document.write("Es de mañana");
        break;

        case "8":
        document.write("Es de mañana");
        break;

        case "9":
        document.write("Es de mañana");
        break;

        case"10":
        document.write("Es de mañana");
        break;

        case "11":
        document.write("Es de mañana");
        break;

        case "12":
        document.write("Es de tarde");
        break;

        case "13":
        document.write("Es de tarde");                                        
        break;

        case "14":
        document.write("Es de tarde");                                        
        break;

        case "15":
        document.write("Es de tarde");                                        
        break;

        case "16":
        document.write("Es de tarde");                                        
        break;

        case "19":
        document.write("Es de tarde");                                        
        break;

        default: 
        document.write("Es de noche");                                                                                
        break;                                                                            
    }
    hora = parseInt(hora);
    if(hora < 24 && hora > 19){
        document.write("A dormir");
    }

}
