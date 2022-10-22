const newForm = document.querySelector("#newToDoForm");
const todoList = document.querySelector("#todoList");
document.addEventListener("DOMContentLoaded", function () {


  newForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const removeButton = document.createElement("button");
    removeButton.innerText = "All Done";

    const newToDoLi = document.createElement("li");
    newToDoLi.innerText = document.getElementById("task").value;


    todoList.appendChild(newToDoLi);
    newToDoLi.appendChild(removeButton);

    newForm.reset();
  });


  todoList.addEventListener("click", function (e) {
    const enteredToDo = e.target.tagName.toLowerCase();
    if (enteredToDo === 'li') {
      e.target.style.textDecoration = 'line-through';
    } else if (enteredToDo === 'button')
      e.target.parentElement.remove();
  })


});

