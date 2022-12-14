const cityEl = document.getElementById("cityEl")
const stateEl = document.getElementById("stateEl")

document
    .getElementById('getLocationLink')
    .addEventListener('click', findCity);

function findCity() {
    console.log(stateEl.value)
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
    document.getElementById("cTemp").innerHTML = data.list[0].main.temp + '°F';
    document.getElementById("cWind").innerHTML = data.list[0].wind.speed + 'MPH';
    document.getElementById("cHum").innerHTML = data.list[0].main.humidity + '%';
    // One day ahead
    document.getElementById("date1").innerHTML = moment().add(1, 'days').format('M/D/YY');
    document.getElementById('icon1').src = 'http://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png'
    document.getElementById("temp1").innerHTML = data.list[1].main.temp + '°F';
    document.getElementById("wind1").innerHTML = data.list[1].wind.speed + 'MPH';
    document.getElementById("hum1").innerHTML = data.list[1].main.humidity + '%';
    // Two days ahead
    document.getElementById("date2").innerHTML = moment().add(2, 'days').format('M/D/YY');
    document.getElementById('icon2').src = 'http://openweathermap.org/img/wn/' + data.list[6].weather[0].icon + '@2x.png'
    document.getElementById("temp2").innerHTML = data.list[6].main.temp + '°F';
    document.getElementById("wind2").innerHTML = data.list[6].wind.speed + 'MPH';
    document.getElementById("hum2").innerHTML = data.list[6].main.humidity + '%';
    // Three days ahead
    document.getElementById("date3").innerHTML = moment().add(3, 'days').format('M/D/YY');
    document.getElementById('icon3').src = 'http://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png'
    document.getElementById("temp3").innerHTML = data.list[14].main.temp + '°F';
    document.getElementById("wind3").innerHTML = data.list[14].wind.speed + 'MPH';
    document.getElementById("hum3").innerHTML = data.list[14].main.humidity + '%';
    // Four days ahead
    document.getElementById("date4").innerHTML = moment().add(4, 'days').format('M/D/YY');
    document.getElementById('icon4').src = 'http://openweathermap.org/img/wn/' + data.list[22].weather[0].icon + '@2x.png'
    document.getElementById("temp4").innerHTML = data.list[22].main.temp + '°F';
    document.getElementById("wind4").innerHTML = data.list[22].wind.speed + 'MPH';
    document.getElementById("hum4").innerHTML = data.list[22].main.humidity + '%';
    // Five days ahead
    document.getElementById("date5").innerHTML = moment().add(5, 'days').format('M/D/YY');
    document.getElementById('icon5').src = 'http://openweathermap.org/img/wn/' + data.list[30].weather[0].icon + '@2x.png'
    document.getElementById("temp5").innerHTML = data.list[30].main.temp + '°F';
    document.getElementById("wind5").innerHTML = data.list[30].wind.speed + 'MPH';
    document.getElementById("hum5").innerHTML = data.list[30].main.humidity + '%';



    console.log(data.list[0])
    console.log(data.list[1])
    console.log(data.list[6].weather)
    console.log(data.list[14].weather)
    console.log(data.list[22].weather)
    console.log(data.list[30].weather)

}