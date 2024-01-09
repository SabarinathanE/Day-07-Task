//Get all the countries with a population of less than 2 lakhs using Filter function?


let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
    let pop = result.filter((arr) => arr.population<200000);
    let countries = pop.map((arr) => arr.name.common);

console.log(countries)
}
