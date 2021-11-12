const toDoForm = document.getElementById("todo-form");
// 위에서 미리 todo-form을 찾아놨기에 toDoForm을 통한 element 연결 가능
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// let으로 바꿔줌으로서 업데이트가 가능해지고, 더 이상 빈 값이 아니게 됨
let toDos = [];


// toDos array의 내용을 localStorage에 넣는 function
// toDos를 string으로 바꿔줌.
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// button을 눌렀을 때 삭제가 되게하는 function
function deleteToDo(event) {
    // li는 클릭된 button의 부모 element이다. 즉 toDo이다.
    const li = event.target.parentElement;
    li.remove();
    // 우리가 클릭한 li.id와 다른 toDo는 남기고 싶음.
    // li.id는 string이기 때문에 int형으로 변환해줌.
    toDos = toDos.filter((newTodo) => newTodo.id != parseInt(li.id));
    // toDos array가 새로 바뀌었기 때문에 saveToDos를 localStorage에 새로 저장함.
    saveToDos();
}


// submit된 newTodoObj를 매개변수로 받음
function paintToDo(newTodoObj) {
    // HTML에 li라는 element를 만들어줌
    const li = document.createElement("li");
    // li에 id값을 부여해줌.
    li.id = newTodoObj.id;
    // HTML에 span이라는 element를 만들어줌
    const span = document.createElement("span");
    // span에 newTodo(입력받은 toDo)를 입력해줌.
    span.innerText= newTodoObj.text;
    
    // HTML에 button이라는 element를 만들어줌
    const button = document.createElement("button");
    // button에 "X"를 입력해줌.
    button.innerText = "X";
    // button에 click eventListner를 추가해줌.
    button.addEventListener("click", deleteToDo);

    // span을 li의 자식 element로 추가함. = li 내부에 span을 추가해줌
    li.appendChild(span);
    // button을 li의 자식 element로 추가함. = li 내부에 button을 추가해줌    
    li.appendChild(button);

    // HTML의 toDo-list에 li(내부에 span이 있는)를 자식 element로 추가해줌.
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    // submit시 브라우저의 기본 동작인 새로고침 되는 것을 막아줌.
    event.preventDefault();
    // input value를 비우기 전에 그 값을 다른 변수에 저장해줌.
    const newTodo = toDoinput.value;
    toDoinput.value = "";
    
    /* text대신 object를 만들어서 object안에 각 값들을 넣어주고
       object를 toDos array로 보내줌.
    */
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);

    // 인자로 입력받은 newTodo를 보냄.
    paintToDo(newTodoObj);
    
    // saveToDos function을 실행시켜줌.
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

// "todos"를 TODOS_KEY로 바꿔줌
// localStorage로부터 TODOS_KEY("todos") 키값의 value를 가져옴.
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    
    toDos = parsedToDos;
    /*
    parsedToDos array에 있는 각각의 item에 대해서 function을 실행할 수 있게 해준다.
    */
    parsedToDos.forEach(paintToDo);
}

