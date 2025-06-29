let todoList = [
  {
    item: "Buy milk",
    dueDate: "2025-07-23",
  },
  {
    item: "Go to college",
    dueDate: "2025-08-14",
  },
];
displayTodo();

function addTodo() {
  let inputTodo = document.querySelector("#todo-input");
  let inputDateOfTodo = document.querySelector("#todo-date");
  let todoItem = inputTodo.value;
  let todoDate = inputDateOfTodo.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputTodo.value = "";
  inputDateOfTodo.value = "";
  displayTodo();
}

function displayTodo() {
  let containerTodo = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i}, 1);
      displayTodo();">Delete</button>
    `;
  }
  containerTodo.innerHTML = newHtml;
}
