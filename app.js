const input = document.getElementById("form");
//const task = document.getElementById("text");
const taskElement = document.getElementsByClassName("element");
const taskContainer = document.getElementsByClassName("task-container");
//

const tasks = [];

function addTask() {
  let newTask = { title: input.value, finished: false };
  tasks.push(newTask);

  const taskText = input.value;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = taskText;
  newDiv.appendChild(taskContainer);

  //console.log(tasks);
  input.value = "";
}
