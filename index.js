// Things APP Should DO
// When I click submit, item should be added.
// Add delete button
// When I click delete, it should delete.
// localstorage (Last thing)

submit_todo.addEventListener("click", function (e) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  

  let str = document.getElementById("textInput").value;
  let li = document.createElement("li");
  li.innerText = str;
  li.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(li);

  deleteButton.addEventListener("click", function (e) {
    document.getElementById("tasks").removeChild(li);

  });
});








































/* <button id='deleteTask' type='button'>Delete</button> */
// <button onclick='removeTask()'>Delete</button>

// li.addEventListener('click', removeTask() {

// })

// let li = document.createElement('li');

// li.addEventListener('click', function(removeTask) {
//   let deleteTask = document.getElementById('li');
//   deleteTask.remove();
// })

/* Questions
Differences between querySelector, getElementById.
innerHTML and textContent
what is a form element?
Adding two events.
Div, Nav
First day on the job as a developer
*/

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// // itemInput.addEventListener('keydown', runEvent)

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: ' + e.type);

// }

// form.addEventListener('submit', runEvent);

// submit_todo.addEventListener('click', runEvent);

// let newTask = document.createTextNode(str);
// options.appendChild(newTask);
// let tasks = document.querySelector('body .options');
// let ul = document.querySelector('.options')
// innerHTML and textContent

// Notes

// let itemList = document.querySelector('#options');
// console.log(itemList.children[1]);
// console.log(itemList.childNodes);
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);
// console.log(itemList.firstElementChild);
// console.log(itemList.firstChild);
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.children[1].style.backgroundColor = 'yellow';

// Previous button function

// function fn1() {
//     let str = document.getElementById('textInput').value;
//     itemList.firstElementChild.textContent = str;
// }

// Create TODO App
// Input, add to the list.
// Button, add the list.
// capture value from input. create a list item with the todo item.
// Add  attributes to each item. Ex. delete button.
// Programatically add element to the application.
// create li from javascript.
// Functions
// addItem
// addTodo
// create todo. you need to get value of input. set an id on it or a child. text node. That would create the element.
