const API_KEY = "d72cc7077c109aca299bef3f2262643f";

// 위치를 받는데 성공했을 때의 함수
function onGeoOk(position) {
    // 위도 값을 저장함.
    const lat = position.coords.latitude;
    // 경도 값을 저장함.
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // 실제로 url에 갈 필요 없이 JS가 대신 url을 부름.
    fetch(url)
        
        // url을 불러오는 데 성공했다면(then) 반환받은 response를 받고, response의 json을 얻는다.
        .then(response => response.json())
        .then(data => {
            // 각 변수에 HTML id와 element를 연결해주고, 그 안에 innerText 해줌.
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });

}

// 에러가 발생했을 때 실행될 함수
function onGeoError() {
    alert("Can't find you. No wather for you.");
}

// navigator 함수는 첫번 째 인자로 위치를 받는데 성공했을 때의 함수를 받고,
// 두번째 인자로는 에러가 발생했을 때 실행될 함수를 받는다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
