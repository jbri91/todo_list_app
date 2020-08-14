submit_todo.addEventListener("click", function (e) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  let str = document.getElementById("textInput").value;
  let li = document.createElement("li");
  li.innerText = str;
  li.appendChild(deleteButton);
  localStorage.setItem(str, document.getElementById("tasks").appendChild(li));
  

  deleteButton.addEventListener("click", function (e) {
    localStorage.removeItem(document.getElementById("tasks").removeChild(li));

  
  });
});

