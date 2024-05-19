var city = document.getElementById("city");
var descript = document.getElementById("descrip");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var apikey = "8db2e95868eb5ff794cd374d9124ca67";

function convertion(val) {
    return (val - 273).toFixed(2);
}

function getWeather() {
    var cityName = document.getElementById("cityName").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            city.innerText = data['name'];
            descript.innerText = data['weather'][0]['description'];
            var temp1 = data['main']['temp'];
            temp.innerText = convertion(temp1);
            var wind1 = data['wind']['speed'];
            wind.innerHTML = `<span>${wind1}km/h</span>`

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}