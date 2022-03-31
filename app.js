const input = document.getElementById("form");
//const task = document.getElementById("text");
const taskElement = document.getElementsByClassName("element");
const taskContainer = document.getElementsByClassName("task-container")[0];
const doneContainer = document.getElementsByClassName("done-container")[0];

//

taskContainer.addEventListener("click", deleteTask);
taskContainer.addEventListener("click", doneTask);
doneContainer.addEventListener("click", restoreTask);

const tasks = [];
const doneTasks = [];

function addTask() {
  let newTask = { title: input.value, finished: false };
  tasks.push(newTask);
  if (tasks.length >= 7) {
    alert("Do what you've already planned!");
    return;
  }
  const divElement = document.createElement("div");
  const divButtonDel = document.createElement("button");
  const divButtonDone = document.createElement("button");
  divElement.innerText = newTask.title;
  divButtonDel.innerText = "Delete";
  divButtonDone.innerHTML = "Done";
  divElement.append(divButtonDel, divButtonDone);
  taskContainer.append(divElement);
  divElement.classList.add("div-element");
  divButtonDel.classList.add("delete-button");
  divButtonDone.classList.add("done-button");
  input.value = "";
}

function deleteTask(e) {
  const iteam = e.target;
  if (iteam.classList[0] === "delete-button") {
    const todo = iteam.parentElement;
    const todos = todo.parentElement;
    todos.remove();
  }
}

function doneTask(i) {
  const iteam = i.target;
  if (iteam.classList[0] === "done-button") {
    const todo = iteam.parentElement;
    const todos = todo.parentElement;
    todos.remove();
    doneTasks.push(todos);
    const divElement = document.createElement("div");
    const divButtonRestore = document.createElement("button");
    divButtonRestore.innerText = "Restore";
    divButtonRestore.classList.add("restore-button");
    const todoText = todos.innerText.slice(0, -10);
    divElement.innerText = todoText;
    divElement.append(divButtonRestore);
    doneContainer.append(divElement);
  }
}

function restoreTask(i) {
  const iteam = i.target;
  if (iteam.classList[0] === "restore-button") {
    const todo = iteam.parentElement;
    todo.remove();
    tasks.push(todo);
    const divElement = document.createElement("div");
    const divButtonDel = document.createElement("button");
    const divButtonDone = document.createElement("button");
    const todoText = todo.innerText.slice(0, -7);
    divElement.innerText = todoText;
    divButtonDel.innerHTML = "<button class='delete-button'>Delete</button>";
    divButtonDone.innerHTML = "<button class='done-button'>Done</button>";
    divElement.classList.add("div-element");
    divElement.append(divButtonDel, divButtonDone);
    taskContainer.append(divElement);
  }
}
