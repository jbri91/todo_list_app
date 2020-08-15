submit_todo.addEventListener("click", function (e) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  let str = JSON.stringify(document.getElementById("textInput").value);
  let li = document.createElement("li");

  li.innerText = str;
  li.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(li);
  localStorage.setItem(Math.random(), str);
  

  deleteButton.addEventListener("click", function (e) {
    localStorage.removeItem(document.getElementById("tasks").removeChild(li));
  });
});


/* Questions
- delete button does not remove from localStorage.
- I moved 'str' to the value side of localStorage. I put Math.random() on
the key side.
*/
