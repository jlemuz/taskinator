var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var selectNameInput = document.querySelector("select[name='select-dropdown']").value;
  listItemEl.textContent = taskNameInput;
};

formEl.addEventListener("submit", createTaskHandler);
