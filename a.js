//Get all the countries from Asia continent /region using Filter function?

let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
    let cont = result.filter((arr) => arr.continents == "Asia");
   let countries = cont.map((arr) => arr.name.common);

console.log(countries)
}

