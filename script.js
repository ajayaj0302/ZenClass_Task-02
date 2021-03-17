  
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
// Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
var country = data;
//console.log(country)
for(let i = 0;i<country.length;i++){
  console.log(country[i].name);
   }
}