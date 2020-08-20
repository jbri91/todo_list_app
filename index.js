const taskKey = "Saved Task";
const savedTodos = JSON.parse(localStorage.getItem(taskKey));
let li = document.createElement("li");


submit_todo.addEventListener("click", addTask() {
  
  })
  

  
    deleteButton.addEventListener("click", deleteTask(e) {

    }



function addTask(e) {
  // e.preventDefault();
  const input = document.getElementById("textInput");

  const task = document.createElement("li");
  task.innerText = input.value;
  task.id = "todo";
  tasks.appendChild(task);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete");
  tasks.appendChild(deleteButton);


  saveTasks(input.value);
  input.value = "";
}



function saveTasks(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTasks() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    let task = document.createElement("li");
    task.id = "todo";
    task.appendChild(document.createTextNode(todo));

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    task.appendChild(deleteButton);

    tasks.appendChild(task);
  });
}

function deleteTask(e) {
  if (e.target.classList[0] === "delete") {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const todoText = e.target.previousSibling.textContent;
    console.log(todoText);
    const index = todos.indexOf(todoText);
  }
    if (index !== -1) {
      console.log(index);
      todos.splice(index, 1);
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    const todo = e.target.parentElement;
    todo.parentElement.removeChild(todo);
  }







