const apikey="06ee8ece9463f4236a32986e69c53c76";
const form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName=document.getElementById('city-name').value;
    console.log(cityName);
    getweatherData(cityName);
})

async function getweatherData(cityName){
    try{
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`;    
const response=await fetch(url);
const data=await response.json();
showWeatherInfo(data);
}
    catch(error){
        alert('sorry ! city name is not in my data base');
    }
}
function showWeatherInfo(data){
let imgicon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
let weatherInfo=document.getElementById('weather-info');
weatherInfo.innerHTML=`<h2>countrycode:${data.sys.country}</h2>
<h3>cityName:${data.name}
<p>Temperature:${data.main.temp}Fl${Math.round(data.main.temp-273.15)}&degc</p>
<p>humidity:${data.main.humidity}%</p>
<p>Air Pressure:${data.main.pressure}hpa</p>
<p>weather:${data.weather[0].description}</p><img src=${imgicon} height=25 width=50>
<p>wind speed:${data.wind.speed}m/s</p>`;
}

