const cityEl = document.getElementById("cityEl")
const stateEl = document.getElementById("stateEl")

var oldData;


document
    .getElementById('getLocationLink')
    .addEventListener('click', findCity);

function findCity() {
    console.log(stateEl.value)
localStorage.setItem(cityEl.value,stateEl.value)

    let state = stateEl.value;
    let name = cityEl.value;
    let limit = '5'
    let key = '890c3bde92eb251b023ba65f63eb1c36';
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${name},${state},&limit=${limit}&appid=${key}`
    fetch(url)
        .then(resp => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then(data => {
            getWeather(data)
        })
        .catch(console.err);
}
function getWeather(data) {
    const latt = data[0].lat
    const lonn = data[0].lon
    let key = '890c3bde92eb251b023ba65f63eb1c36';
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latt}&lon=${lonn}&appid=${key}&units=imperial`
    console.log(url)

    fetch(url)
        .then(resp => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then(data => {
            showWeather(data);
        })
        .catch(console.err);
}
function showWeather(data) {
    //Imputing current weather data into the "current" HTML card
    document.getElementById("cTitle").innerHTML = data.city.name + ' ' + moment().format('M/D/YY');
    document.getElementById('demo').src = 'http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
    document.getElementById("cTemp").innerHTML = 'Temp: '+data.list[0].main.temp + '°F';
    document.getElementById("cWind").innerHTML = 'Wind: '+data.list[0].wind.speed + 'MPH';
    document.getElementById("cHum").innerHTML = 'Humidity: '+data.list[0].main.humidity + '%';
    // One day ahead
    document.getElementById("date1").innerHTML = moment().add(1, 'days').format('M/D/YY');
    document.getElementById('icon1').src = 'http://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png'
    document.getElementById("temp1").innerHTML = 'Temp: '+data.list[1].main.temp + '°F';
    document.getElementById("wind1").innerHTML = 'Wind: '+data.list[1].wind.speed + 'MPH';
    document.getElementById("hum1").innerHTML = 'Humidity: '+data.list[1].main.humidity + '%';
    // Two days ahead
    document.getElementById("date2").innerHTML = moment().add(2, 'days').format('M/D/YY');
    document.getElementById('icon2').src = 'http://openweathermap.org/img/wn/' + data.list[6].weather[0].icon + '@2x.png'
    document.getElementById("temp2").innerHTML = 'Temp: '+data.list[6].main.temp + '°F';
    document.getElementById("wind2").innerHTML = 'Wind: '+data.list[6].wind.speed + 'MPH';
    document.getElementById("hum2").innerHTML = 'Humidity: '+data.list[6].main.humidity + '%';
    // Three days ahead
    document.getElementById("date3").innerHTML = moment().add(3, 'days').format('M/D/YY');
    document.getElementById('icon3').src = 'http://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png'
    document.getElementById("temp3").innerHTML = 'Temp: '+data.list[14].main.temp + '°F';
    document.getElementById("wind3").innerHTML = 'Wind: '+data.list[14].wind.speed + 'MPH';
    document.getElementById("hum3").innerHTML = 'Humidity: '+data.list[14].main.humidity + '%';
    // Four days ahead
    document.getElementById("date4").innerHTML = moment().add(4, 'days').format('M/D/YY');
    document.getElementById('icon4').src = 'http://openweathermap.org/img/wn/' + data.list[22].weather[0].icon + '@2x.png'
    document.getElementById("temp4").innerHTML = 'Temp: '+data.list[22].main.temp + '°F';
    document.getElementById("wind4").innerHTML = 'Wind: '+data.list[22].wind.speed + 'MPH';
    document.getElementById("hum4").innerHTML = 'Humidity: '+data.list[22].main.humidity + '%';
    // Five days ahead
    document.getElementById("date5").innerHTML = moment().add(5, 'days').format('M/D/YY');
    document.getElementById('icon5').src = 'http://openweathermap.org/img/wn/' + data.list[30].weather[0].icon + '@2x.png'
    document.getElementById("temp5").innerHTML = 'Temp: '+data.list[30].main.temp + '°F';
    document.getElementById("wind5").innerHTML = 'Wind: '+data.list[30].wind.speed + 'MPH';
    document.getElementById("hum5").innerHTML = 'Humidity: '+data.list[30].main.humidity + '%';
}
var temp = document.getElementById("history");

for(i=0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    let hisEl = document.createElement('div');
    hisEl.textContent = `${key}, ${value}`
    temp.appendChild(hisEl);
    console.log(`You its ${key}, ${value}`)

    hisEl.addEventListener("click", function(){
        oldData = hisEl.textContent
        getWeatherHist()
        
    })
}
    function getWeatherHist(){
        const newData = oldData.split(", ") 
        console.log(newData[0])

        let state = newData[1];
        let name = newData[0];
        let limit = '5'
        let key = '890c3bde92eb251b023ba65f63eb1c36';
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${name},${state},&limit=${limit}&appid=${key}`
        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data => {
                getWeather(data)
            })
            .catch(console.err);

    }


