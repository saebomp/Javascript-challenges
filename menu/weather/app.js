window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        // 웹에서 장치의 위치를 알아낼 때 사용할 수 있는 Geolocation 객체를 반환합니다
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude;
            loat = position.coords.latitude;
        })
    }
})

// http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2b64a537b17543c420bb4847913d68e