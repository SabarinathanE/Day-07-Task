//Print the total population of countries using reduce function?


let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
    let count = result.map((arr) => arr.population);
    let pop = count.reduce((acu, arr) => acu+arr);
  
console.log(pop)
}

//   OutPut:

//   7777721563

