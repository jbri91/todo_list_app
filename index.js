const taskKey = "Saved Task";
let li = document.createElement("li");

submit_todo.addEventListener("click", function (e) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  let str = [JSON.stringify(document.getElementById("textInput").value)];
  let li = document.createElement("li");
  li.innerText = str;
  li.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(li);
  localStorage.setItem(taskKey, str);

  deleteButton.addEventListener("click", function (e) {
    document.getElementById("tasks").removeChild(li);
    localStorage.removeItem(taskKey);
  });
});


// const savedTodos = localStorage.getItem(taskKey);
// console.log(savedTodos);
// debugger;
if (taskKey != null) {
  let deleteButton = document.createElement('button');
  let displayStorage = (li.innerHTML = localStorage.getItem(taskKey));
  document.getElementById('tasks').appendChild(li);
  li.appendChild(deleteButton);
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener("click", function (e) {
    document.getElementById("tasks").removeChild(li);
    localStorage.removeItem(taskKey);
  } 
  )} else {
    li.removeChild(deleteButton);
  }
