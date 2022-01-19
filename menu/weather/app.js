window.addEventListener('load', ()=> {
    const API = 'd2b64a537b17543c420bb4847913d68e'
    let lon;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')

    if(navigator.geolocation) {
        // 웹에서 장치의 위치를 알아낼 때 사용할 수 있는 Geolocation 객체를 반환합니다
        navigator.geolocation.getCurrentPosition(position => {
            console.log('position', position)

            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`

            fetch(api).then(response => {
                return response.json();
            })
            .then(data => {
                console.log('data', data)
                temperatureDegree.textContent = (data.main.temp - 273.15).toFixed(0);
                locationTimezone.textContent = data.name
                temperatureDescription.textContent = data.weather[0].main
               
      
            })
        })
    }


})

// https://www.youtube.com/watch?v=wPElVpR1rwA&t=1283s    34:09
// https://home.openweathermap.org/api_keys

// http://api.openweathermap.org/data/2.5/weather?q=dublin&appid=d2b64a537b17543c420bb4847913d68e


// icon
// https://github.com/darkskyapp/skycons/blob/master/skycons.js