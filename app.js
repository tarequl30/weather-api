document.getElementById("button").addEventListener("click", function(){
    const getCity = document.getElementById("getCity").value;
    weather(getCity);
})
function weather (getCity){
    const apiKey = '07c8181061f87b781df216482a3d65e1';
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${apiBase}?q=${getCity}&units=metric&appid=${apiKey}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
    
    
};

function setData (data){
console.log(data.name);
document.getElementById("cityName").innerText = data.name;
document.getElementById("temp").innerText = data.main.temp;
document.getElementById("info").innerText = data.weather[0].main;
document.getElementById("getCity").value = '';
}

