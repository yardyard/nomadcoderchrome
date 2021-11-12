
// querySelector는 id를 찾는지, class를 찾는지 분명히 해줘야 함 ex) id는 앞에 #붙임. 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


// 실수(오타)를 만들고 싶지 않은 변수들
// 반복되고, string만 포함된 변수는 대문자로 표기하여 하나로 묶어줌.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 브라우저가 첫번째 function을 호출할 때 argument로 여러가지 정보들을 준다.
function onLoginsubmit(event) {
    
    // 브라우저가 기본 동작을 실행하지 못하게 막는다.
    event.preventDefault();
    
    // loginForm의 event가 실행될 때 hidden class 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;

    // 로컬 저장소에 key값이 "username"인 username을 저장함.
    localStorage.setItem(USERNAME_KEY,username);

    // form이 사라지고, 그 자리에 Hello + username을 출력하고, 
    // 중복되니 hidden class 삭제
    paintGreetings(username);
}    


// click이 아닌 submit을 감지하기. ( 새로고침을 막기 위해서 )
loginForm.addEventListener("submit", onLoginsubmit);

// 같은 의미의 코드가 반복되면 함수로 만들어버리자!
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

// local storage에 "username" key값의 데이터를 변수에 저장한다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약 local storage에 DB가 없다면 form의 hidden을 제거함으로서 form을 보여줘라.
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
} 
// 만약 local storage에 DB가 있다면 greeting의 hidden을 제거함으로서 greeting을 바로 보여준다.
else {
    paintGreetings(savedUsername);
}