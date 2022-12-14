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
    function showWeather(data){
    
       document.getElementById("cTitle").innerHTML = data.city.name+' '+  moment().format('M/D/YY');
       document.getElementById('demo').src = 'http://openweathermap.org/img/wn/10d@2x.png'
       document.getElementById("cTemp").innerHTML = data.list[0].main.temp + '°F';
       document.getElementById("cWind").innerHTML = data.list[0].wind.speed + 'MPH';
       document.getElementById("cHum").innerHTML = data.list[0].main.humidity + '%';

      

        console.log(data.list[0])
        console.log(data.list[1].weather)
        console.log(data.list[6].weather)
        console.log(data.list[14].weather)
        console.log(data.list[22].weather)
        console.log(data.list[30].weather)

    }
    console.log(moment().add(1,'days').format('M/D/YY'))