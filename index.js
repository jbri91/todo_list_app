const taskKey = "Saved Task";
const savedTodos = JSON.parse(localStorage.getItem(taskKey));
let li = document.createElement("li");

submit_todo.addEventListener("click", function (e) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  let li = document.createElement("li");
  let str = JSON.stringify([document.getElementById("textInput").value]);
  li.innerText = str;
  li.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(li);
  localStorage.setItem(taskKey, str);

  savedTodos.push(document.getElementById("textInput").value);
  localStorage.setItem(taskKey, JSON.stringify(savedTodos));

  deleteButton.addEventListener("click", function (e) {
    document.getElementById("tasks").removeChild(li);
    savedTodos.splice(0,1);
    localStorage.setItem(taskKey, JSON.stringify(savedTodos));
  });
});
// debugger;
if (taskKey != null) {
  let deleteButton = document.createElement("button");
  let displayStorage = (li.innerHTML = localStorage.getItem(taskKey));
  document.getElementById("tasks").appendChild(li);
  deleteButton.innerHTML = "Delete";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function (e) {
    document.getElementById("tasks").removeChild(li);
    savedTodos.splice(0,1);
    localStorage.setItem(taskKey, JSON.stringify(savedTodos));
  });
} else {
  li.removeChild(deleteButton);
}

//   const savedTodos = JSON.parse(localStorage.getItem(taskKey));

// savedTodos.push(document.getElementById('textInput'.value));

// localStorage.setItem(taskKey, JSON.stringify(savedTodos));
