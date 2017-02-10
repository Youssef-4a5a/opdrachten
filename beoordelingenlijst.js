
//var resultaat = document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer1+" en is dus "+result;

function resultaat(cijferke){
    var cijfer = document.getElementById("field").value;
    
    if(cijfer <= 49){
        var result = "onvoldoende";
        
    } else if((cijfer >= 50) && (cijfer <= 59)){
        var result = "matig";
        document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer+" en is dus "+result;
    } else if((cijfer >= 60) && (cijfer <= 74)){
        var result = "voldoende";
        document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer+" en is dus "+result;
    } else{
        var result = "goed";
        document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer+" en is dus "+result;
    }
    
    if(cijferke === 1){
        document.getElementById("resultaat").innerHTML = "Het cijfer is "+cijfer+" en is dus "+result;
    } else {
        document.getElementById("resultaat").innerHTML = "De beoordeling is "+result+", want het cijfer is "+cijfer;
    }
}

