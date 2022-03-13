const input = document.getElementById("form");
const task = document.getElementById("text");
//

let tasks = [];

function addTask() {
  let newTask = input.value;
  tasks.push(newTask);

  console.log(tasks);
  input.value = "";
}
