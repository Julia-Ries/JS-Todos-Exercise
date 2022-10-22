const newForm = document.querySelector("#newToDoForm");
const todoList = document.querySelector("#todoList");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerText = savedTodos[i].task;
  newToDo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newToDo.isCompleted) {
    console.log('newtodoli.iscompleted')
    newToDo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newToDo);
}

newForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newToDo = document.createElement("li");
  const taskValue = document.getElementById("task").value;
  newToDo.innerText = taskValue;
  newToDo.isCompleted = false;
  newForm.reset();
  todoList.appendChild(newToDo);



  savedTodos.push({ task: newToDo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function (event) {
  const clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});