let url='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apikey='57fdae09256220490933044e4a0c3ff9';
let btn=document.querySelector("#btn");
const searchBox=document.querySelector(".search input");
const weather_icon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(url+city+`&appid=${apikey}`);
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    if(data.weather[0].main=="Clouds"){
        weather_icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather_icon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weather_icon.src="images/snow.png";
    }
}
btn.addEventListener("click",()=>{
    checkweather(searchBox.value);
});