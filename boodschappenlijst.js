function resultaat(){
    invoer = array(document.getElementById("field").value);
    nummer = 0;
    
    while(invoer !== ""){
        nummer = nummer+1;
        document.getElementById("resultaat").innerHTML = invoer[nummer] + "<br />";
    }
}