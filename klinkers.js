function klinkers(){
    var inputValue = document.getElementById("invoerValue").value;
    inputValue = inputValue.replace(/a/g, "!");
    inputValue = inputValue.replace(/e/g, "@");
    inputValue = inputValue.replace(/o/g, "#");
    inputValue = inputValue.replace(/u/g, "$");
    inputValue = inputValue.replace(/i/g, "%");

    document.getElementById("info").innerHTML = inputValue;

}