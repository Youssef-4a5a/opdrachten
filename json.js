var parse = new DOMParser();
var table = '<table border="1"><tr><th>ID</th><th>Country Name</th></tr>';
document.getElementById("inputButton").addEventListener("click", urlAdd);




function urlAdd() {

    var JSONE = getResponse('webservices/api-employees.php');
    var JSParse = JSON.parse(JSONE);

    document.getElementById('result').innerHTML = JSONE;
    document.getElementById('countryResult').innerHTML = 'Company name is: ' + JSParse.employees[0].company;

    document.getElementById('tabelke').innerHTML += '<tr><td>' + JSParse.employees[0].name + '</td></tr>';

}



function getResponse(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    return xhr.responseText;
}

// var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
// var myObj = JSON.parse(myJSON);
// document.getElementById("result").innerHTML = myObj.name;

// function getXML(country) {
//   // This function performs a AJAX REQUEST for specific items that needs to be replaced or loaded in ONCE
//   var xml;
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.onreadystatechange = function() {
//     xml = this;
//   };
//   xhttp.open("GET", 'webservices/api-countries.php?output=xml&id=' + country, false);
//   xhttp.send();
//   return (xml);
// }
//
// function convertStringToXML(xml) {
//   xml = parse.parseFromString(xml, "text/xml");
//   return (xml);
// }
//
// function displayXMLName(type) {
//
//   var countryID = document.getElementById('input').value;
//   var xml = getXML(countryID);
//
//   xml = convertStringToXML(xml.responseText);
//
//   var id = xml.getElementsByTagName("id");
//   var name = xml.getElementsByTagName("name");
//
//   if (type == 'name') {
//     document.getElementById('countryResult').innerHTML = 'Country name is: ' + name[0].childNodes[0].nodeValue;
//   } else if (type == 'table') {
//     for (i = 0; i < id.length; i++) {
//       table += "<tr>";
//       table += "<td>" + id[i].childNodes[0].nodeValue + "</td>";
//       table += "<td>" + name[i].childNodes[0].nodeValue + "</td>";
//       table += "</tr>";
//     }
//     document.getElementById('tableResult').innerHTML = table;
//   }
//
// }
