function factorial(cijfer){
    var teller = 1;
if(cijfer < 0){
    return "Ga weg mag niet";
}
    while(cijfer > 0){
        teller *= cijfer;
        cijfer--;
    }
    return teller;
};

var result1 = factorial(5);
console.log(result1);