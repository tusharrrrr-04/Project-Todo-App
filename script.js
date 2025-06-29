let todoList = [
  { 
    item: "Buy milk", 
    dueDate: "23/7/2025" 
  },
  { 
    item: "Go to college", 
    dueDate: "3/8/2025" 
  },
];
displayTodo();

function addTodo() {
  let inputTodo = document.querySelector("#todo-input");
  let inputDateOfTodo = document.querySelector("#todo-date");
  let todoItem = inputTodo.value;
  let todoDate = inputDateOfTodo.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputTodo.value = "";
  inputDateOfTodo.value = "";
  displayTodo();
}

function displayTodo() {
  let containerTodo = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
    <div>
      <span>${item}</span>
      <span>${dueDate}</span>
      <button onclick="todoList.splice(${i}, 1);
      displayTodo();">Delete</button>
    </div>
    `;
  }
  containerTodo.innerHTML = newHtml;
}
