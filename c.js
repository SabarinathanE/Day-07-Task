//Print the following details name, capital, flag using forEach?


let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
   
    result.forEach((arr) => {
     console.log(arr.name.common,arr.capital,arr.flag)
    } )
}
