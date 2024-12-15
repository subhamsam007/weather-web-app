const apikey='f31aec7d3ccae1bf1d2b757be4f72cf7'
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const userinput=document.querySelector('.userinput');
const btn=document.querySelector('.btn');
const weather=document.querySelector('.weather-icon');

async function check(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data= await response.json();
    console.log(data)
    selection(data)

}

//where i am changing the innerhtml to with the api city name 
function selection(data){
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + `°C`;
    document.querySelector('.humidity').innerHTML=data.main.humidity+ `%`;
    document.querySelector('.wind').innerHTML=data.wind.speed +`\n km\\hr`;
    if (data.weather[0].main === "Clouds") {
        weather.src = './weather-app-img/images/clouds.png';
    }
    else if (data.weather[0].main === "Clear") {
        weather.src = './weather-app-img/images/clear.png';
    }
    else if (data.weather[0].main === "Drizzle") {
        weather.src = './weather-app-img/images/drizzle.png';
    }
    else if (data.weather[0].main === "Mist") {
        weather.src = './weather-app-img/images/mist.png';
    }
    else if (data.weather[0].main === "Snow") {
        weather.src = './weather-app-img/images/snow.png';
    }
    else if (data.weather[0].main === "Rain") {
        weather.src = './weather-app-img/images/rain.png';
    }
    else {
        weather.src = './weather-app-img/images/default.png';  // Default image
    }
    document.querySelector('.weather').style.display ='block'    
    document.querySelector('.details').style.display ='block'    
}

btn.addEventListener('click',()=>{
    check(userinput.value);
})

userinput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        check(userinput.value);
    }
});
