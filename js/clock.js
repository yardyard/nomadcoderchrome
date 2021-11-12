const clock = document.querySelector("h2#clock");

// intervals 기능 구현
function getClock() {
    // date 변수에 Date() 함수를 저장
    const date = new Date();
    // padStart() 함수를 호출하고 String형으로 바꿔줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    //  "시간:분:초"를 출력해줌
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/* 웹사이트가 load되자마자 바로 getClock()을 실행하고 또 매초마다 다시 실행됨
getClock()이 없으면, 1초동안은 00:00:00을 표시함.
*/
getClock();
// getClock 함수를 매 1초마다 실행해줌.
setInterval(getClock, 1000);

