let countryInp = document.getElementById("country");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

searchBtn.addEventListener("click" , ()=>{
    let countryName = countryInp.value;
    let fialURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(fialURL)
    .then((response) => response.json())
    .then((data) =>{
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <h3>capital : ${data[0].capital[0]}</h3>
        <h3>continents : ${data[0].continents[0]}</h3>
        <h3>population : ${data[0].population}</h3>
        <h3>currency : ${data[0].currencies[Object.keys(data[0].currencies)].name} - 
        ${Object.keys(data[0].currencies)[0]}</h3>
        <h3>common languages : ${Object.values(data[0].languages).toString().split(",").join(',')} </h3>
        `
    })
    
})