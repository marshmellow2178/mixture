const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
    //array to string
}

function deleteToDo(event){     //event -> parentElement
    const li = event.target.parentElement;
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
    //delete if id is same
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObject){
    const li = document.createElement("li");
    li.id = newToDoObject.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "□";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    span.innerText = newToDoObject.text;
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text:newToDo,
        id:Date.now(),  //ms -> random id
    }
    todos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){     //loading from localstorage
    const parsedToDos = JSON.parse(savedToDos);     //string to js object
    todos = parsedToDos;    //restore
    parsedToDos.forEach(paintToDo);    
    //fucntion for each array items
    //foreach((item)  => ... ) arrow function
}