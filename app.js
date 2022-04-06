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
  if (input !== null && input.value === "") {
    alert("You forgot to write your task.");
    return;
  }
  tasks.push(newTask);
  const divElement = document.createElement("div");
  const divButtonDel = document.createElement("button");
  const divButtonDone = document.createElement("button");
  const divP = document.createElement("div");
  divP.innerText = newTask.title;
  divButtonDel.innerText = "Delete";
  divButtonDone.innerText = "Done";
  divElement.append(divP, divButtonDel, divButtonDone);
  taskContainer.append(divElement);
  divElement.classList.add("div-element");
  divP.classList.add("div-p");
  divButtonDel.classList.add("delete-button");
  divButtonDone.classList.add("done-button");
  input.value = "";
}

function deleteTask(e) {
  const iteam = e.target;
  if (iteam.classList[0] === "delete-button") {
    const todo = iteam.parentElement;
    todo.remove();
  }
}

function doneTask(i) {
  const iteam = i.target;
  if (iteam.classList[0] === "done-button") {
    const todo = iteam.parentElement;
    todo.remove();
    doneTasks.push(todo);
    const divElement = document.createElement("div");
    const divButtonRestore = document.createElement("button");
    const divInside = document.createElement("div");
    divButtonRestore.innerText = "Restore";
    divButtonRestore.classList.add("restore-button");
    divInside.classList.add("div-inside");
    const todoText = todo.innerText.slice(0, -10);
    divInside.innerText = todoText;
    divElement.append(divInside, divButtonRestore);
    doneContainer.append(divElement);
    divElement.classList.add("done-element");
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
    const divP = document.createElement("div");
    const todoText = todo.innerText.slice(0, -7);
    divElement.innerText = todoText;
    divButtonDel.innerText = "Delete";
    divButtonDone.innerText = "Done";
    divElement.classList.add("div-element");
    divButtonDel.classList.add("delete-button");
    divButtonDone.classList.add("done-button");
    divElement.append(divP, divButtonDel, divButtonDone);
    divP.classList.add("div-p");
    taskContainer.append(divElement);
  }
}
