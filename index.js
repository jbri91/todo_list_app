document.getElementById("textInput").addEventListener("keydown", function (e) {
  if (e.which == 13) {
    addTask(e);
  }
});

let tasks = document.getElementById('tasks');
submit_todo.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  const input = document.getElementById("textInput");

  if (input.value.length >= 2) {
    todoCreator(input.value);
    getAndSaveTasks("save", input.value);
    input.value = "";
  } else {
    window.alert("Must Enter A Task");
  }
}

function getAndSaveTasks(option, todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  if (option === "save") {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  } else if (option === "get") {
    return todos;
  }
}

function getTasks() {
  todos = getAndSaveTasks("get");

  if (todos.length > 0) {
    todos.forEach((todo) => {
      let task = todoCreator(todo);
      tasks.appendChild(task);
    })
  }
}

function todoCreator(input) {
  const task = document.createElement("li");
  task.innerText = input;
  task.id = "todo";
  tasks.appendChild(task);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", deleteTask);
  task.appendChild(deleteButton);

  return task;
}

function deleteTask(e) {
  if (e.target.classList[0] === "delete") {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const todoText = e.target.previousSibling.textContent;
    const index = todos.indexOf(todoText);
    if (index !== -1) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const todo = e.target.parentElement;
    todo.parentElement.removeChild(todo);
  }
}

getTasks();
