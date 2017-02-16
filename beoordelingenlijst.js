
//var resultaat = document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer1+" en is dus "+result;

function resultaat(cijferke){
    var cijfer = document.getElementById("field").value;
    
     if((cijfer > 100) && (cijfer < 0)){
         cijferke = 0;
        document.getElementById("resultaat").innerHTML = "Het cijfer is niet geldig. Voer een geldige cijfer in";
    }
    
    if(cijfer <= 49){
        var result = "onvoldoende";
    } else if((cijfer >= 50) && (cijfer <= 59)){
        var result = "matig";
    } else if((cijfer >= 60) && (cijfer <= 74)){
        var result = "voldoende";
    }
    
    if(cijferke === 1){
        document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer+" en is dus "+result;
    } else {
        document.getElementById("resultaat").innerHTML = "De beoordeling is "+result+", want het cijfer is "+cijfer;
    }
}

