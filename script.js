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
        console.log(url);
        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data => {
                console.log(data[0].lat, data[0].lon)
            })
            .catch(console.err);
    }




/*
const app = {
    init: () => {

        document
            .getElementById('getLocationLink')
            .addEventListener('click', app.fetchPosition);
    },

    fetchPosition: (ev) => {
        let state = 'CA'
        let name = 'roseville'
        let limit = '5'
        let key = '890c3bde92eb251b023ba65f63eb1c36';
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${name},${state},&limit=${limit}&appid=${key}`
        console.log(url);
        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data => {
                console.log(data)
            })
            .catch(console.err);
    },
    getLocation:(ev)=>{

    },
}
let name2 = 'roseville'
let state2 = 'CA'
let limit2 = '5'
let key2 = '890c3bde92eb251b023ba65f63eb1c36'
let url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${name2},${state2},&limit=${limit2}&appid=${key2}`
fetch(url2).then(resp => {
    if (!resp.ok) throw new Error(resp.statusText);
    return resp.json();
})
.then(data => {
    console.log(data)
})
.catch(console.err);
*/