//Print the country that uses US dollars as currency.?


let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
   
    let usd = result.filter(country => {
        return country.currencies.some(curr => curr === "USD");
    });
    let usdNames = usd.map(country => country.name.common);
      

 console.log(usdNames)
 }








// let cou = [{names: "sam", curren: "us", zern: {zet:{
//     num: 34, noy: "name"
// }}},
// {names: "ram", curren: "au", zern: {zel:{
//     num:35, noy: "name2"
// }}}]